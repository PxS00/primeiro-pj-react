import sacola from '../../img/sacola.svg';
import perfil from '../../img/perfil.svg';
import './style.css';

const icons = [sacola, perfil];

function IconsHeader() {
    return (
        <ul className='icons'>
            {icons.map((icon) => (
                <li className='icon'><img src={icon} alt='icon'></img></li>
            ))}
        </ul>
    )
}

export default IconsHeader;