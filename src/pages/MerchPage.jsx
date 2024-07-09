import { useSelector, useDispatch } from 'react-redux'

import { toogleDrawer } from '../redux/drawerSlice'
import IMAGES from '../assets/images'
import Drawer from '../components/Drawer'
import { Link } from 'react-router-dom'

const MerchPage = () => {
  const isDrawerOpen = useSelector((state) => state.isDrawerOpen.value)
  const dispatch = useDispatch()

  return (
    <>
      {/* <Drawer isOpen={isDrawerOpen} setIsOpen={() => dispatch(toogleDrawer())}></Drawer>
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
        <Link to="/">
          <div className="absolute p-4 space-y-2 md:grid-cols-3 md:gap-4 md:place-items-start text-white">
            <h1 className="font-[1000] text-4xl lg:text-4xl xl:text-5xl/none">TEARS KITCHEN</h1>
          </div>
        </Link>
      </div>
      <div className="bg-black text-white min-h-screen">
        <div className="relative">
          <img
            alt="TEARS KITCHEN BACKGROUND"
            className="w-full h-[300px] object-cover"
            height="300"
            src={IMAGES.backgroundImage}
            style={{
              aspectRatio: '646/300',
              objectFit: 'cover',
            }}
            width="646"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-4">
            <div className="flex justify-between items-center"></div>
          </div>
        </div>
        <div className="p-4">
          <div>
            <h1 className="text-2xl font-bold pb-4">MERCH</h1>
            <p className="text-base">ITEM 1</p>
          </div>
        </div>
      </div> */}
      <div className="text-xl absolute inset-0 flex flex-col justify-between p-8">
        <h2 className="text-blue-600 underline ">Merch</h2>
        <ul>
          <li>*New*</li>
          <li className="text-blue-600 underline underline-offset-1">TEARS KITCHEN</li>
          <li className="text-blue-600 underline underline-offset-1">TEARS KITCHEN</li>
          <li className="text-blue-600 underline underline-offset-1">TEARS KITCHEN</li>
          <li className="text-blue-600 underline underline-offset-1">TEARS KITCHEN</li>
        </ul>

        <ul>
          <li>TICKETS</li>
          <li className="text-blue-600 underline underline-offset-1">TICKETS 1 - XXJFG</li>
        </ul>

        <ul>
          <li>Contacts</li>
          <li className="text-blue-600 underline underline-offset-1">Youtube, IG, Facebook, Soundcloud</li>
        </ul>
      </div>
    </>
  )
}

export default MerchPage
