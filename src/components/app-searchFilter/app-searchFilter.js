import { Component } from 'react';

import './app-searchFilter.scss';

class SerchFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            str: '',
        }
    }

    onUpdateSearchInput = (event) => {
        const str = event.target.value;
        this.setState({str});
        this.props.onUpdateSearchStr(str);
    }

    render() {

        const buttonsData = [
            {key: 'All', country: 'All'},
            {key: 'Brazil', country: 'Brazil'},
            {key: 'Kenya', country: 'Kenya'},
            {key: 'Columbia', country: 'Columbia'},
        ];

        const buttons = buttonsData.map(({key, country}) => {
            const active = this.props.filter === key;
            const clazz = active ? 'searchFilter__btn-active' : 'searchFilter__btn';

            return (
                <button type='button'
                    className={`searchFilter__btn ${clazz}`}
                    key={key}
                    onClick={() => this.props.onUpdateFilterSelect(key)}>
                    {country}
                </button>
            )
        })

        return(
            <section className="searchFilter">
                <div className="searchFilter__name">
                    <span className="searchFilter__subtitle">Lookiing for</span>
                    <input className="searchFilter__input" type="text" placeholder="start typing here..."
                        value={this.state.str}
                        onChange={this.onUpdateSearchInput}/>
                </div>
    
                <div className="searchFilter__country">
                    <span className="searchFilter__subtitle">Or filter</span>
                    {buttons}
                </div>
            </section>
        )
    }
}

export default SerchFilter;