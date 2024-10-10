import React from "react";
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import HighlightText from "../components/core/HomePage/HighlightText"
import elipseImage1 from "../assets/Images/Ellipse 1.png";
import elipseImage2 from "../assets/Images/Ellipse 2.png";
import elipseImage3 from "../assets/Images/Ellipse 3.png";
const CodeSection1 = () => {
    return(
        <div>
            <CodeBlocks 
                position={"lg:flex-row-reverse"}
                // imgPos = {"-top-[40%] right-[66%]"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Start 
                        <HighlightText text={`coding`}/>
                        <br />
                        <HighlightText text={` in seconds`}/>
                    </div>
                }
                subheading = {
                    "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                }
                ctabtn1={
                    {
                        btnText: "Continue Lesson",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={[`<!DOCTYPE html>`,`<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\nbody>`,`h1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n/nav>`]}
                codeColor={"text-yellow-25"}
                // backgroudGradient={elipseImage2}
                backgroudGradient={<div className="codeblock1 absolute"></div>}
            />
        </div>
    )
}
export default CodeSection1;