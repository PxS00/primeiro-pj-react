import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import { getBooks } from '../../services/books';
import { postFavorite } from '../../services/favorites';

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  width: 100%;
  margin-bottom: 40px;
`;
const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;
const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;
const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid #fff;
  }
`;
function Search() {
  const [booksSearched, setBooksSearched] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    const booksFromAPI = await getBooks();
    setBooks(booksFromAPI);
  }

  async function insertFavorite(id) {
    await postFavorite(id);
    alert(`Livro de id: ${id} inserido`);
  }

  return (
    <SearchContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={(event) => {
          const typedText = event.target.value;
          const resultSearch = books.filter((book) =>
            book.name.includes(typedText),
          );
          setBooksSearched(resultSearch);
        }}
      />
      {booksSearched.slice(0, 5).map((book) => (
        <ResultContainer onClick={() => insertFavorite(book.id)}>
          <p>{book.name}</p>
          <img src={book.src} alt={book.name} />
        </ResultContainer>
      ))}
    </SearchContainer>
  );
}

export default Search;
