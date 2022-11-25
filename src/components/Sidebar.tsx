import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import {
    BsCameraReels,
    BsCaretRightSquare,
    BsClockHistory,
    BsCollectionPlay,
    BsClock,
    BsHandThumbsUp,
} from "react-icons/bs";

export default function Sidebar() {
    const [selectedTab, setSelectedTab] = useState("home");
    return (
        <div className="py-[10px] bg-[#202020] sm:min-w-[220px] max-w-[220px] flex flex-col overflow-y-scroll cv-bar">
            <div
                className={`text-white flex items-center gap-[15px]  px-[25px]  cursor-pointer py-[20px] sm:py-[10px] ${
                    selectedTab === "home"
                        ? "bg-[#383838]"
                        : "hover:bg-[#383838]"
                }`}
            >
                <AiFillHome className="text-[18px]" />
                <h2 className="text-[15px] hidden sm:block">Home</h2>
            </div>
            <div className="text-white flex items-center gap-[15px]  px-[25px] hover:bg-[#383838] cursor-pointer py-[20px] sm:py-[10px]">
                <BsCameraReels className="text-[18px]" />
                <h2 className="text-[15px] hidden sm:block">Shorts</h2>
            </div>
            <div className="text-white flex items-center gap-[15px]  px-[25px] hover:bg-[#383838] cursor-pointer py-[20px] sm:py-[10px]">
                <BsCollectionPlay className="text-[18px]" />
                <h2 className="text-[15px] hidden sm:block">Subscriptions</h2>
            </div>
            <div className="w-full bg-[#373737] h-[1px] my-[10px]"></div>
            <div className="text-white flex items-center gap-[15px]  px-[25px] hover:bg-[#383838] cursor-pointer py-[20px] sm:py-[10px]">
                <BsCaretRightSquare className="text-[18px]" />
                <h2 className="text-[15px] hidden sm:block">Library</h2>
            </div>
            <div className="text-white flex items-center gap-[15px]  px-[25px] hover:bg-[#383838] cursor-pointer py-[20px] sm:py-[10px]">
                <BsClockHistory className="text-[18px]" />
                <h2 className="text-[15px] hidden sm:block">History</h2>
            </div>
            <div className="text-white flex items-center gap-[15px]  px-[25px] hover:bg-[#383838] cursor-pointer py-[20px] sm:py-[10px]">
                <BsCaretRightSquare className="text-[18px]" />
                <h2 className="text-[15px] hidden sm:block">Your videos</h2>
            </div>
            <div className="text-white flex items-center gap-[15px]  px-[25px] hover:bg-[#383838] cursor-pointer py-[20px] sm:py-[10px]">
                <BsClock className="text-[18px]" />
                <h2 className="text-[15px] hidden sm:block">Watch later</h2>
            </div>
            <div className="text-white flex items-center gap-[15px]  px-[25px] hover:bg-[#383838] cursor-pointer py-[20px] sm:py-[10px]">
                <BsHandThumbsUp className="text-[18px]" />
                <h2 className="text-[15px] hidden sm:block">Liked videos</h2>
            </div>
        </div>
    );
}
