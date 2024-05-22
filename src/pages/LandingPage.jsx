import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { toogleDrawer } from '../redux/drawerSlice'
import Drawer from '../components/Drawer'
import { Modal } from '../components/Modal'
import { Video } from '../components/Video'

const LandingPage = () => {
  const isDrawerOpen = useSelector((state) => state.isDrawerOpen.value)
  const dispatch = useDispatch()

  const [show, setShow] = useState(false)
  const [muted, setMuted] = useState(true)
  const [animationOn, setAnimationOff] = useState(true)
  const [opacity, setOpacity] = useState(0.99)
  const [showModal, setShowModal] = useState(true)

  useEffect(() => {}, [muted])

  const delayAnimationSwitch = () =>
    setTimeout(() => {
      setOpacity(getComputedStyle(document.getElementById('title')).opacity)
      setAnimationOff(false)
    }, 4000)

  const interval = () => {
    const intervalId = setInterval(() => {
      setOpacity((a) => {
        if (a < 0) {
          clearInterval(intervalId)
        }

        return a - 0.01
      })
    }, 130)
  }

  return (
    <>
      <Modal
        show={showModal}
        text={'WEBSITE CREATED BY GROUP OF ENTHUSIAST DEVELOPERS.'}
        isClicked={muted}
        modalClick={setMuted}
        hidingText={setOpacity}
      >
        <div
          onClick={() => {
            setShowModal(!showModal)
            delayAnimationSwitch()
            setTimeout(() => {
              interval()
            }, 2000)

            setMuted(false)
          }}
          className="group flex ms-auto items-center justify-center w-3 h-3 mr-4 hover:bg-black border-black border dark:border-dark-3 box"
        >
          <div className="pr-20">OK</div>
        </div>
      </Modal>
      <div className="lg:hidden w-full">
        <Drawer isOpen={isDrawerOpen} setIsOpen={() => dispatch(toogleDrawer())}></Drawer>
        {!isDrawerOpen && (
          <>
            <button
              onClick={() => dispatch(toogleDrawer())}
              className={`absolute transition transform ${
                opacity < 0.15 && '-translate-y-[-13px] -translate-x-[13px] duration-[2000ms] scale-[135%]'
              } right-0 navbar-burger text-4xl flex items-center text-white p-5 z-10 transparent`}
            >
              <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
            <h1
              id="title"
              style={{
                opacity: opacity,
              }}
              className={`${
                animationOn && 'animate-pulse'
              } absolute font-[1000] p-5 flex items-center text-white text-center text-4xl lg:text-4xl xl:text-5xl/none `}
            >
              TEARS KITCHEN INDPENDENT THEATER
            </h1>
          </>
        )}
        {window.innerWidth < 500 && <Video muted={muted} />}
      </div>
      <div className="hidden relative  transform  lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
        {window.innerWidth > 500 && <Video muted={muted} />}

        {/* <img
          alt="Banner image"
          className="w-full h-auto"
          height="734"
          src="/mainbackground.png"
          style={{
            aspectRatio: '1280/810',
            objectFit: 'cover',
          }}
          width="1280"
        /> */}

        <div className=" subpixel-antialiased absolute inset-0 flex justify-evenly items-end pb-40 px-6">
          <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            {show && (
              <div className="bg-white/75 border border-black p-4 rounded-lg shadow-lg w-30">
                <ul className="space-y-2">
                  <Link to="/cult1">
                    <li className="group">
                      <label
                        htmlFor="video1"
                        className="flex text-black items-center cursor-pointer select-none text-dark"
                      >
                        <div className="relative">
                          <input type="checkbox" checked id="video2" className="sr-only" />
                          <div className="flex items-center justify-center w-3 h-3 mr-4 group-hover:bg-black  border-black border dark:border-dark-3 box"></div>
                        </div>
                        VIDEO 1
                      </label>
                    </li>
                  </Link>
                  <Link to="/cult2">
                    <li className="group">
                      <label
                        htmlFor="video2"
                        className="flex text-black items-center cursor-pointer select-none text-dark"
                      >
                        <div className="relative">
                          <input type="checkbox" id="video2" className="sr-only" />
                          <div className="flex items-center justify-center w-3 h-3 mr-4 group-hover:bg-black border-black border dark:border-dark-3 box"></div>
                        </div>
                        VIDEO 2
                      </label>
                    </li>
                  </Link>
                </ul>
              </div>
            )}
            <button className="text-4xl text-white">PROMO</button>
          </div>
          <Link to="/about">
            <button className="text-4xl text-white">ABOUT</button>
          </Link>
          <button className="text-4xl text-white">MERCH</button>
        </div>
      </div>
    </>
  )
}

export default LandingPage
