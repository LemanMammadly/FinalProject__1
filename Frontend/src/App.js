import './App.css';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddSlider from './adminpanel/slider/AddSlider';
import UpdateSlider from './adminpanel/slider/UpdateSlider';
import SliderDetail from './adminpanel/slider/SliderDetail';
import Admins from './adminpanel/Admins';
import AddPhotos from './adminpanel/photos/AddPhotos';
import PhotosDetail from './adminpanel/photos/PhotosDetail';
import UpdatePhotos from './adminpanel/photos/UpdatePhotos';
import AddProducts from './adminpanel/products/AddProducts';
import ProductDetail from './adminpanel/products/ProductDetail';
import UpdateProducts from './adminpanel/products/UpdateProducts';
import Lookbook from './pages/Lookbook/Lookbook';
import AddInstagram from './adminpanel/instagram/AddInstagram';
import InstagramDetail from './adminpanel/instagram/InstagramDetail';
import UpdateInstagram from './adminpanel/instagram/UpdateInstagram';
import LogoDetail from './adminpanel/Logo/LogoDetail';
import UpdateLogo from './adminpanel/Logo/UpdateLogo';
import SetingsDetail from './adminpanel/settingss/SetingsDetail';
import UpdateSetting from './adminpanel/settingss/UpdateSetting';
import SideBarDrop from './components/SideBarDropdown/SideBarDrop';
import About from './pages/About/About';

function App() {
  
  return (
   <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} exact/>
      <Route path='/sliderDetail' element={<SliderDetail/>} exact/>
      <Route path='/addSlider' element={<AddSlider/>}/>
      <Route path='/updateSlider/:id' element={<UpdateSlider/>} exact/>
      <Route path='/admin' element={<Admins/>}/>
      <Route path='/addphotos' element={<AddPhotos/>} exact/>
      <Route path='/photosDetail' element={<PhotosDetail/>}/>
      <Route path='/updatephotos/:id' element={<UpdatePhotos/>}/>
      <Route path='/addproducts' element={<AddProducts/>}/>
      <Route path='/productdetail' element={<ProductDetail/>}/>
      <Route path='/updateproducts/:id' element={<UpdateProducts/>}/>
      <Route path='/lookbook' element={<Lookbook/>}/>
      <Route path='/addInstagram' element={<AddInstagram/>}/>
      <Route path='/instagramdetail' element={<InstagramDetail/>}/>
      <Route path='/updateInstagram/:id' element={<UpdateInstagram/>}/>
      <Route path='/logodetail' element={<LogoDetail/>}/>
      <Route path='/updatelogo/:id' element={<UpdateLogo/>}/>
      <Route path='/settingdetail' element={<SetingsDetail/>}/>
      <Route path='/updatesettings/:id' element={<UpdateSetting/>}/>
      <Route path='/sidebardrop' element={<SideBarDrop/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
   </BrowserRouter>
  );
}

export default App;
