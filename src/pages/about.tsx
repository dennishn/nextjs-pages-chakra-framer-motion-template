import { Heading, VStack } from "@chakra-ui/react";
import { Link } from "@/components/Link";

export default function Home() {
	return (
		<VStack h="100vh" justifyContent="center">
			<Heading as="h1">This is the About Page</Heading>
			<Link href="/">Go to Home page</Link>
		</VStack>
	);
}
