const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "purple-dark": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            background: "#0D001A",
            foreground: "#ffffff",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#DD62ED",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
      "ocean-breeze": {
        extend: "light",
        colors: {
          background: "#E6F4F1",
          foreground: "#333333",
          primary: {
            50: "#4CC9CA",
            100: "#6BD6D7",
            200: "#8CE3E4",
            300: "#AEEFF0",
            400: "#C5F7F8",
            500: "#D7FAFB",
            600: "#EAFDFD",
            700: "#F2FFFF",
            800: "#F7FFFF",
            900: "#FCFFFF",
            DEFAULT: "#4CC9CA",
            foreground: "#333333",
          },
          focus: "#8CE3E4",
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },
      "retro-vibes": {
        extend: "dark",
        colors: {
          background: "#1B1A34",
          foreground: "#FFC600",
          primary: {
            50: "#845EC2",
            100: "#9771D0",
            200: "#A986DD",
            300: "#BFA1E9",
            400: "#D6BCE8",
            500: "#EDD6E6",
            600: "#F5E3EE",
            700: "#FAF1F7",
            800: "#FCF8FB",
            900: "#FEFDFE",
            DEFAULT: "#845EC2",
            foreground: "#FFC600",
          },
          focus: "#A986DD",
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },
    }),
  ],
};
