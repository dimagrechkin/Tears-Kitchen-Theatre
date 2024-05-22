import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Footer, Spinner } from './components'
import { initializeApp } from 'firebase/app'
import AboutPage from './pages/AboutPage'
import PrivateRoute from './components/PrivateRoute'

const LandingPage = lazy(() => import('./pages/LandingPage'))

const VideoPage = lazy(() => import('./pages/VideoPage'))
const MerchPage = lazy(() => import('./pages/MerchPage'))

const NotFound = lazy(() => import('./pages/NotFound'))

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBX2YaYwh4XnueRUpxJgvttgGtIPZw4MkI',
  authDomain: 'theater-23015.firebaseapp.com',
  projectId: 'theater-23015',
  storageBucket: 'theater-23015.appspot.com',
  messagingSenderId: '748186861007',
  appId: '1:748186861007:web:40342140e7d4978639a6ba',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const App = () => {
  const isDrawerOpen = useSelector((state) => state.isDrawerOpen.value)

  // if (isDrawerOpen) {
  //   // window.onscroll = function () {
  //   //   window.scrollTo(0, 0)
  //   // }
  //   document.body.classList.add('overflow-hidden')
  // }

  // // if (!isDrawerOpen) {
  // //   document.body.classList.remove('overflow-hidden')
  // // }

  return (
    <div className="flex flex-col min-h-[100dvh] before:bg-black bg-white overwlow-hidden">
      <Router>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/merch" element={<PrivateRoute component={MerchPage} />} />
            <Route path="/cult1" element={<VideoPage id={1} />} />
            <Route path="/cult2" element={<VideoPage id={2} />} />
            <Route path="/cult3" element={<VideoPage id={3} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        {/* <Footer /> */}
      </Router>
    </div>
  )
}
