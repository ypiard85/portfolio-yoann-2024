import React from "react";
import HeroBanner from "./assets/components/parts/homepage/HeroBanner";
import Services from "./assets/components/parts/homepage/Services";
import Projects from "./assets/components/parts/homepage/Projects";
import IfiniteTextTranslate from "./assets/components/texts/InfiniteTextTranslate";
import Contact from "./assets/components/parts/homepage/Contact";
import NavigationBar from "./assets/components/navigation/NavigationBar";

export default function Home() {
  return (
    <React.Fragment>
      <NavigationBar />
      <main>
        <HeroBanner />
        <div className="bg-gradient-to-t from-indigo-600 to-blue-dark">
          <Services />
          <IfiniteTextTranslate />
          <Projects />
        </div>
        <div className="bg-gradient-to-t from-blue-dark to-indigo-600">
          <Contact />
        </div>
      </main>
    </React.Fragment>
  );
}
