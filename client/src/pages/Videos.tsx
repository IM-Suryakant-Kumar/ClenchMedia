import { LoaderFunctionArgs, useLoaderData, useSearchParams } from "react-router-dom";
import { Container, CatCont, Wrapper } from "../styles/Videos.css";
import { getAllVideos } from "../utils/api";
import VideoCard from "../components/VideoCard";
import IVideo from "../types/video";
import { Link } from "react-router-dom";

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const data = await getAllVideos({ request } as LoaderFunctionArgs);
	return data.success ? data.videos : null;
};

const Videos = () => {
	const videos = useLoaderData() as IVideo[];
	const [searchParams] = useSearchParams();
	const cat = searchParams.get("cat");

	return (
		<Container>
			<CatCont>
				<Link
					to="/host/videos"
					className={cat === null ? "active" : ""}
				>
					All
				</Link>
				<Link
					to="/host/videos?cat=JavaScript"
					className={cat === "JavaScript" ? "active" : ""}
				>
					JavaScript
				</Link>
				<Link
					to="/host/videos?cat=TypeScript"
					className={cat === "TypeScript" ? "active" : ""}
				>
					TypeScript
				</Link>
				<Link
					to="/host/videos?cat=React"
					className={cat === "React" ? "active" : ""}
				>
					React
				</Link>
			</CatCont>
			<Wrapper>
				{videos?.map((video, idx) => (
					<VideoCard
						key={idx}
						video={video}
					/>
				))}
			</Wrapper>
		</Container>
	);
};

export default Videos;
