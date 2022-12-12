import React from 'react';

const WelcomePage = () => {
  return (
    <div>
      <div className='flex flex-col bg-slate-100 md:flex-row gap-2 justify-between items-center py-10 px-2'>

        <div className="text-left w-6/12">
          <h2 className="text-3xl font-bold">Welcome to
            Kahana Falls Maui</h2>
          <h3 className="">This beautiful resort – at the lovely shore, just a few miles north of Lahaina - offers beauty, comfort, and a tropical retreat for all who visit the enchanting island of Maui. Relax and let go of all worries at this balmy home away from home. Take a dip in the free-form swimming pool and enjoy the peaceful sound of the waterfalls surrounding you.</h3>
          <h3 className="">Warm up in the sandy-bottomed whirlpool after a great workout in the fitness center. Our onsite island activities desk will help you see the best of Maui, but don’t miss out on our beach; only steps away from the resort.</h3>

        </div>

        <div className="w-6/12">
          <img className=' ' src="http://kahanafalls.flywheelsites.com/wp-content/uploads/2022/05/Kahana-Falls.jpg" alt="" />
        </div>


      </div>
    </div>
  );
};

export default WelcomePage;