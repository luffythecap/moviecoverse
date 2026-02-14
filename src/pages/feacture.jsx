// pages/FeaturesPage.jsx

import HeroFeature from '../components/HeroFeature';
import WaterScrollSection from '../components/WaterScrollSection';
import WaterTreatmentCarousel from '../components/WaterTreatmentCarousel';
import WaterTimeline from "../components/WaterTimeline";
import WaterDashboard from '../components/WaterDashboard';
import ClientReview from '../components/ClientReview';


const FeaturesPage = () => {
  return (
    <>
    <HeroFeature/>
    <WaterScrollSection/>
    <WaterTimeline/>
    <ClientReview/>
    <WaterTreatmentCarousel/>
    <WaterDashboard/>  
    
      
    </>
  );
};

export default FeaturesPage;
