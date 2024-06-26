import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { toogleDrawer } from '../redux/drawerSlice'
import IMAGES from '../assets/images'
import Drawer from '../components/Drawer'

const AboutPage = () => {
  const [showKey, setShowKey] = useState(false)
  const isDrawerOpen = useSelector((state) => state.isDrawerOpen.value)
  const dispatch = useDispatch()

  return (
    <>
      <Drawer isOpen={isDrawerOpen} setIsOpen={() => dispatch(toogleDrawer())}></Drawer>
      <div className="sticky top-0 z-50 ">
        {!isDrawerOpen && (
          <button
            onClick={() => dispatch(toogleDrawer())}
            className="absolute right-0 navbar-burger flex items-center p-5 text-white z-10"
          >
            <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        )}
      </div>
      <div className="bg-black text-white min-h-screen">
        <div className="relative h-full">
          <Link to="/">
            <div className="sticky top-12 ml-5 overflow-visible h-[0px] text-white">
              <h1 className="font-[1000] -translate-y-8 text-3xl lg:text-4xl xl:text-5xl/none">TEARS KITCHEN</h1>
            </div>
          </Link>
          <img
            alt="TEARS KITCHEN BACKGROUND"
            className="flex w-full h-[300px] object-cover"
            height="300"
            src={IMAGES.backgroundImage}
            style={{
              aspectRatio: '646/300',
              objectFit: 'cover',
            }}
            width="646"
          />
          {/* <div className="absolute inset-0 flex flex-col justify-between p-4">
            <div className="flex justify-between items-center"></div>
          </div> */}
        </div>
        <div className="p-4 ">
          <div>
            <h1 className="text-2xl font-bold pb-4">OVERVIEW</h1>
            <p className="text-base ">
              THE DANCE THAT ALLOWS YOU TO THROW OFF THE TANGIBLE SHACKLES AND ACTIVATE TRUNSCLUCENT CONDITIONS. THIS
              HAS BEEN MENTIONED IN EVERY GREAT BOOK AND RITUAL CULT. ORIGINAL FOLLOWES OF THE NEO-PIRATISM MOVEMENT HAD
              A SPECIFIC SET OF MUSCLE CONTRACTIONS INSPIRED BY MAD STORYTELLERS AND WIZARDS OF THE CITY STREETS WERE
              STUCK AT THE EDGE OF WORLD THE DANCE THAT ALLOWS YOU TO THROW OFF THE TANGIBLE SHACKLES AND ACTIVATE
              TRUNSCLUCENT CONDITIONS. THIS HAS BEEN MENTIONED IN EVERY GREAT BOOK AND RITUAL CULT. ORIGINAL FOLLOWES OF
              THE NEO-PIRATISM MOVEMENT HAD A SPECIFIC SET OF MUSCLE CONTRACTIONS INSPIRED BY MAD STORYTELLERS AND
              WIZARDS OF THE CITY STREETS WERE STUCK AT THE EDGE OF WORLD THE DANCE THAT ALLOWS YOU TO THROW OFF THE
              TANGIBLE SHACKLES AND ACTIVATE TRUNSCLUCENT CONDITIONS. THIS HAS BEEN MENTIONED IN EVERY GREAT BOOK AND
              RITUAL CULT. ORIGINAL FOLLOWES OF THE NEO-PIRATISM MOVEMENT HAD A SPECIFIC SET OF MUSCLE CONTRACTIONS
              INSPIRED BY MAD STORYTELLERS AND WIZARDS OF THE CITY STREETS WERE STUCK AT THE EDGE OF WORLD THE DANCE
              THAT ALLOWS YOU TO THROW OFF THE TANGIBLE SHACKLES AND ACTIVATE TRUNSCLUCENT CONDITIONS. THIS HAS BEEN
              MENTIONED IN EVERY GREAT BOOK AND RITUAL CULT. ORIGINAL FOLLOWES OF THE NEO-PIRATISM MOVEMENT HAD A
              SPECIFIC SET OF MUSCLE CONTRACTIONS INSPIRED BY MAD STORYTELLERS AND WIZARDS OF THE CITY STREETS WERE
              STUCK AT THE EDGE OF WORLD
              {showKey && <div className="absolute text-base animate-bounce">CODE IS 123</div>}
            </p>
          </div>
        </div>
      </div>
      <footer className="flex bg-black flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
        <p className="text-xs text-white dark:text-gray-400">© 2024 TEARS KITCHEN. ALL RIGHTS RESERVED.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs text-white hover:underline underline-offset-4"
            href="/"
            onClick={() => setShowKey(!showKey)}
          >
            TERMS OF SERVICE
          </Link>
          <Link className="text-xs text-white hover:underline underline-offset-4" href="#">
            PRIVACY
          </Link>
        </nav>
      </footer>
    </>
  )
}

export default AboutPage
