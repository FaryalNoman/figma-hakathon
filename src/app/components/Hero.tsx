import { Poppins} from "next/font/google";
import React from "react";
import Image from "next/image";

const poppins = Poppins({weight:'300', subsets: ['latin'],    
});

const Hero = () => {
    return (
        <main className="flex items-center w-screen h-[900px] bg-[#FBEBB5]">

            {/* Main Heading */}

            <div className="flex flex-col justify-between items-start ml-[202px] w-[440px] h-[276px]">
                <h2 className={`${poppins.className} w-full h-48 text-[64px] leading-[96px]`}>
                    Rocket single seater</h2>
                <button className={`${poppins.className} w-[121px] h-[49px] text-[20px] leading-[36px] border-b-2 border-black`}>
                    Shop Now
                </button>
            </div>
            <Image src={"/Rocket.png"} alt={"sofa"} width={803} height={1068}/>

        </main>
    )
}

export default Hero