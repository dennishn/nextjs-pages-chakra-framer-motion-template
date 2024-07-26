// eslint-disable-next-line turbo/no-undeclared-env-vars
const isCi = Boolean(process.env.CI);

if (!isCi) {
	const husky = (await import("husky")).default;
	husky();
} else {
	console.log(
		"Skipped configuring Husky Git hooks as process is running in a Continuous Integration environment."
	);
}
