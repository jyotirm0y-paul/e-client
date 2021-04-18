
import './App.css';
import Admin from './Components/Home/Admin/Admin';
import Discount from './Components/Home/Discount/Discount';
import Footer from './Components/Home/Footer/Footer';
import Header from './Components/Home/Header/Header';
import Reviews from './Components/Home/Reviews/Reviews';
import Services from './Components/Home/Services/Services';
import Teams from './Components/Home/Teams/Teams';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Services></Services>
      <Discount></Discount>
      <Teams></Teams>
      <Reviews></Reviews>
      <Footer></Footer>
      <Admin></Admin>
    </div>
  );
}

export default App;
