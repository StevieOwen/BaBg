import '../App.css';
import Navbar from '../Components/Navbar/navbar';
import '../Components/Navbar/navbar.css'
import Banner from '../Components/banner/banner'
import '../Components/banner/banner.css'
import Main from'../Components/Main/main'
import '../Components/Main/main.css'
import Footer from'../Components/Footer/footer';
import '../Components/Footer/footer.css'
import Dropdown  from '../Components/Dropdown_menu/dropdown';
import '../Components/Dropdown_menu/dropdown.css'
function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner/>
      <Main/>
      <Footer/>
    </>
  );
}

export default Home;
