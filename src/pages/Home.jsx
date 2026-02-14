// pages/Home.jsx
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
// import Model from '../components/Model';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import SolutionsSection from '../components/solution';
import IndustriesServed from '../components/served';

const Home = () => {
  return (
    <>
      <Hero />
      <Highlights />
      <SolutionsSection/>
      <IndustriesServed/>
      <Features />
      <HowItWorks />
    
    </>
  );
};

export default Home;
