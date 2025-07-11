import styled from 'styled-components'
import { books } from './dataLatestReleases'

const LastestReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #fff;
    color: #EB9B00;
    font-size: 36px;
    text-align: center;
    margin: 0;
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
            <Title>ÚLTIMOS LANÇAMENTOS</Title>
            <NewBooksContainer>
                {books.map(book =>(
                    <img src={book.src} alt={book.name}/>
                ))}
            </NewBooksContainer>
        </LastestReleasesContainer>
    )
}

export default LastestReleases;