export default function VideosGrid() {
    return (
        <div className="flex-1 bg-[#181818] px-[15px] sm:px-[40px] pt-[20px] pb-[40px] overflow-y-scroll cv-bar">
            {/* Video */}
            <div className="flex flex-wrap gap-[20px]">
                {Array(20)
                    .fill(0)
                    .map((_, i) => (
                        <div
                            className="flex-1 sm:max-w-[320px] min-w-[200px] sm:min-w-[300px] h-max cursor-pointer"
                            key={i}
                        >
                            <div className="w-full h-[170px] bg-[#ffffff28]"></div>
                            <div className="flex mt-[10px] gap-[10px] pr-[10px]">
                                <img
                                    src="https://yt3.ggpht.com/5aHqci2f7aT3weYQT0-ckcJYTYPuqcTROJ9NUommqG-r4UEuN57njyPhSsyjCjUwG98nE54T=s176-c-k-c0x00ffffff-no-rj-mo"
                                    alt="logo"
                                    className="w-[35px] h-[35px] rounded-full"
                                />
                                <div className="">
                                    <h1 className="text-white text-[15px] font-semibold leading-[20px]">
                                        Unbelievable Events Happened During
                                        Qatar FIFA World Cup !!
                                    </h1>
                                    <div className="mt-[5px]">
                                        <p className="text-[#AAAAAA] text-[13px]">
                                            FIFA
                                        </p>
                                        <p className="text-[#AAAAAA] text-[13px]">
                                            81K view ∙ 1 hours ago
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
