import './App.css';
import Banner from './component/Home/Banner';
import Navber from './component/Home/Shared/Navber';
import WelcomePage from './component/Home/WelcomePage';

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Banner></Banner>
      <WelcomePage />
    </div>
  );
}

export default App;
