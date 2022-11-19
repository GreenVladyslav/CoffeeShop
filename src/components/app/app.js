import { Component } from 'react';

import MainPage from '../main-page/main-page';
import OurCoffee from '../our-coffee/our-coffee';
import GoodsPage from '../goods-page/goods-page';
import DescrPage from '../coffeeDescr/descr-page';

import aromistico from '../../resources/aromistico.png';
import presto from '../../resources/presto.png';
import solimo from '../../resources/solimo.png';


import './app.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, src: aromistico, id: 1},
                {name: 'PRESTO Coffee 1 kg', country: 'Kenya', price: 8.99, src: presto, id: 2},
                {name: 'SOLIMO Coffee 1 kg', country: 'Columbia', price: 9.99, src: solimo, id: 3},
                {name: 'SOLIMO Coffee 1 kg', country: 'Columbia', price: 9.99, src: solimo,  id: 4},
                {name: 'PRESTO Coffee 1 kg', country: 'Kenya', price: 8.99, src: presto, id: 5},
                {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, src: aromistico, id: 6}
            ],
            str: '',
            filter: '' /* 'All' будет содержать атрибут от кнопок */
        }
    }

    searchCounty = (arr, str) => {
        if (str.length === 0) return arr;

        return arr.filter(item => {
            return item.name.indexOf(str.toUpperCase()) > -1
        })
    }

    onUpdateSearchStr = (str) => {
        this.setState({str});
    }

    filterPost = (arr, filter) => {
        switch(filter) {
            case 'Brazil':
                return arr.filter(item => item.country === 'Brazil');
            case 'Kenya':
                return arr.filter(item => item.country === 'Kenya');
            case 'Columbia':
                return arr.filter(item => item.country === 'Columbia');
            default:
                return arr;
        }
    }

    onUpdateFilterSelect = (filter) => {
        this.setState({filter});
    }

    

    render() {

        const {data, str, filter} = this.state;
        const visibleData = this.filterPost(this.searchCounty(data, str), filter);

        return(
            <div className='app'>
                <MainPage/>
                <OurCoffee
                    data={visibleData}
                    onUpdateSearchStr={this.onUpdateSearchStr}
                    filter={filter}
                    onUpdateFilterSelect={this.onUpdateFilterSelect}/>
               <GoodsPage
                    data={data}/>
                <DescrPage/>
            </div>
        )
    }
}

export default App;