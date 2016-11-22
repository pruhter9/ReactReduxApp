export function timeConverter(ISO_timestamp){
  var a = new Date(ISO_timestamp);
  var b = new Date();

  // Format hour in meridiem format
  var hour = a.getHours();
  var meridiem = hour < 12 ? 'am' : 'pm';
  hour = hour < 13 ? hour : hour - 12;
  hour = hour == 0 ? 12 : hour;

  // Grab other time components
  var year = a.getFullYear();
  var month = a.getMonth();
  var date = a.getDate();
  var min = a.getMinutes();
  min = min < 10 ? '0' + min : min;

  // Compare time to current time stamp
  if (month == b.getMonth() && year == b.getFullYear()) {
    if (date == b.getDate())
      return 'Today ' + hour + ':' + min + meridiem;
    if (date == b.getDate() - 1)
      return 'Yesterday ' + hour +':' + min + meridiem;
  }

  var months = [
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
    'December'
  ]

  month = months[month];
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + meridiem;
  return time;
}