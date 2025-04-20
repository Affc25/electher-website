export const formatDate = (dateString: string) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const regex = /([A-Za-z]+)\s(\d{1,2})/;
  const match = dateString.match(regex);

  if (match) {
    const month = months.indexOf(match[1]);
    const day = match[2].padStart(2, "0");  // Ensure two digits for day
    return { month: match[1], day };
  }
  
  return null; // Return null if no match found
};

export const formatDateRange = (startDateString: string, endDateString: string) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const endDate = new Date(endDateString);
  const startDate = new Date(startDateString);
  const startMonth = months[startDate.getMonth()];
  const startDay = String(startDate.getDate()).padStart(2, '0');
  const endMonth = months[endDate.getMonth()];
  const endDay = String(endDate.getDate()).padStart(2, '0');
  const year = startDate.getFullYear(); // Assuming start and end year are the same

  // If the start and end months are the same, just use the range of days
  if (startMonth === endMonth) {
    return `${startMonth} ${startDay}-${endDay}, ${year}`;
  } else {
    // Otherwise, format month and year for both start and end dates
    return `${startMonth} ${startDay}-${endMonth} ${endDay}, ${year}`;
  }
};

