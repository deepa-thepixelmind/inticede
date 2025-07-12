import WhoWeAreSection from "./who-we-are";
import OurVisionSection from "./OurVisionSection"
import WhatDrivesUsSection from "./WhatDrivesUsSection";
import PartneringAdvantagesSection from "./partnership";
import YusufDohadwalaSection from "./YusufDohadwalaSection";
import InticedeTeamSection from "./Teamsection";
import Timeline from "./Timeline";


export default function Home() {
  return (
    <div className="bg-white min-h-screen">

    <WhoWeAreSection/>
    <OurVisionSection/>
    <WhatDrivesUsSection/>
    <PartneringAdvantagesSection/>
    <Timeline/>
    <YusufDohadwalaSection/>
    <InticedeTeamSection/>

    </div>
  );
}