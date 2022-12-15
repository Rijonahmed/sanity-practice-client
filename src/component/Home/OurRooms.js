import React from 'react';

const OurRooms = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src="http://kahanafalls.flywheelsites.com/wp-content/uploads/2022/05/room.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='pic' />
          <div className='text-left ml-10 text-xl'>
            <h6 className='text-left'>SPACIOUS & COMFY</h6>
            <h1 className="text-5xl font-bold">Our Rooms</h1>
            <p className="py-6">Kahana Falls provides guests all the comforts of a fully furnished Hawaiian vacation rental with accommodations ranging from studios to spacious 2-bedroom suites.</p>
            <p>Cozy 267-sq-foot (24-sq-meter) Non-smoking room offering
              1 queen bed accommodation with kitchenette and free wifi.</p>
            <button className="">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRooms;