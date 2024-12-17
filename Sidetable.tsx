import React from 'react'
import { Poppins} from "next/font/google";
import Image from "next/image";

const poppins = Poppins({weight:'300', subsets: ['latin'], 
});

const Sidetable = () => {
  return (
    <section className="flex justify-center items-center bg-[#FAF4F4] w-screen h-[672px]">

        <div className="flex flex-col justify-between items-center">
            <Image src={"/sideTable1.png"} alt={"Side Table"} width={605} height={200} className="h-[500px]"/>
            <h2 className={`${poppins.className} w-[182px] h-[40px]`}>Side Table</h2>
            <button className={`${poppins.className} w-[125px] h-[36px] text-[24px] leading-[36px] border-b-2 border-black`}>
               View More
            </button>
        </div>

        <div className="flex flex-col justify-between items-center">
            <Image src={"/sideTable2.png"} alt={"Side Table"} width={605} height={562}/>
            <h2 className={`${poppins.className} w-[182px] h-[40px]`}>Side Table</h2>
            <button className={`${poppins.className} w-[125px] h-[36px] text-[24px] leading-[36px] border-b-2 border-black`}>
            View More
            </button>
        </div>

    </section>
  )
}

export default Sidetable