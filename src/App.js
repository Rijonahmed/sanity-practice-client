import './App.css';
import Banner from './component/Home/Banner';
import OurRooms from './component/Home/OurRooms';
import ResortFeatures from './component/Home/ResortFeatures';
import ResortSpecials from './component/Home/ResortSpecials';
import Footer from './component/Home/Shared/Footer';
import Navber from './component/Home/Shared/Navber';
import WelcomePage from './component/Home/WelcomePage';

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Banner></Banner>
      <WelcomePage />
      <ResortFeatures />
      <OurRooms />
      <ResortSpecials />
      <Footer />
    </div>
  );
}

export default App;
