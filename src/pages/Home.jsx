import React from "react";
import HomeHero from "../components/home/HomeHero";
import AboutQabas from "../components/home/AboutQabas";
import HomeStages from "../components/home/HomeStages";
import HomeJourney from "../components/home/HomeJourney";
import HomeProjects from "../components/home/HomeProjects";
import HomePartners from "../components/home/HomePartners";
import HomeFooter from "../components/home/HomeFooter"

export default function Home() {
    return (
        <div className="home w-full overflow-x-hidden" dir="rtl">
            <HomeHero />
            <AboutQabas />
            <HomeStages />
            <HomeJourney />
            <HomeProjects />
            <HomePartners />
            <HomeFooter />
        </div>
    );
}
