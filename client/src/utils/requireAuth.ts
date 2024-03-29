import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { getLoggedInUser } from ".";

export const requireAuth = async ({ request }: LoaderFunctionArgs) => {
	const pathname = new URL(request.url).pathname;
	const data = await getLoggedInUser();
	if (!data.success)
		throw redirect(
			`/login?message=You must login first&redirectTo=${pathname}`
		);
};
