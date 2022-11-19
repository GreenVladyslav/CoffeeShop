import Header from '../app-header/app-header';
import About from '../app-about/app-about';
import Divider from '../divider/divider';
import Cards from '../app-cards/app-cards';
import Footer from '../app-footer/app-footer';

import goodsImg from '../../resources/goodsImg.png';

import './goods-page.scss';


const GoodsPage = (props) => {

    const {data} = props;

    return(
        <div className="page-third">
            <Header clazz="header header-goods"
                title="For your pleasure"/>
            <About subtitle="About our goods"
                img={goodsImg}
                alt="cup of coffee"/>
            <Divider/>
            <Cards
                data={data}/>
            <Footer/>
        </div>
    )
}

export default GoodsPage;