import { Header } from "../_components/UI/ui_components"
import Image from "next/image"
export default function Roaches(){
    return(
        <>
        <Header/>
        {/* Image and title */}
        <div className="h-full flex flex-col  bg-linear-to-b from-[#77ff77]/10 to-black mb-2">
            
            <div className="flex flex-col items-center w-full mt-10">
                <div className="flex w-1/4 justify-center border-b-1 border-white">
                    <h1 className="text-5xl text-white italic">ROACHES</h1>
                </div>
            </div>
            <div className="flex flex-col items-center mt-10">
                <Image src="/shot.jpg" alt="a shot from Roaches" width={1200} height={500}/>
            </div>

            
        </div>

        {/* The synopsis section */}
        <div className="flex flex-col items-center bg-white h-full pb-10 mb-5">
                <div className="flex justify-center  mt-10 border-b-1 w-1/4 italic">
                    <h1 className=" text-3xl ">SYNOPSIS</h1>
                    
                </div>
                <div className="flex justify-center text-3xl mt-5 w-4/6 mb-15 ">
                    <p className="text-justify">
                        Roaches is a sitcom which portrays the daily lives of two weed dealers and their naive, unlucky in love
                        roommate as they try to navigate a society that doesn&apos;t quite understand them. It navigates themes of
                        consequence, love and societal attitudes using a blend of familiar sitcom frameworks and realistic perspectives,
                        leading to a fresh take on what it means for drugs to exist within a society.
                    </p>
                </div>
        

        {/* Section for cast and crew */}
            
        </div>

        </>
    )
}