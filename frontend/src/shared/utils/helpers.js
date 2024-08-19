import { format, isToday, isYesterday, isThisWeek, isThisYear } from 'date-fns';

export const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
};


export const formatDate = (timestamp) => {
  const date = new Date(timestamp);

  if (isToday(date)) {
    return format(date, 'p'); // "10:30 AM"
  } else if (isYesterday(date)) {
    return 'Yesterday';
  } else if (isThisWeek(date)) {
    return format(date, 'EEE'); // "Monday", "Tuesday", etc.
  } else if (isThisYear(date)) {
    return format(date, 'MMM d'); // "Aug 15"
  } else {
    return format(date, 'MMM d, yyyy'); // "Aug 15, 2023"
  }
};