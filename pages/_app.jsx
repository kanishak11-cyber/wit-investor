import '../styles/globals.css'
import {useState} from 'react'
import { AiOutlineClose } from "react-icons/ai"
import { HiMenuAlt4 } from "react-icons/hi"
import { FaDiscord, FaWhatsapp, FaTelegram, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa'
import Logo from '../assets/images/witlogo.png'
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gradient-bg-services text-white'>
      <header className="  revamp px-10">
        <nav className=" flex md:text-2xl text-xl justify-between   items-center p-4">
          <div className="md:flex-[0.5] flex-initial bg-transparent z-10 justify-between  items-center">
            {/* <Link href='/' alt=''> */}
              <div className="flex flex-row justify-center cursor-pointer items-center">
                <div className=" items-center">
                  <Image
                    src={Logo}
                    alt="home"
                  width={100}
                  height={100}
                    
                    className=" "
                  />
                </div>
                <h1 className='items-center text-2xl py-5 text-white'><span className='text-orange-400'>Women in Tech </span> Investor</h1>
              </div>
            {/* </Link> */}
          </div>
          <div className="text-white md:flex hidden  flex-row  items-center ">
            <div className="flex flex-row justify-evenly   items-center">
              <ul className='flex  '>
                {/* <Link
                  href="/"
                  className="text-lg block justify-evenly scroll-smooth"
                > */}
                  <li className="justify-items-center cursor-pointer hover:text-[#fdfd96] px-2">
                    Home
                  </li>
                {/* </Link>

                <Link href="/sponsor" className="text-lg justify-center"> */}
                  <li className="justify-items-center cursor-pointer hover:text-[#fdfd96] px-2">
                    Sponsor
                  </li>
                {/* </Link> */}
                {/* <Link href="/contact" className="text-lg justify-center"> */}
                  <li className="justify-items-center cursor-pointer hover:text-[#fdfd96] px-2">
                    Contact
                  </li>
                {/* </Link> */}
                {/* <Link href="/faq" className="text-lg justify-center"> */}
                  <li className="justify-items-center cursor-pointer hover:text-[#fdfd96] px-2">
                    FAQ
                  </li>
                {/* </Link>
                <Link href='/register'> */}
                  <button className='justify-items-center cursor-pointer text-red-400 hover:text-[#fdfd96] px-2'>
                    Register
                  </button>
                {/* </Link> */}
              </ul>

            </div>
          </div>
          <div className="flex relative">
            {toggleMenu ? (
              <AiOutlineClose
                fontSize={28}
                className="text-white md:hidden cursor-pointer"
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <HiMenuAlt4
                fontSize={28}
                className="text-white md:hidden cursor-pointer"
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <ul
                className="z-10 fixed top-0 -right-2 p-3 w-[50vw] h-screen shadow-xl md:hidden list-none
                flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in"
              >
                <li className="text-xl w-full my-2">
                  <AiOutlineClose onClick={() => setToggleMenu(false)} />
                </li>
                <div className='items-center'>
                  <ul className='flex flex-col text-xl'>
                    {/* <Link
                      href="/"
                      className="text-lg block justify-center scroll-smooth"
                    > */}
                      <li className="justify-items-center cursor-pointer py-3 hover:text-[#fdfd96] px-2">
                        Home
                      </li>
                    {/* </Link> */}
                    {/* <Link href="/Games" className=" text-lg justify-center">
              <li className="py-3 justify-items-center hover:text-[#fdfd96] px-2">
                Games
              </li>
            </Link>
            <Link href="/Gallery" className="text-lg justify-center">
              <li className="justify-items-center  py-3 hover:text-[#fdfd96] px-2">
                Gallery
              </li>
            </Link> */}
                    {/* <Link href="/sponsor" className="text-lg justify-center"> */}
                      <div className="justify-items-center cursor-pointer py-3 hover:text-[#fdfd96] px-2">
                        Sponser
                      </div>
                    {/* </Link> */}
                    {/* <Link href="/contact" className="text-lg justify-center"> */}
                      <div className="justify-items-center cursor-pointer py-3 hover:text-[#fdfd96] px-2">
                        Contact
                      </div>
                    {/* </Link> */}
                    {/* <Link href="/faq" className="text-lg justify-center"> */}
                      <div className="justify-items-center cursor-pointer py-3 hover:text-[#fdfd96] px-2">
                        FAQ
                      </div>
                    {/* </Link> */}
                    {/* <Link href='/register'> */}
                      <li className='justify-items-center text-red-400 py-3 hover:text-[#fdfd96] px-2'>
                        Register
                      </li>
                    {/* </Link> */}
                  </ul>
                </div>
              </ul>
            )}
          </div>
        </nav>
      </header>
      <div>
        <Component {...pageProps} />
      </div>

      <hr />
      <footer className='revamp gradient-bg-footer'>
        <div className=' md:text-3xl text-[20px]  py-3'>
          <div className='flex md:flex-row flex-col py-3 text-center justify-center overflow-hidden md:justify-between px-20 '>
            <div className=' grid grid-cols-7'>
              <div className=' pt-2'>
               
                  <Image src={Logo} width={35} height={35} alt='website' className='m-3 pt-2' />
                
              </div>
              <div className=''>

                {/* <a target='_blank' href='https://www.youtube.com/c/GamingGeeksYouTube' className=''> */}
                  <FaYoutube className='m-3' />
                {/* </a> */}
              </div>
              <div className=''>
                {/* <a target='_blank' href='http://instagram.com/ggeeks_insta'> */}
                  <FaInstagram className='m-3' />
                {/* </a> */}
              </div>
              <div className=''>
                {/* <a target='_blank' href='https://dsc.gg/ggeeks'> */}
                  <FaDiscord className='m-3' />
                {/* </a> */}
              </div>
              <div className=''>
                {/* <a target='_blank' href='https://www.linkedin.com/company/gaming-geeks'> */}
                  <FaLinkedin className='m-3' />
                {/* </a> */}
              </div>
              <div className=' '>
                {/* <a target='_blank' href='https://t.me/ggeeks'> */}
                  <FaTelegram className='m-3' />
                {/* </a> */}
              </div>
              <div className=' '>
                {/* <a target='_blank' alt='whatsapp' href='https://chat.whatsapp.com/CB1DwNyUm7C35wFi0IC5JE'> */}
                  <FaWhatsapp className='m-3' />
                {/* </a> */}
              </div>

            </div>

            <div className='text-center py-3'>
              <h1 className='md:text-xl text-[14px] '>© 2022 All rights reserved</h1>
            </div>
          </div>
        </div>
      </footer>
    </div>
    )
}

export default MyApp
