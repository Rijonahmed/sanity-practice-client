import React from 'react';
import Banner from './Banner/Banner';
import ResortFeatures from './Features/ResortFeatures';
import OurRooms from './OurRooms';
import ResortSpecials from './Specials/ResortSpecials';
import WelcomePage from './WelcomePage';

const Overview = () => {
  return (
    <div>
      <Banner />
      <WelcomePage />
      <ResortFeatures />
      <OurRooms />
      <ResortSpecials />
    </div>
  );
};

export default Overview;