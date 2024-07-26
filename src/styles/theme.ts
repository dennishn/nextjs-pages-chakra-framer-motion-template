import { extendTheme, withDefaultProps } from "@chakra-ui/react";

const theme = extendTheme(
	withDefaultProps({
		defaultProps: {
			colorScheme: "gray",
			size: "lg",
			variant: "outline",
		},
	}),
	{
		fonts: {
			heading: "var(--font-nunito)",
			body: "var(--font-nunito)",
		},
	},
);

export { theme };
