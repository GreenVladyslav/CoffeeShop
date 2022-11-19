import './app-beansLogo.scss';

const BeansLogo = (props) => {
    return(
        <div className={props.beanslogo} >
            <div className={props.divider}></div>
            <img className="beans__logo-img" src={props.img} alt="coffee-beans"/>
            <div className={props.divider}></div>
        </div>
    )
}

export default BeansLogo;