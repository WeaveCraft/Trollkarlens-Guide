export default interface Pub {
    id: number;
    isNew: number;
    address: string;
    postalCode: string;
    city: string;
    mobilePhone: string | null;
    longitude: number;
    latitude: number;
    status: number;
    timeBooked: number;
    startDate: Date;
    endDate: Date;
    scheduleId: number;
    haveVisited: string;
  }