import Image from "next/image";
import { Header } from "./_components/UI/ui_components"
import { Footer } from "./_components/UI/ui_components"
import Link from "next/link";
export default function Home() {
  return (
    <div className = "bg-black h-screen">
    <Header/>
      <div className="flex flex-col bg-black items-center mb-5 ">
        
        <div className="flex flex-col items-center h-full ">
          <div>
            <Link href = "/roaches"><Image src="/shot.jpg" alt="test image" width={1000} height={500} className="transition duration-450 hover:scale-110"/></Link>
          </div>
        </div>



        <div className="w-450 flex flex-col items-center mt-10 bg-black text-[#EAEAEA] border-t-1  border-b-1">
          <div className=" flex flex-col items-end border-[#2e2e2e]">
            <div className=" text-right  w-1/3 mr-70 text-2xl  mb-20 mt-20">
              <h1 className=" border-b-1">Our Story</h1>
            
              <p className="mt-2 w-170 text-justify tracking-tight">
                  Zollex started as a passion project between a group of friends just trying to make each other laugh by turning their everyday experiences 
                  into a sitcom. What began as a passion project quickly grew into something bigger: a production company focused on telling meaningful, character-driven stories.
                  As we've evolved, so has our network. Today, Zollex brings together a collective of talented industry professionals who know how to move a story from the page to
                  the screen with efficiency and heart. We're driven by collaboration, authenticity, and a love for storytelling that feels real. 
              </p>
            </div>


            <div className=" w-full flex flex-col items-startpt-10 pb-10">
              <div className=" text-left  w-1/3 mr-100 text-2xl">
                <h1 className="border-b-1">The Team</h1>
                <p className="mt-2 w-170 text-justify tracking-tight">Our team has been working alongside eachother for 7 years</p>
              </div>
            </div>

            <div className="w-full pb-10">
              <div className="grid grid-cols-3 w-2/3 gap-4">
                <Image src="/goblin_dict.PNG" alt="an image of a goblin dictator" width={400} height={200} className="transition duration-300 hover:scale-110"/>
                
                <Image src="/goblin_dict.PNG" alt="an image of a goblin dictator" width={400} height={200} className="transition duration-300 hover:scale-110"/>
                <Image src="/goblin_dict.PNG" alt="an image of a goblin dictator" width={400} height={200} className="transition duration-300 hover:scale-110"/>
              </div>
            </div>
          </div>

          
          
          
          
        </div>
        
      </div>

      
    </div>
  );
}
