import type { Preview } from "@storybook/react-vite";
import "./preview.css";

const previewObj: Preview = {
  parameters: {
    "@storybook/addon-themes": {
      default: "light",
      list: [
        { name: "light", class: "", color: "#ffffff" },
        { name: "dark", class: "dark", color: "#16161a" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },
};

export default previewObj;
