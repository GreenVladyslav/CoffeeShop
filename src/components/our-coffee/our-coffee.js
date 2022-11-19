import Header from '../app-header/app-header';
import About from '../app-about/app-about';
import Divider from '../divider/divider';
import SerchFilter from '../app-searchFilter/app-searchFilter';
import Cards from '../app-cards/app-cards';
import Footer from '../app-footer/app-footer';

import coffeeImg from '../../resources/coffeeImg.png'

import './our-coffee.scss';

const OurCoffee = ({data, onUpdateSearchStr, filter, onUpdateFilterSelect}) => {

    return(
        <div className='page-second'>
            <Header clazz="header"
                title="Our Coffee"/>
            <About subtitle="About our beans"
                img={coffeeImg}
                alt="girl drink coffee"/>
            <Divider/>
            <SerchFilter
                onUpdateSearchStr={onUpdateSearchStr}
                filter={filter}
                onUpdateFilterSelect={onUpdateFilterSelect}/>
            <Cards
                data={data}/>
            <Footer/>
        </div>
    )
}

export default OurCoffee;



// class OurCoffee extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [
//                 {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, id: 1},
//                 {name: 'PRESTO Coffee 1 kg', country: 'Kenya', price: 8.99, id: 2},
//                 {name: 'SOLIMO Coffee 1 kg', country: 'Columbia', price: 9.99, id: 3},
//                 {name: 'SOLIMO Coffee 1 kg', country: 'Columbia', price: 9.99, id: 4},
//                 {name: 'PRESTO Coffee 1 kg', country: 'Kenya', price: 8.99, id: 5},
//                 {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, id: 6}
//             ]
//         }
//     }

//     render() {

//         const {data} = this.state;

//         return(
//             <div className='page-second'>
//                 <Header clazz="header"
//                     title="Our Coffee"/>
//                 <About subtitle="About our beans"
//                     img={coffeeImg}
//                     alt="girl drink coffee"/>
//                 <Divider/>
//                 <SerchFilter/>
//                 <Cards
//                     data={data}/>
//                 <Footer/>
//             </div>
//         )
//     }
// }

// export default OurCoffee;