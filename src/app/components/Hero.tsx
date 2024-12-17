import { Poppins} from "next/font/google";
import React from "react";
import Image from "next/image";

const poppins = Poppins({weight:'300', subsets: ['latin'],    
});

const Hero = () => {
    return (
        <main className="flex items-center w-screen h-[900px] bg-[#FBEBB5]">

            {/* Main Heading */}
        <section className="flex">
            <div>
            <div className="flex flex-col justify-center items-center h-[900px]">
                <h2 className={`${poppins.className} w-full h-48 text-[64px] leading-[96px]`}>
                    Rocket single seater</h2>
                <button className={`${poppins.className} w-[121px] h-[49px] text-[20px] leading-[36px] border-b-2 border-black`}>
                    Shop Now
                </button>
            </div>
            </div>
            <Image src={"/Rocket.png"} alt={"sofa"} width={803} height={1068}/>
        </section>

            </main>    
    )};

export default Hero
