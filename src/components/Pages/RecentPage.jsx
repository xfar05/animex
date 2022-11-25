import InfiniteSection from "../Sections/InfiniteSection";
import Navbar from "../Sections/Navbar";
import React from "react";

const RecentPage = () => {
  return (
    <>
      <Navbar></Navbar>
    
      <InfiniteSection
        url={"https://consumet-api.herokuapp.com/meta/anilist/recent-episodes"}
        itemlimit={21}
        sectiontitle={"Recent Episodes"}
        id="recent-nav"
        querytype={"?"}
      ></InfiniteSection>
    </>
  );
};

export default RecentPage;
