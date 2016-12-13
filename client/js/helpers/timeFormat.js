export function timeConverter(ISO_timestamp){
  const a = new Date(ISO_timestamp);
  const b = new Date();

  // Format hour in meridiem format
  let hour = a.getHours();
  const meridiem = hour < 12 ? 'am' : 'pm';
  hour = hour < 13 ? hour : hour - 12;
  hour = hour === 0 ? 12 : hour;

  // Grab other time components
  const year = a.getFullYear();
  let month = a.getMonth();
  const date = a.getDate();
  let min = a.getMinutes();
  min = min < 10 ? `0${min}` : min;

  // Compare time to current time stamp
  if (month === b.getMonth() && year === b.getFullYear()) {
    if (date === b.getDate()) {
      return `Today ${hour}:${min}${meridiem}`;
    }
    if (date === b.getDate() - 1) {
      return `Yesterday ${hour}:${min}${meridiem}`;
    }
  }

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  month = months[month];
  const time = `${date} ${month} ${year} ${hour}:${min}${meridiem}`;
  return time;
}
