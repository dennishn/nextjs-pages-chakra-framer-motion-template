import { Nunito } from "next/font/google";

const nunito = Nunito({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-nunito",
});

export const fonts = {
	nunito,
};
