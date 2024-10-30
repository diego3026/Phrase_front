import ImagenLogo from '../../assets/img/mensaje_logo.png' 
import './Header.css'

const Header = () =>{
    return (
        <div className="header">
            <img className='header__logo' src={ImagenLogo} alt="" />
        </div>
    )
}

export default Header;