import Image from "next/image";
import { Inter } from "next/font/google";
import Script from "next/script";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Code,
  Tooltip,
  Spacer,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [userInteractions, setUserInteractions] = useState([]);
  const [mouseMovementCount, setMouseMovementCount] = useState(0);
  const [keypressCount, setKeypressCount] = useState(0);
  const [connectionType, setConnectionType] = useState("Unknown"); // [1
  const [screenWidth, setScreenWidth] = useState(0); // [2
  const [screenHeight, setScreenHeight] = useState(0); // [3
  const [useragent, setUseragent] = useState("Unknown"); // [4
  const [referrer, setReferrer] = useState("Loading...");
  const [orientation, setOrientation] = useState("Loading...");
  const [ua, setUa] = useState("Loading...");
  const [ip, setIp] = useState("Loading...");
  const [language, setLanguage] = useState("Loading...");
  const [requestHeaders, setRequestHeaders] = useState("Loading...");
  const [responseHeaders, setResponseHeaders] = useState("Loading...");
  const [timeZoneOffset, setTimeZoneOffset] = useState("Loading...");
  const [os, setOs] = useState("Loading...");
  const [cpu, setCpu] = useState("Loading...");
  const [browser, setBrowser] = useState("Loading...");
  const [city, setCity] = useState("Loading...");
  const [country, setCountry] = useState("Loading...");
  const [region, setRegion] = useState("Loading...");
  const [postal, setPostal] = useState("Loading...");
  const [loc, setLoc] = useState("Loading...");
  const [org, setOrg] = useState("Loading...");
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [mouseClicks, setMouseClicks] = useState(0);

  useEffect(() => {
    // Track scroll events
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const percentage = (scrolled / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(percentage);
    };

    // Track time spent on the site
    const startTime = Date.now();

    // Track mouse clicks
    const handleClick = () => {
      setMouseClicks((prevClicks) => prevClicks + 1);
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClick);

    // Clean up event listeners and calculate time spent
    return () => {
      const endTime = Date.now();
      const timeElapsed = (endTime - startTime) / 1000; // in seconds
      setTimeSpent(timeElapsed);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  // Event listener for mouse movement
  useEffect(() => {
    const handleMouseMovement = () => {
      setMouseMovementCount((prevCount) => prevCount + 1);
    };
    window.addEventListener("mousemove", handleMouseMovement);

    return () => {
      window.removeEventListener("mousemove", handleMouseMovement);
    };
  }, []);

  // Event listener for keypress
  useEffect(() => {
    const handleKeypress = () => {
      setKeypressCount((prevCount) => prevCount + 1);
    };
    window.addEventListener("keydown", handleKeypress);

    return () => {
      window.removeEventListener("keydown", handleKeypress);
    };
  }, []);

  useEffect(() => {
    const Fetch = async () => {
      const res = await fetch("/api/info");
      const data = await res.json();
      setUa(data.ua);
      setIp(data.ip);
      setLanguage(data.language);
      setOs(data.os);
      setCpu(data.cpu);
      setRequestHeaders(data.requestHeaders);
      setResponseHeaders(data.responseHeaders);
      setTimeZoneOffset(data.timeZoneOffset);
      setBrowser(data.browser);
      setUseragent(data.userAgent);
      setCity(data.city);
      setCountry(data.country);
      setRegion(data.region);
      setPostal(data.postal);
      setLoc(data.loc);
      setOrg(data.org);
    };

    Fetch();
  }, []);

  useEffect(() => {
    // Function to detect and update screen orientation
    function detectScreenOrientation() {
      if (window.matchMedia("(orientation: portrait)").matches) {
        setOrientation("Portrait");
      } else {
        setOrientation("Landscape");
      }
    }

    // Listen for orientation changes
    window.addEventListener("orientationchange", detectScreenOrientation);

    // Detect initial screen orientation
    detectScreenOrientation();

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("orientationchange", detectScreenOrientation);
    };
  }, []);
  useEffect(() => {
    // Fetch and set the referrer information when the component mounts
    setReferrer(document.referrer || "Not available");
  }, []);

  useEffect(() => {
    if (navigator.connection) {
      setConnectionType(navigator.connection.effectiveType);
    }

    setScreenWidth(window.screen.width);
    setScreenHeight(window.screen.height);
  }, []);

  return (
    <main
      className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="max-w-5xl w-full flex flex-col items-center justify-center font-mono text-sm lg:flex-row lg:justify-between">
        <Image
          src="https://cdn.urlcut.app/DataDig.png"
          alt="DataDig Logo"
          width={180}
          height={37}
          priority
        />
        <div className="text-center mt-4 lg:mt-0">
          <span className="mb-4">
            See all the data a website can gather about you with DataDig
          </span>
          <a
            href="https://ko-fi.com/Y8Y2J5CWM"
            target="_blank"
            className="inline-block"
          >
            <img
              height={36}
              style={{ border: "0", height: "36px" }}
              src="https://storage.ko-fi.com/cdn/kofi5.png?v=3"
              border="0"
              alt="Buy Me a Coffee at ko-fi.com"
            />
          </a>
        </div>
        <a
          href="https://github.com/your-github-repo"
          target="_blank"
          className="mt-4 lg:mt-0 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
        >
          <svg
            className="w-4 h-4 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.830.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
              clipRule="evenodd"
            />
          </svg>
          Proudly open source on GitHub
        </a>

        <Spacer y={2} />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://uaparser.js.org/images/types/default.png"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Device Information</p>
              <p className="text-small text-default-500">
                Information a website can see about your device
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Code>Screen Height: {screenHeight}</Code>
            <Divider className="my-1" />
            <Code>Screen Width: {screenWidth}</Code>
            <Divider className="my-1" />
            <Code>Operating System: {os}</Code>
            <Divider className="my-1" />
            <Code>Processor: {cpu}</Code>
            <Divider className="my-1" />
            <Code>Orientation: {orientation}</Code>
          </CardBody>
        </Card>
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://uaparser.js.org/images/browsers/default.png"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Browser Information</p>
              <p className="text-small text-default-500">
                Information a website can see about your browser
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Code>Browser: {browser}</Code>
            <Divider className="my-1" />
            <Tooltip content={useragent}>
              <Code>UserAgent: {useragent.substring(0, 11) + "..."}</Code>
            </Tooltip>
            <Divider className="my-1" />
            <Code>Language: {language}</Code>
            <Divider className="my-1" />
            <Code>Referrer: {referrer}</Code>
            <Divider className="my-1" />
            <Code>Timezone: {timeZoneOffset}</Code>
          </CardBody>
        </Card>
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://cdn.urlcut.app/flags-of-the-world-globe-world-flag-country-543639512756c3bc4f61787dfefe1de1.png"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Location Information</p>
              <p className="text-small text-default-500">
                Information a website can see about your location
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Code>IP address: {ip}</Code>
            <Divider className="my-1" />

            <Code>City: {city}</Code>

            <Divider className="my-1" />
            <Code>Country: {country}</Code>
            <Divider className="my-1" />
            <Code>Region: {region}</Code>
            <Divider className="my-1" />
            <Code>Postal: {postal}</Code>
            <Divider className="my-1" />
            <Code>Location: {loc}</Code>
            <Divider className="my-1" />
            <Tooltip content={org}>
              <Code>Organization: {org.substring(0, 11) + "..."}</Code>
            </Tooltip>
          </CardBody>
        </Card>
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://uaparser.js.org/images/browsers/default.png"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Request Headers</p>
              <p className="text-small text-default-500">
                Information about the request headers
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Code>Host: {requestHeaders.host}</Code>
            <Divider className="my-1" />
            <Tooltip content={useragent}>
              <Code>UserAgent: {useragent.substring(0, 11) + "..."}</Code>
            </Tooltip>
            <Divider className="my-1" />
            <Code>Accept: {requestHeaders.accept}</Code>
            <Divider className="my-1" />
            <Code>Referer: {requestHeaders.referer}</Code>
            <Divider className="my-1" />
            <Code>Connection: {requestHeaders.connection}</Code>

            <Divider className="my-1" />
            <Code>Accept-Language: {requestHeaders["accept-language"]}</Code>
            <Divider className="my-1" />
            <Code>Accept-Encoding: {requestHeaders["accept-encoding"]}</Code>
            <Divider className="my-1" />
            <Code>Set-Fetch-Mode: {requestHeaders["sec-fetch-mode"]}</Code>
          </CardBody>
        </Card>
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://uaparser.js.org/images/browsers/default.png"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Events</p>
              <p className="text-small text-default-500">
                Information about the events you have triggered
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Code>Mouse movement: {mouseMovementCount}</Code>
            <Divider className="my-1" />
            <Code>Keypress: {keypressCount}</Code>
            <Divider className="my-1" />
            <Code>Scroll percentage: {scrollPercentage.toFixed(2)}%</Code>
            <Divider className="my-1" />
            <Code>Mouse Clicks: {mouseClicks}</Code>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
