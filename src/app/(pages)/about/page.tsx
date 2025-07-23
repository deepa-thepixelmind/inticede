import WhoWeAreSection from "./who-we-are";
import OurVisionSection from "./OurVisionSection"
import WhatDrivesUsSection from "./WhatDrivesUsSection";
import PartneringAdvantagesSection from "./partnership";
import YusufDohadwalaSection from "./YusufDohadwalaSection";
import InticedeTeamSection from "./Teamsection";
import Timeline from "./Timeline";
import { Suspense } from "react";


export default function Home() {
  return (
    <div className="bg-white min-h-screen pt-20">

    <WhoWeAreSection/>
    <OurVisionSection/>
    <WhatDrivesUsSection/>
    <PartneringAdvantagesSection/>
     <Suspense fallback={<div>Loading...</div>}>
        <Timeline />
      </Suspense>
    <YusufDohadwalaSection/>
    <InticedeTeamSection/>

    </div>
  );
}