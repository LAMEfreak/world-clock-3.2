// Add new timezones using TZ identifiers from https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List

const CLOCK_DATA = [
  { city: "Singapore", timezone: "Asia/Singapore" },
  { city: "Iceland", timezone: "Iceland" },
  { city: "Cairo", timezone: "Africa/Cairo" },
  { city: "Detroit", timezone: "America/Detroit" },
  { city: "Bissau", timezone: "Africa/Bissau" },
  { city: "Amsterdam", timezone: "Europe/Amsterdam" },
  { city: "Melbourne", timezone: "Australia/Melbourne" },
  { city: "London", timezone: "Europe/London" },
  { city: "Dubai", timezone: "Asia/Dubai" },
  { city: "Hong Kong", timezone: "Asia/Hong_Kong" },
  { city: "Paris", timezone: "Europe/Paris" },
  { city: "Maldives", timezone: "Indian/Maldives" },
  { city: "Prague", timezone: "Europe/Prague" },
  { city: "Hawaii", timezone: "US/Hawaii" },
  { city: "Stockholm", timezone: "Europe/Stockholm" },
];

const sortedClockData = [...CLOCK_DATA].sort((a, b) =>
  a.city.localeCompare(b.city)
);

export default sortedClockData;
