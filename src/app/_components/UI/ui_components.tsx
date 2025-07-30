import Link from "next/link"
import Image from "next/image"
export function Header(){
    return (
    <div className="relative bg-black text-white h-15 p-5">
        <Link href="/"><h1 className="text-2xl">Zollex</h1></Link>
        
    </div>
    )
}


export function Footer(){
    return(
        <>
            <div className="relative flex bg-black text-white bottom-0 w-full justify-center">
                <div className="flex flex-col">
                    <div className="pb-4 pl-4 text-center">
                        <div className = "">
                            <h1>Zollex LTD 2025</h1>
                        </div>
                        <div className="pt-4">
                            <p><a href="/contact">contact us</a></p>
                        </div>
                        <div className="pt-4">
                            <p>about us</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

type Banner = {
    url: string,
    name: string,
    description: string
}

export function PersonBanner({banner}:{banner: Banner}){
    return(
        <div className="grid grid-cols-3 bg-[#000000] rounded-full items-center hover:scale-105 duration-300 ">
            <div className="m-3">
                <Image src={banner.url} alt="a" width={250} height={100} className="w-20 h-20 rounded-full"/>
            </div>

            <div className="grid grid-rows-2 text-black col-span-2 text-white">
                <div>
                    <h1>{banner.name}</h1>
                </div>

                <div>
                    <h1>{banner.description}</h1>
                </div>
            </div>
        </div>
    )
}