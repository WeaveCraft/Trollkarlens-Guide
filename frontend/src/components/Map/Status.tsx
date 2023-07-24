const markerStatus = (timeBooked: number, startDate: string) => {
    const currentDate = new Date();
    const compareDate = new Date(startDate);
    const timeDiff = currentDate.getTime() - compareDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
    if (timeBooked === 1) {
      return '#F2D36E'; //  yellow
    } else if (daysDiff >= 15) {
      return '#F70A10'; //  red
    } else if (daysDiff >= 8 && daysDiff <= 14) {
      return '#F2D36E'; //  yellow
    } else {
      return '#45ad45'; //  green
    }
  };
  
  export default markerStatus;