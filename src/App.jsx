import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Spinner } from './components'
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
  apiKey: import.meta.env.VITE_APP_API_URL,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const App = () => {
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
