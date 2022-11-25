export default function HomeChips() {
    return (
        <div className="flex items-center gap-[10px] border-t border-b border-[#373737] bg-[#202020] py-[10px] pl-[15px] sm:pl-[40px] pr-[20px] w-full overflow-x-scroll ch-bar">
            {[
                "All",
                "Mixes",
                "Music",
                "FIFA",
                "Religious recitation",
                "Reverberation",
                "Gaming",
                "Lo-fi",
                "Live",
                "Debates",
                "Bollywood Music",
                "Thoughts",
                "Computer Programming",
                "Recently uploaded",
                "Watched",
            ].map((chipText) => (
                <p className="text-white text-[14px] px-[20px] py-[5px] bg-[#ffffff28] rounded-[20px] whitespace-nowrap cursor-pointer">
                    {chipText}
                </p>
            ))}
        </div>
    );
}
