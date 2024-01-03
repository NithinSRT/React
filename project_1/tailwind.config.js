/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-bg": "url('project_1srcassetsImages\bg.png')",
        "home-bg": "url('project_1srcassetsImagesduke.png')",
      },
      colors: {
        "login-button": "#0063E4",
        "body-bg": "#040417",
        "viewer-hover": "#f9f9f91a",
        recomended: "rgba(249,249,249,0.6)",
      },
      transitionTimingFunction: {
        viewer: "cubic-bezier(0.25,0.46,0.45,0.94)",
      },
      boxShadow: {
        viewer:
          "0px 26px -10px rgba(0,0,0,0,0.69), 0px 16px 10px -10px rgba(0,0,0,0.73)",
        "viewer-hover":
          "0 40px 58px -16px rgba(0,0,0,0,0.8), 0 30px -10px rgba(0,0,0,0,0.72)",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("video-hover", "&:hover > video");
    },
    function ({ addVariant }) {
      addVariant("navitem-hover", "&:hover > span");
    },
  ],
};
