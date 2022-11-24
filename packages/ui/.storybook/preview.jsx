// Dependencies
import * as React from "react";
import { withPerformance } from "storybook-addon-performance";
import { themes } from "@storybook/theming";
import { MSThemeProvider } from "@sygris/react-sdk";
import { DocsPage, DocsContainer } from "@storybook/addon-docs";
import { addParameters } from "@storybook/react";

// Components
addParameters({
	docs: {
		container: DocsContainer,
		page: DocsPage
	}
});

/**
 * Add global context for RTL-LTR switching
 */
export const globalTypes = {
	direction: {
		name: "Direction",
		description: "Direction for layout",
		defaultValue: "LTR",
		toolbar: {
			icon: "globe",
			items: ["LTR", "RTL"]
		}
	},
	theme: {
		name: "Theme",
		description: "Global theme",
		defaultValue: "light",
		toolbar: {
			icon: "lightning",
			items: ["dark", "light"],
			showName: true
		}
	}
};

export const parameters = {
	options: {
		storySort: (a, b) =>
			a[1].kind === b[1].kind
				? 0
				: a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
	},
	docs: {
		theme: themes.dark,
		source: {
			state: "open"
		}
	}
};

export const decorators = [
	withPerformance,
	(Story, context) => {
		const theme = context.globals.theme;

		return (
			<MSThemeProvider mode={theme}>
				<Story />
			</MSThemeProvider>
		);
	}
];
