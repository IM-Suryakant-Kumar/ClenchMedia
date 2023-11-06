import { useLoaderData } from "react-router-dom";
import { Container, CatCont, FilterTitle } from "../styles/Videos.css";
import { getAllVideos } from "../utils/api";
import VideoCard from "../components/VideoCard";
import IVideo from "../types/video";

export const loader = async () => {
	const data = await getAllVideos();
	return data.success ? data.videos : null;
};

const Videos = () => {
	const videos: IVideo[] = useLoaderData();

	return (
		<Container>
			{videos?.map((video, idx) => (
				<VideoCard
					key={idx}
					video={video}
				/>
			))}
		</Container>
	);
};

export default Videos;
