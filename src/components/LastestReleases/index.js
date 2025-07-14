import styled from 'styled-components'
import imgBook from '../../img/livro2.png'
import { books } from './dataLatestReleases'
import { Title } from '../Title'
import RecommendationCard from '../RecommendationCard'

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
            <RecommendationCard
                title='Talvez você se interesse por...'
                subtitle='Angular 11'
                description='Angular é um framework para construção de aplicações web.
                    A versão 11 traz consigo novas funcionalidades e melhorias.'
                img={imgBook}
            />

        </LastestReleasesContainer>
    )
}

export default LastestReleases;