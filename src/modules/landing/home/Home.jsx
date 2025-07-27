import UseHelmet from "../../../hooks/useHelmet";
import Banner from "./Bannnerr/Banner";
import Overview from "./Overview/Overview";
import TourismAndGuides from "./TourismAndGuides";
import Faqs from "../../../pages/faq/FAQ.jsx";
import Stories from "./Overview/Stories/Stories.jsx";
import LiveStats from "./LiveStats/LiveStats.jsx";
import NewsletterSignup from "./NewsletterSignup/NewsletterSignup.jsx";
import Testimonials from "./Testimonials/Testimonials.jsx";
import HowItWorks from "./HowItWorks/HowItWorks.jsx";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs.jsx";
import CallToActionFull from "./CallToActionFull/CallToActionFull.jsx";
import TrendingDestinations from "./TrendingDestinations/TrendingDestinations.jsx";
import Packages from "../../Packages/Packages/Packages.jsx";
import RandomGuides from "./RandomGuides/RandomGuides.jsx";

const Home = () => {
  return (
    <div>
      <UseHelmet title="Home" />

      <Banner />
      <Overview />
      {/* <TourismAndGuides /> */}
      <Packages apiEndpoint="packages/random" />
      <RandomGuides />
      <TrendingDestinations />
      <Stories apiEndpoint="stories" />
      <LiveStats />
      <HowItWorks />
      <WhyChooseUs />
      <Faqs />
      <CallToActionFull />
      <Testimonials />
      <NewsletterSignup />
    </div>
  );
};

export default Home;
