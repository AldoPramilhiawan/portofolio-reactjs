import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Navbar';
import Header from "./component/Header";
import Biografi from './component/biografi';
import Contact from './component/contact';
import Footer from './component/Footer';

function App() {
  return (
  <>
   <Navbar />
   <Header />
   <Biografi />
   <Contact />
   <Footer />
  </>
  );
}

export default App;
