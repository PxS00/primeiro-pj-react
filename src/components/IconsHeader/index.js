import bag from '../../img/sacola.svg';
import profile from '../../img/perfil.svg';
import styled from 'styled-components';

const icons = [bag, profile];

const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const Icons = styled.ul`
  display: flex;
  align-items: center;
`;

function IconsHeader() {
  return (
    <Icons>
      {icons.map((icon) => (
        <Icon>
          <img src={icon} alt="icon"></img>
        </Icon>
      ))}
    </Icons>
  );
}

export default IconsHeader;
