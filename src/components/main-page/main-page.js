import MainHeader from '../app-mainHeader/app-mainHeader';
import AboutUs from '../app-aboutUs/app-aboutUs';
import OurBest from '../app-ourBest/app-ourBest';
import Footer from '../app-footer/app-footer';

const MainPage = () => {
    return(
        <div className='page-first'>
            <MainHeader/>
            <AboutUs/>
            <OurBest/>
            <Footer/>
        </div>
    )
}

export default MainPage;