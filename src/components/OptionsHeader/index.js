import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Options = styled.ul`
  display: flex;
`;

const Option = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

const textOptions = ['Categorias', 'Estante', 'Favoritos'];

function OptionsHeader() {
  return (
    <Options>
      {textOptions.map((text) => (
        <Link key={text} to={`/${text}`}>
          <Option>
            <p>{text}</p>
          </Option>
        </Link>
      ))}
    </Options>
  );
}

export default OptionsHeader;
