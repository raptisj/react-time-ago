const MILLISECONDS = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_WEEK = 7;

export const MILLISECOND_MINUTE = MILLISECONDS * SECONDS_IN_MINUTE;
export const MILLISECOND_HOUR =
  MILLISECONDS * SECONDS_IN_MINUTE * MINUTES_IN_HOUR;
export const MILLISECOND_DAY =
  MILLISECONDS * SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY;
export const MILLISECOND_WEEK =
  MILLISECONDS *
  SECONDS_IN_MINUTE *
  MINUTES_IN_HOUR *
  HOURS_IN_DAY *
  DAYS_IN_WEEK;

export const monthFullName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthShortName = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const MESSAGE = {
  UNDER_A_MINUTE: "just now",
  ONE_MINUTE: " minute ago",
  UNDER_AN_HOUR: " minutes ago",
  ONE_HOUR: " hour ago",
  UNDER_A_DAY: " hours ago",
  UNDER_TODAY: "yesterday",
  DAYS_AGO: " days ago",
};

export const DATE_TYPES = {
  d: "d",
  eee: "eee",
  MM: "MM",
  MMM: "MMM",
  MMMM: "MMMM",
  yy: "yy",
  y: "y",
  tt: "tt",
};
