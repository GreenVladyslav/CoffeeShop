import './app-nav.scss';

const Nav = (props) => {
    return(
        <nav className={props.clazzNav}>
            <img className={props.clazzImg} src={props.src} alt={props.alt}/>
            <a className={props.clazzLink} href="/index.html">Coffee house</a>
            <a className={props.clazzLink} href="/ourcoffee.html">Our coffee</a>
            <a className={props.clazzLink} href="/goods.html">For your pleasure</a>
        </nav>
    )
}

export default Nav;