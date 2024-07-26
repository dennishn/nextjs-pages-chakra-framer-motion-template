import type { AppProps } from "next/app";
import { ThemingProvider } from "@/styles/theming-provider";
import { fonts } from "@/styles/fonts";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>DNI&apos;s Next.js Starter</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<style jsx global>
				{`
					:root {
						--font-nunito: ${fonts.nunito.style.fontFamily};
					}
				`}
			</style>
			<ThemingProvider>
				<Component {...pageProps} />
			</ThemingProvider>
		</>
	);
}
