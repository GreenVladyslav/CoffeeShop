import './app-cards-item.scss';

const CardsItem = (props) => {

    const {name, country, price, src} = props;

    return(
        <a className="cards__item" href="/about.html">
            <img className="cards__item-img" src={src} alt="coffee"/>
            <p className="cards__item-descr">{name}</p>
            <p className="cards__item-country">{country}</p>
            <div className="cards__item-price">{price + '$'}</div>
        </a>
    )
}

export default CardsItem;