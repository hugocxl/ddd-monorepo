import { create } from "@storybook/theming";
// @ts-ignore
import brandImage from "./logo.svg";

export default create({
	base: "dark",
	brandTitle: "sygris UI",
	brandUrl: "https://sygris.com",
	brandImage,
	appBg: "black"
});
