import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCharactersAll } from "../apis/api";
import { theme } from "../styles/theme";
import { Link } from "react-router-dom";

interface ICharactersAll {
  id: number;
  name: string;
  imageUrl: string;
}

export default function Home() {
  const { isPending, error, data } = useQuery({
    queryKey: ["charactersAll"],
    queryFn: getCharactersAll,
  });

  if (error) {
    return "Error";
  }

  return (
    <>
      <Container>
        <MainTitle>Disney Characters</MainTitle>
        {isPending ? (
          <>Loading...</>
        ) : (
          <>
            <CharacterBoxWrap>
              {data.slice(0, 100).map((el: ICharactersAll) => {
                return (
                  <>
                    <CharacterBox key={el.id}>
                      <Link
                        to={`/character/${el.id}`}
                        state={{ name: el.name }}
                      >
                        <CharacterImg $imgUrl={el.imageUrl} />
                        <CharacterName>{el.name}</CharacterName>
                      </Link>
                    </CharacterBox>
                  </>
                );
              })}
            </CharacterBoxWrap>
          </>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 40px 24px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainTitle = styled.h1`
  font-size: 32px;
  text-align: center;
  margin-bottom: 40px;
`;

const CharacterBoxWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`;

const CharacterBox = styled.div`
  width: calc(25% - 40px);
  padding: 32px 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;

  a {
    width: 100%;
    padding: 32px 0 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
  }

  &:hover {
    a {
      transition: all 0.2s linear;
      background-color: ${theme.accentColor};
      color: ${theme.blackColor};
    }
  }
`;

const CharacterImg = styled.div<{ $imgUrl: string }>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: url(${(props) => props.$imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 20px;
`;

const CharacterName = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;
