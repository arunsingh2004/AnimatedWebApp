import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
  Experience,
} from "../sections";

const Home = () => (
  <div className="bg-primary-white overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    {/* <World /> */}
    <div className="relative">
      <Experience />
    </div>
    <div className="gradient-04 z-0" />
    <Feedback />
    <div className="relative">
      <Insights />
    </div>
    <Footer />
  </div>
);

export default Home;
