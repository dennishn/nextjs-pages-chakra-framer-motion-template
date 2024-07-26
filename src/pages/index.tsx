import { Heading, ListItem, UnorderedList, VStack } from "@chakra-ui/react";

export default function Home() {
	return (
		<VStack h="100vh" justifyContent="center">
			<Heading as="h1">DNI&apos;s Next.js Starter</Heading>
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
