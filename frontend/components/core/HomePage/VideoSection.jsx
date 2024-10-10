import React from 'react'
// Image and Video Import
import Banner from "../../../assets/Images/banner.mp4"
const VideoSection = () => {
    return (
        <div>
           {/* Video */}
            <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200
             lg:w-[1035px] lg:h-[515px] lg:top-[458px] lg:left-[203px]">
            <video
                className="shadow-[20px_20px_rgba(255,255,255)]"
                muted
                loop
                autoPlay
            >
                <source src={Banner} type="video/mp4" />
            </video>
            </div>
        </div>
    )
}

export default VideoSection