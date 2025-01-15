/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      screens: {
        xsm: "450px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "16/9": "16 / 9",
      },
      backgroundPosition: {
        'custom-pos': '30% 30%',  // Example: custom position at 30% horizontally and 50% vertically
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(270deg, rgba(87, 0, 199, 0.4) 6.44%, rgba(86, 0, 196, 0.5) 46.74%, #410094 100%)",
        "customgradient-background":
          "linear-gradient(270deg, rgba(87, 0, 199, 0.32) 6.44%, rgba(86, 0, 196, 0.4) 24.14%, rgba(65, 0, 148, 0.8) 100%)",
        "header-background-image":
          " linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),url(/public/Rectangle128.png)",
        "header-background-bluetheme": "url(/public/Rectangle 145.png)",
        landingpageBackgroundImage:
          "linear-gradient(rgba(31, 31, 31, 0.85), rgba(31, 31, 31, 0.65)),url('/public/122.jpg')",
      },
      colors: {
        AIDEOTYPO: "rgba(110, 0, 250, 1)",
        darkpurple: "#5700C7",
        midpurple: "#5600C4",
        lightpurple: "#410094",
        purplebtn: "#6E00FA",
      },
      height: {
        "custom-height": "508px",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        customscroll: "scroll 40s linear infinite",
        customscrollreverse: "scroll 40s reverse linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
