import styled from 'styled-components'
import { books } from './dataLatestReleases'
import { Title } from '../Title'

const LastestReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    display: flex;
    margin-top: 30px;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LastestReleases() {
    return(
        <LastestReleasesContainer>
            <Title 
                color='#EB9B00' 
                fontSize='36px' 
            >
                ÚLTIMOS LANÇAMENTOS
            </Title>
            <NewBooksContainer>
                {books.map(book =>(
                    <img src={book.src} alt={book.name}/>
                ))}
            </NewBooksContainer>
        </LastestReleasesContainer>
    )
}

export default LastestReleases;