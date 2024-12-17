import { Poppins } from 'next/font/google'
import Link from 'next/link'
import React, { Fragment } from 'react'

const poppins4 = Poppins({
  subsets: ["latin"], weight: "400"
})
const poppins5 = Poppins({
  subsets: ["latin"], weight: "500"
})

const Footer = () => {
  return (
    <Fragment>
      {/* Here Is The Footer */}

      <div className="flex justify-center items-center w-screen h-[555px] bg-[#FFFFFF]">

        {/* Inner div To Make It Center */}

        <div className="flex flex-col justify-between w-[1131px] h-[419px]">

          {/* Actual Footer */}

          <div className="flex items-end justify-between w-[1151px] h-[312px]">

            {/* Paragraph With Add */}

            <p className={`${poppins4} text-base w-[1131px] h-[72px] py-4 text-[#9F9F9F] mr-40`}>
              400 University Drive Suite 200 Coral Gables, <br />FL 33134 USA</p>

            {/* Final Footer */}

            <div className="flex justify-between w-screen h-[312px]">

              {/* Now For Link | Help | Newsletter */}

              <div className="flex justify-between w-[340px] h-[312px]">
                <div className="flex flex-col justify-between w-[68px] h-full">
                  <h5 className={`${poppins5.className} text-base text-[#9F9F9F]`}>Links</h5>
                  <ul className="flex flex-col justify-between w-full h-[233px]">

                    <Link href={"/"}>
                      <li className={`${poppins5.className} text-[16px] leading-[24px]`}>Home</li>
                    </Link>

                    <Link href={"/shop"}>
                      <li className={`${poppins5.className} text-[16px] leading-[24px]`}>Shop</li>
                    </Link>

                    <Link href={"/about"}>
                      <li className={`${poppins5.className} text-[16px] leading-[24px]`}>About</li>
                    </Link>

                    <Link href={"/contact"}>
                      <li className={`${poppins5.className} text-[16px] leading-[24px]`}>Contact</li>
                    </Link>
                  </ul>
                </div>

                <div className="flex flex-col justify-between w-[140px] h-[242px]">
                  <h5 className={`${poppins5.className} text-base text-[#9F9F9F]`}>Help</h5>
                  <ul className="flex flex-col justify-between w-full h-[163px]">
                    <li className={`${poppins5.className} text-base`}>Payment Options</li>
                    <li className={`${poppins5.className} text-base`}>Returns</li>
                    <li className={`${poppins5.className} text-base`}>Privacy Policies</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col justify-between w-[286px] h-[101px] ml-20">
                <h5 className={`${poppins5.className} text-base text-[#9F9F9F]`} >Newsletter</h5>
                <div className="flex justify-between w-full h-6">
                  <input type="email" placeholder="Enter Your Email Address" className={`${poppins4.className} w-[200px] border-b border-black text-sm`} />
                  <button className={`${poppins5.className} text-sm border-b border-black`}>Subscribe</button>
                </div>
              </div>
            </div>

            <div className="flex items-end  w-[1131px] h-[24px]">
              <p className={`${poppins4.className} text-base `}>2022 Meubel House. All rights reverved</p>

            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer 
