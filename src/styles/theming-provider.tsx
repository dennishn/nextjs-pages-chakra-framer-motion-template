"use client";

import type { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/theme";

type ThemingProviderProps = { children: ReactNode };

const ThemingProvider = ({ children }: ThemingProviderProps) => (
	<ChakraProvider theme={theme}>{children}</ChakraProvider>
);

export { ThemingProvider };
