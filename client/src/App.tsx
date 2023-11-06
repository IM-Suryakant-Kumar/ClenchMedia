import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
// loaders and actions
import Layout, { loader as layoutLoader } from "./components/Layout";
import Home, { loader as homeLoader } from "./pages/Home";
import Videos, { loader as videosLoader } from "./pages/Videos";
import Login, { loader as loginLoader, action as loginAction } from "./pages/Login";
import Signup, { loader as signupLoader, action as signupAction } from "./pages/Signup";
import HostLayout, { loader as hostLayoutLoader } from "./components/HostLayout";
import VideoDetails, { loader as videoDetailsLoader } from "./pages/VideoDetails";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Layout />}
			loader={layoutLoader}
		>
			<Route
				index
				element={<Home />}
				loader={homeLoader}
			/>
			<Route
				path="host"
				element={<HostLayout />}
				loader={hostLayoutLoader}
			>
				<Route
					path="videos"
					element={<Videos />}
					loader={videosLoader}
				/>
				<Route
					path="videos/:id"
					element={<VideoDetails />}
					loader={videoDetailsLoader}
				/>
				<Route
					path="like"
					element={<h1>Liked</h1>}
				/>
				<Route
					path="playlists"
					element={<h1>playlist</h1>}
				/>
				<Route
					path="watchlater"
					element={<h1>watch later</h1>}
				/>
				<Route
					path="history"
					element={<h1>History</h1>}
				/>
			</Route>
			<Route
				path="/login"
				element={<Login />}
				loader={loginLoader}
				action={loginAction}
			/>
			<Route
				path="/signup"
				element={<Signup />}
				loader={signupLoader}
				action={signupAction}
			/>
			<Route
				path="*"
				element={<h3>404 - PAGE NOT FOUND!</h3>}
			/>
		</Route>,
	),
);

const App = () => <RouterProvider router={router} />;

export default App;
