import HomeChips from "./HomeChips";
import VideosGrid from "./VideosGrid";

export default function HomeVideos() {
    return (
        <div className="w-full flex flex-col flex-1 overflow-hidden">
            <HomeChips />
            <VideosGrid />
        </div>
    );
}
