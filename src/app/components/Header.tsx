import Link from 'next/link'
import React, { Fragment } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CiHeart, CiSearch } from 'react-icons/ci';
import { FaRegUser } from "react-icons/fa";


const Header = () => {
    return (
        <Fragment>

            {/*Header | Navbar | icons  */}

            <div className="flex items-center w-screen h-[100px] bg-[#FBEBB5]">

                {/* Navbar */}

                <ul className="flex justify-between w-[430px] h-6 ml-[505px]">
                    <Link href={"/"}>
                        <li className="{`${poppins5.className} text-[16px] leading-[24px]`}">Home</li></Link>
                    <Link href={"/"}>
                        <li className="{`${poppins5.className} text-[16px] leading-[24px]`}">Shop</li></Link>
                    <Link href={"/"}>
                        <li className="{`${poppins5.className} text-[16px] leading-[24px]`}">About</li></Link>
                    <Link href={"/"}>
                        <li className="{`${poppins5.className} text-[16px] leading-[24px]`}">Contact</li></Link>
                </ul>

                {/* icons */}

                <div className="flex justify-between w-[247px] h-7 ml-[158px]">
                    <FaRegUser className="w-[23.33px] h-[18.67px] stroke-[2px]" />
                    <CiSearch className="w-[22.17px] h-[22.17px] stroke-[1.5px]" />
                    <CiHeart className="w-[23.33px] h-[20.81px] stroke-[1.5px]" />
                    <AiOutlineShoppingCart className="w-[24.53px] h-[22.06px] stroke-[2px]" />
                </div>
            </div>

        </Fragment>
    )
}

export default Header
