import './style.css';
import Logo from '../Logo';
import OptionsHeader from '../OptionsHeader';
import IconsHeader from '../IconsHeader';

function Header() {
    return (
        <header className='App-header'>
            <Logo />
            <OptionsHeader />
            <IconsHeader />
        </header>
    )
}

export default Header;