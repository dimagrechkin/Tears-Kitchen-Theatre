import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { toogleDrawer } from '../redux/drawerSlice'
import Drawer from '../components/Drawer'
import IMAGES from '../assets/images'

const VideoPage = ({ id }) => {
  const isDrawerOpen = useSelector((state) => state.isDrawerOpen.value)
  const dispatch = useDispatch()

  return (
    <>
      <Drawer isOpen={isDrawerOpen} setIsOpen={() => dispatch(toogleDrawer())}></Drawer>
      <div className="sticky top-0 z-10 bg-white">
        <button
          onClick={() => dispatch(toogleDrawer())}
          className="absolute right-0 navbar-burger flex items-center p-5 transparent"
        >
          <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
        <Link to="/merch">
          <div className="p-4 space-y-2 md:grid-cols-3 md:gap-4 md:place-items-start">
            <h1 className="font-[1000] text-center text-4xl lg:text-4xl xl:text-5xl/none">
              TEARS KITCHEN INDEPENDENT THEATER
            </h1>
          </div>
        </Link>
      </div>
      <main className="overflow-hidden w-full gap-4 px-4 py-4 text-center lg:grid-rows-[minmax(1px,auto) 1fr 1fr 1fr] lg:gap-12">
        <div id="container" className="w-4/5 h-4/5 mb-6 mx-auto overflow-hidden relative group">
          {/* <span className="w-full h-full object-cover rounded-md bg-muted" /> */}
          <figure>
            <ReactPlayer url="/garbageside.demo.mp4" width="100%" height="100%" />
          </figure>
          <div
            id="controls"
            className="opacity-0 p-5 absolute bottom-0 left-0 w-full transition-opacity duration-300 ease-linear group-hover:opacity-100"
          >
            <div id="progress-bar" className="h-1 w-full bg-white cursor-pointer mb-4">
              <div
                id="progress-indicator"
                className="h-full w-9 bg-indigo-800 transition-all duration-500 ease-in-out"
              ></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-between">
                <button id="rewind" className="transition-all duration-100 ease-linear hover:scale-125">
                  <i className="material-icons text-white text-3xl w-12">replay_10 </i>
                </button>

                <button id="play-pause" className="transition-all duration-100 ease-linear hover:scale-125">
                  <i className="material-icons text-white text-5xl inline-block w-12">play_arrow</i>
                </button>

                <button id="fast-forward" className="transition-all duration-100 ease-linear hover:scale-125">
                  <i className="material-icons text-white text-3xl w-12">forward_10 </i>
                </button>
              </div>

              <div>
                <button id="volume" className="transition-all duration-100 ease-linear hover:scale-125">
                  <i className="material-icons text-white text-3xl">volume_up</i>
                </button>
              </div>
            </div>
          </div>
          {/* <video
            className="h-screen w-full bg-cover"
            style={{
              objectFit: 'cover',
            }}
            controls
            poster={IMAGES.backgroundImage}
          >
            <source src="/garbageside.demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </div>
        <div className="space-y-2 md:grid-cols-2 md:gap-4">
          <div className="space-y-2">
            <div className="bg-white ">
              <div className="flex text-center text-black pb-4">
                <div className="text-4xl font-[1000]">EPISODE {id}</div>
                <p className="text-base">.NAIROBI DUMPSIDE/ KENYA</p>
              </div>
              <p className="text-xl text-left tracking-wide">
                REPRESENTATION OF THE SECOND EPISODE IN SERIES OF PROMOTIONAL MOURNING FILMS DEDICATED TO THE FISRDT
                PERFOMANCE OF PSYCHO KITCHEN SPECTACL
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default VideoPage
