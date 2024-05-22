import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

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
      <main className="overflow-hidden w-full gap-4 px-4 py-4 text-center md:gap-8 md:px-6 md:py-12 lg:grid-rows-[minmax(1px,auto) 1fr 1fr 1fr] lg:gap-12">
        <div className="mb-6 flex items-center justify-center  border border-gray-200 border-gray-200 bg-gray-50 shadow-sm w-full aspect-video overflow-hidden md:rounded-xl md:aspect-video dark:border-gray-800 dark:bg-gray-950 dark:shadow-sm">
          {/* <span className="w-full h-full object-cover rounded-md bg-muted" /> */}
          <video
            className="h-screen w-full bg-cover"
            style={{
              objectFit: 'cover',
            }}
            controls
            poster={IMAGES.backgroundImage}
          >
            <source src="/garbageside.demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
