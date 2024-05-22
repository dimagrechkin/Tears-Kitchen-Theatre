import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GiFoxHead } from 'react-icons/gi'
import { FaXTwitter } from 'react-icons/fa6'
import { TbAlignBoxRightBottom } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'

import { Modal } from './Modal'
import { ReactComponent as SkubaIcon } from '../assets/icons/logoskuba.svg'
import { ReactComponent as FetLifeIcon } from '../assets/icons/logofetlife.svg'
// import { ReactComponent as SkubaIcon } from '../assets/icons/logoskuba.svg'

import { setCode } from '../redux/codeSlice'
import { toogleDrawer } from '../redux/drawerSlice'

export default function Drawer({ children, isOpen, setIsOpen }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isOpenPromo, setIsOpenPromo] = useState(false)

  const [show, setShow] = useState(false)
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const [muted, setMuted] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (value === '123') {
      dispatch(setCode(value))
      dispatch(() => dispatch(toogleDrawer()))
      navigate('/merch')
    } else {
      setValue('')
      setError(true)
    }
  }

  return (
    <main
      className={
        ' fixed overflow-hidden z-50  bg-opacity-25 inset-0 transform ease-in-out ' +
        (isOpen
          ? ' transition-opacity opacity-100 duration-500 translate-x-0  '
          : ' transition-all delay-500 opacity-0 translate-x-full  ')
      }
    >
      <section
        className={
          ' w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  ' +
          (isOpen ? ' translate-x-0 ' : ' translate-x-full ')
        }
      >
        <article className="relative w-screen max-w-lg flex flex-col  h-full w-full">
          {show && (
            <Modal showCloseIcon show={show} text={'PRIVAT ROUTE'} isClicked={muted} close={() => setShow(!show)}>
              <div className="text-base">
                <div className="relative w-full h-10 ">
                  <form autoComplete="off" onSubmit={handleSubmit}>
                    <input
                      autoComplete="nope"
                      className="peer w-full h-full text-2xl bg-transparent text-black outline outline-0 focus:outline-0 disabled:bg-black disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-black placeholder-shown:border-black border  border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 border-black focus:border-black"
                      value={value}
                      placeholder=" "
                      onChange={(e) => {
                        setError(false)
                        setValue(e.target.value)
                      }}
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-black leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-black transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-0 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent  before:border-t peer-focus:before:border-t-1 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-0 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent  after:border-t  after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75]  peer-focus:text-white-500  peer-focus:before:!border-black after:border-black peer-focus:after:!border-black">
                      WRITE SECRET CODE
                    </label>
                  </form>

                  {error && <p className="text-xs italic">CHOOSE ANOTHER CODE</p>}
                </div>
              </div>

              <div
                onClick={() => {
                  if (value === '123') {
                    dispatch(setCode(value))
                    dispatch(() => dispatch(toogleDrawer()))
                    navigate('/merch')
                  } else {
                    setValue('')
                    setError(true)
                  }
                }}
                className="group flex ms-auto items-center justify-center w-10 h-10 ml-6 hover:text-white hover:bg-black border-black border dark:border-dark-3 box"
              >
                <div className="text-sm ml-3 mr-3">OK</div>
              </div>
            </Modal>
          )}
          <header className="p-4 font-bold text-lg bg-black text-right text-white" onClick={() => setIsOpen()}>
            <svg
              className="inline h-8 w-8 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </header>
          <div className="bg-black text-white h-screen w-full">
            <div className="p-8">
              <div className="space-y-5">
                <Link to="/about" onClick={() => setIsOpen()}>
                  <div className="w-full flex justify-between items-center text-2xl">
                    <span>ABOUT</span>
                  </div>
                </Link>
                <a onClick={() => setShow(!show)} className="w-full flex justify-between items-center text-2xl">
                  <span>MERCH</span>
                </a>
                <div className="w-full flex justify-between items-center text-2xl">
                  <div className="bottom-10 left-40 right-20  w-full max-w-sm mx-auto grid gap-2 ">
                    <div className="flex gap-3">
                      <span
                        className={isOpenPromo ? 'text-gray-400' : ''}
                        onClick={() => setIsOpenPromo(() => !isOpenPromo)}
                      >
                        PROMO
                      </span>
                      {isOpenPromo && (
                        <span className="text-gray-300 text-center">
                          THE CULT
                          <div className="gap-3 text-gray-200">
                            <Link to="/cult1" onClick={() => setIsOpen()}>
                              I
                            </Link>
                          </div>
                          <div className="gap-3">
                            <Link to="/cult2" onClick={() => setIsOpen()}>
                              II
                            </Link>
                          </div>
                          <div className="gap-3 text-gray-100">
                            <Link to="/cult3" onClick={() => setIsOpen()}>
                              III
                            </Link>
                          </div>
                        </span>
                      )}
                    </div>
                  </div>
                  {/* <span>PROMO</span> */}
                </div>

                <a className="flex absolute bottom-52 left-10 right-10 text-white ">
                  <div className="relative w-full h-10 ">
                    <input
                      className="peer w-full h-full text-2xl bg-transparent text-white-gray-700 outline outline-0 focus:outline-0 disabled:bg-white-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-slate-300 placeholder-shown:border-t-white-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 border-gray-300 focus:border-white"
                      placeholder=" "
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white-gray-400 peer-focus:text-white-500 before:border-white-gray-200 peer-focus:before:!border-white-500 after:border-white-gray-200 peer-focus:after:!border-white-500">
                      YOUR EMAIL TO SUBSCRIBE
                    </label>
                  </div>
                </a>
                <div className="absolute bottom-10 left-44 right-40 text-white text-xl w-full max-w-sm mx-auto grid gap-2 pt-4 z-10">
                  <div className="flex gap-2">
                    <SkubaIcon className="svgLinksIcon" />
                    <FetLifeIcon className="svgLinksIcon" />
                    {/* <SkubaIcon className="svgLinksIcon" /> */}
                    {/* <WhateverIcon id="MyRect" />
                    <WhateverIcon id="MyRect" /> */}

                    {/* <FaXTwitter />

                    <GiFoxHead />

                    <TbAlignBoxRightBottom /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false)
        }}
      ></section>
    </main>
  )
}
