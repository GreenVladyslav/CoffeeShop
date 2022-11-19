import CardsItem from '../app-cards-item/app-cards-item';

import './app-cards.scss';

const Cards = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return(
            <CardsItem
                key={id}
                {...itemProps}/>
        )
    });

    return(
        <section className="cards">
            {elements}
        </section>
    )
}

export default Cards;




// const Cards = () => {
//     return(
//         <section className="cards">
//             <a className="cards__item" href="/about.html">
//                 <img className="cards__item-img" src={aromistico} alt="coffee"/>
//                 <p className="cards__item-descr">AROMISTICO Coffee 1 kg</p>
//                 <p className="cards__item-country">Brazil</p>
//                 <div className="cards__item-price">6.99$</div>
//             </a>

//             <a className="cards__item" href="/about.html">
//                 <img className="cards__item-img" src={aromistico} alt="coffee"/>
//                 <p className="cards__item-descr">AROMISTICO Coffee 1 kg</p>
//                 <p className="cards__item-country">Brazil</p>
//                 <div className="cards__item-price">6.99$</div>
//             </a>

//             <a className="cards__item" href="/about.html">
//                 <img className="cards__item-img" src={aromistico} alt="coffee"/>
//                 <p className="cards__item-descr">AROMISTICO Coffee 1 kg</p>
//                 <p className="cards__item-country">Brazil</p>
//                 <div className="cards__item-price">6.99$</div>
//             </a>

//             <a className="cards__item" href="/about.html">
//                 <img className="cards__item-img" src={aromistico} alt="coffee"/>
//                 <p className="cards__item-descr">AROMISTICO Coffee 1 kg</p>
//                 <p className="cards__item-country">Brazil</p>
//                 <div className="cards__item-price">6.99$</div>
//             </a>

//             <a className="cards__item" href="/about.html">
//                 <img className="cards__item-img" src={aromistico} alt="coffee"/>
//                 <p className="cards__item-descr">AROMISTICO Coffee 1 kg</p>
//                 <p className="cards__item-country">Brazil</p>
//                 <div className="cards__item-price">6.99$</div>
//             </a>

//             <a className="cards__item" href="/about.html">
//                 <img className="cards__item-img" src={aromistico} alt="coffee"/>
//                 <p className="cards__item-descr">AROMISTICO Coffee 1 kg</p>
//                 <p className="cards__item-country">Brazil</p>
//                 <div className="cards__item-price">6.99$</div>
//             </a>
//         </section>
//     )
// }