import { Poppins } from 'next/font/google'
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
    
     <div className="flex flex-col justify-between w-screen h-[419px]">

              {/* Actual Footer */}

     <div className="flex items-center justify-between w-screen h-[312px]">

              {/* Paragraph With Add */}

     <p className={`${poppins4} text-base w-[285px] h-[72px] text-[#9F9F9F]`}>
            400 University Drive Suite 200 Coral Gables, <br />FL 33134 USA</p>

              {/* Final Footer */}

     <div className="flex justify-between w-screen h-[312px]">

              {/* Now For Link | Help | Newsletter */}

     

     </div>
        </div>          
     </div>
     </div>
    </Fragment>
  )
}

export default Footer