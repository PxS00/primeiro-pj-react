import styled from 'styled-components'
import Input from '../Input'
import { useState } from 'react'

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #fff;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const Title = styled.h2`
    color: #fff;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const Subtitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

function Search() {
    const [typedText, setTypedText] = useState('')
    return(
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
            <Input
                placeholder='Escreva sua próxima leitura'
                onBlur={(event) => {setTypedText(event.target.value)}}
            />
            <p>{typedText}</p>
        </SearchContainer>
    )
}

export default Search;