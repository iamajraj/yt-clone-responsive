export default function VideosGrid() {
    return (
        <div className="flex-1 bg-[#181818] px-[15px] sm:px-[40px] pt-[20px] pb-[40px] overflow-y-scroll cv-bar">
            {/* Video */}
            <div className="flex flex-wrap gap-[20px]">
                {Array(20)
                    .fill(0)
                    .map((_, i) => (
                        <a
                            className="flex-1 sm:max-w-[320px] min-w-[200px] sm:min-w-[300px] h-max cursor-pointer block"
                            key={i}
                            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        >
                            <div className="w-full h-[170px] bg-[#ffffff28]"></div>
                            <div className="flex mt-[10px] gap-[10px] pr-[10px]">
                                <img
                                    src="https://i.imgflip.com/5v56sr.jpg?a466344"
                                    alt="logo"
                                    className="w-[35px] h-[35px] rounded-full object-cover"
                                />
                                <div className="">
                                    <h1 className="text-white text-[15px] font-semibold leading-[20px]">
                                        It is what it is
                                    </h1>
                                    <div className="mt-[5px]">
                                        <p className="text-[#AAAAAA] text-[13px]">
                                            Not RR
                                        </p>
                                        <p className="text-[#AAAAAA] text-[13px]">
                                            99K view ∙ 59 minutes ago
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
            </div>
        </div>
    );
}
