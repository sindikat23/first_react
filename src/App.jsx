import Navbar from "./components/Navbar";
import Header from './components/Header';
import Footer from "./components/Footer";
import img_first from "./assets/images/fashion1.png"
import img_first2 from './assets/images/fashion2.png'
import img_first3 from './assets/images/fashion3.png'
import img_first4 from '../src/assets/images/fashion2.png'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Header img={img_first}/>
      <Header img={img_first2}/>
      <Header img={img_first3}/>
      <Header img={img_first4}/>
      <Footer />
    </div>
  );
}

export default App;
