import type { ChakraComponent, HTMLChakraProps } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import type { ImageProps as NextImageProps } from "next/image";
import NextImage from "next/image";

export type ImageProps = NextImageProps &
	Omit<HTMLChakraProps<"img">, keyof NextImageProps>;

const imageProps: (keyof NextImageProps)[] = [
	"src",
	"alt",
	"width",
	"height",
	"fill",
	"loader",
	"quality",
	"priority",
	"loading",
	"placeholder",
	"blurDataURL",
	"unoptimized",
	"onLoad",
	"crossOrigin",
	"decoding",
	"referrerPolicy",
	"sizes",
	"style",
	"useMap",
];

export const Image: ChakraComponent<"img", NextImageProps> = chakra(NextImage, {
	shouldForwardProp: (prop) => (imageProps as string[]).includes(prop),
});
