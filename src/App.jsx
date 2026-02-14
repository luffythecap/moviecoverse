// App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/loaders';
import Home from './pages/Home';
import FeaturesPage from './pages/feacture';
import SmoothCursor from './components/cursor';
import SmoothScrollWrapper from './components/scroller';
import WorkPage from './pages/work';
import ContactUs from './pages/contactus'
import Technology from './pages/Technology';

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <main className="relative overflow-hidden">
      {loading && <Loader />}
      <Navbar />
      <SmoothCursor
        color="#3b82f6"
        glowEffect={true}
        showTrail={true}
        trailLength={14}
      />
      {/* Background + Smooth Scrolling applied here */}
      <div className="bg-[#edf1ef]  ">
        <SmoothScrollWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feacture" element={<FeaturesPage />} />
            <Route path="/work" element={<WorkPage/>} />
            <Route path="/Technology" element={<Technology/>} />
            <Route path="/contactus" element={<ContactUs/>} />
          </Routes>
          <Footer />
        </SmoothScrollWrapper>
      </div>
    </main>
  );
};

export default Sentry.withProfiler(App);
