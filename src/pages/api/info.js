import uap from "ua-parser-js";

export default async function handler(req, res) {
  // Parse the user-agent string
  const userAgent = req.headers["user-agent"];
  const ua = uap(userAgent);
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // Get the user's timezone offset
  const clientTimeZoneOffset = getClientTimeZoneOffset();
  // Get the user's IP address
  const userIP = req.connection.remoteAddress;

  // Get the user's preferred language and locale
  const userLanguage = formatAcceptLanguage(req.headers["accept-language"]);

  // Get HTTP request and response headers
  const requestHeaders = req.headers;
  const responseHeaders = res.getHeaders();

  // Sample user interaction data
  const interaction = {
    type: "mousemove", // Or 'keydown' for a keystroke
    details: "This is a sample interaction.",
  };

  const os = ua.os.name;
  const browser = ua.browser.name;
  const device = ua.device.type;
  const engine = ua.engine.name;
  const cpu = ua.cpu.architecture;
  let city = "Unknown";
  let country = "Unknown";
  let region = "Unknown";
  let postal = "Unknown";
  let loc = "Unknown";
  let org = "Unknown";

  const res1 = await fetch(`https://ipinfo.io/${userIP}/json`);
  const data = await res1.json();

  if (data.city) {
    city = data.city;
  }
  if (data.country) {
    country = data.country;
  }
  if (data.region) {
    region = data.region;
  }
  if (data.postal) {
    postal = data.postal;
  }
  if (data.loc) {
    loc = data.loc;
  }
  if (data.org) {
    org = data.org;
  }

  res.status(200).json({
    message: "Successfully retrieved user's data",
    ua: ua,
    timeZoneOffset: timezone,
    ip: userIP,
    language: userLanguage,
    requestHeaders: requestHeaders,
    responseHeaders: responseHeaders,
    interaction: interaction,
    os: os,
    cpu: cpu,
    browser: browser,
    userAgent: userAgent,
    city: city,
    country: country,
    region: region,
    postal: postal,
    loc: loc,
    org: org,
  });
}

// Function to get the client's timezone offset
function getClientTimeZoneOffset() {
  const now = new Date();
  const timeZoneOffset = now.getTimezoneOffset();

  // Convert the offset to hours and minutes
  const hours = Math.abs(Math.floor(timeZoneOffset / 60));
  const minutes = Math.abs(timeZoneOffset % 60);

  const sign = timeZoneOffset > 0 ? "-" : "+"; // Determine if the timezone is ahead or behind UTC

  return `${sign}${padZero(hours)}:${padZero(minutes)}`;
}

// Helper function to pad zeros
function padZero(num) {
  return num < 10 ? `0${num}` : num;
}

// Function to format the "accept-language" header
function formatAcceptLanguage(acceptLanguageHeader) {
  // Split the header into individual language/locale preferences
  const preferences = acceptLanguageHeader.split(",");

  // Extract the preferred language and locale from the first preference
  const [firstPreference] = preferences[0].trim().split(";")[0].split("-");

  return firstPreference;
}
