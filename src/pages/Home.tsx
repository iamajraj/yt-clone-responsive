import HomeVideos from "../components/HomeVideos";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Home() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            {/* Main */}
            <div className="w-full flex-1 flex h-full overflow-hidden">
                <Sidebar />
                {/* Videos */}
                <HomeVideos />
            </div>
        </div>
    );
}
