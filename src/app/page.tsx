
import Main_section from "./components/Main_section";
import About from "./components/About";
import Our_expertise from "./components/Our_expertise";
import Brand_section from "./components/Brand_section";
import Trusted_section from "./components/Trusted_section";
import Explore_section from "./components/Explore_section";
import Garments_section from "./components/Garments_section";
import Events_section from "./components/Events_section";
import Connect_work_section from "./components/Connect_work_section";



export default function Home() {
  return (
    <div className="bg-white">
      
      <Main_section />
      <About/>
      <Our_expertise />
      <Brand_section />
      <Trusted_section />
      <Explore_section />
      <Garments_section />
      <Events_section/>
      <Connect_work_section />
      
    </div>
  );
}
