import {
	Box,
	Heading,
	ListItem,
	UnorderedList,
	VStack,
} from "@chakra-ui/react";
import { Image } from "@/components/Image";
import { Link } from "@/components/Link";

export default function Home() {
	return (
		<VStack h="100vh" justifyContent="center">
			<Box
				width="200px"
				height="200px"
				position="relative"
				borderRadius="md"
				overflow="hidden"
			>
				<Image
					priority
					src="https://picsum.photos/id/38/200"
					alt="https://picsum.photos/id/38/200"
					fill
					sizes="25vw"
				/>
			</Box>
			<Heading as="h1">DNI&apos;s Next.js Starter</Heading>
			<Box p={4}>
				<Link href="/about">Go to About page</Link>
			</Box>
			<Heading as="h2" size="md">
				Features
			</Heading>
			<UnorderedList>
				<ListItem>Pages Router</ListItem>
				<ListItem>Chakra UI</ListItem>
				<ListItem>Framer Motion</ListItem>
			</UnorderedList>
			<Heading as="h2" size="md">
				Tooling
			</Heading>
			<UnorderedList>
				<ListItem>Typescript</ListItem>
				<ListItem>ESLint</ListItem>
				<ListItem>Prettier</ListItem>
				<ListItem>Husky</ListItem>
				<ListItem>lint-staged</ListItem>
			</UnorderedList>
		</VStack>
	);
}
