import { useState } from 'react';
import { MarkerF, InfoWindowF } from '@react-google-maps/api';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import markerStatus from './Status';
import { markerGlyph, markerGlyphSize } from './Glyph';
import Pub from '../../models/Pub';

const InformationWindow = styled.div({
  fontFamily: 'Roboto',
});

const InfoAddress = styled.div({
  marginLeft: '0.5rem',
});

const InfoContent = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
});

const InfoHolder = styled.div({
  margin: '0.5em',
});

const InfoTitle = styled.div({
  alignItems: 'left',
  fontWeight: '500',
  fontSize: '1em',
});

const InfoResult = styled.div({
  fontSize: '1.3em',
});

const Marker = ({ workOrderList }: { workOrderList: Pub[] }) => {
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState<Pub | undefined>();
  const { state } = useLocation();

  const handleMarkerClick = (id: number) => {
    setActiveMarker(workOrderList.find((obj) => obj.id === id));
    setShowInfoWindow(true);
  };

  const handleInfoWindowCloseClick = () => {
    setShowInfoWindow(false);
  };

  return (
    <>
      {workOrderList.length > 0 &&
        workOrderList.map((marker: Pub) => (
          <MarkerF
            key={marker.id}
            position={{
              lat: marker.latitude,
              lng: marker.longitude,
            }}
            onClick={() => {
              handleMarkerClick(marker.id);
            }}
            label={{
              text: markerGlyph(marker.status, marker.haveVisited),
              fontFamily: 'Material Icons',
              color: '#ffffff',
              fontSize: markerGlyphSize(markerGlyph(marker.status, marker.haveVisited)),
            }}
            icon={{
              anchor: new google.maps.Point(0, 20),
              labelOrigin: new google.maps.Point(0, 8),
              path: 'M -3 5 M 0 0 q 2.906 0 4.945 2.039 t 2.039 4.945 q 0 1.453 -0.727 3.328 t -1.758 3.516 t -2.039 3.07 t -1.711 2.273 l -0.75 0.797 q -0.281 -0.328 -0.75 -0.867 t -1.688 -2.156 t -2.133 -3.141 t -1.664 -3.445 t -0.75 -3.375 q 0 -2.906 2.039 -4.945 t 4.945 -2.039 z',
              fillColor: markerStatus(marker.timeBooked, marker.startDate.toString()),
              fillOpacity: 1,
              strokeWeight: 0.5,
              scale: 2,
            }}
          >
            {showInfoWindow &&
              activeMarker !== undefined &&
              activeMarker.id === marker.id && (
                <InfoWindowF onCloseClick={handleInfoWindowCloseClick}>
                  {activeMarker !== undefined && (
                    <InformationWindow key={activeMarker.id}>
                      <InfoAddress>
                        <InfoTitle>Address: </InfoTitle>
                        <InfoResult>
                          {activeMarker.address}, {activeMarker.postalCode}, {activeMarker.city}
                        </InfoResult>
                      </InfoAddress>
                      <InfoContent>
                        {/* <InfoHolder>
                          <InfoTitle>Kund Nr: </InfoTitle>
                          <InfoResult>{activeMarker.customerId}</InfoResult>
                        </InfoHolder> */}
                        <InfoHolder>
                          <InfoTitle>Start tid: </InfoTitle>
                          <InfoResult>
                            {activeMarker.startDate.toString().substring(0, 16).replace('T', ' ')}
                          </InfoResult>
                        </InfoHolder>
                        <InfoHolder>
                          <InfoTitle>Mobil Nr: </InfoTitle>
                          <InfoResult>{activeMarker.mobilePhone}</InfoResult>
                        </InfoHolder>
                      </InfoContent>
                      <div style={{ display: 'flex', justifyContent: 'right' }}>
                        {/* <Button
                          sx={{ backgroundColor: 'navy' }}
                          variant="contained"
                          onClick={''}
                          disabled={activeMarker.status > 2}
                        >
                          Mer Info
                        </Button> */}
                      </div>
                    </InformationWindow>
                  )}
                </InfoWindowF>
              )}
          </MarkerF>
        ))}
    </>
  );
};

export default Marker;