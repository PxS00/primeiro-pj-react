import styled from 'styled-components';

const Input = styled.input`
  order: 1px solid #fff;
  background: transparent;
  border: 1px solid #fff;
  padding: 20px 140px;
  border-radius: 50px;
  width: 200px;
  color: #fff;
  font-size: 16px;
  margin-bottom: 30px;

  &::placeholder {
    color: #fff;
    font-size: 16px;
    opacity: 1;
  }
`;

export default Input;
