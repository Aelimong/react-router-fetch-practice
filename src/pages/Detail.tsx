import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getCharacterById } from "../apis/api";
import { theme } from "../styles/theme";

export default function Detail() {
  const navigate = useNavigate();

  const { id } = useParams<"id">();
  const location = useLocation();

  const { isPending, error, data } = useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacterById(id),
  });

  if (error) {
    return "Error";
  }

  return (
    <>
      <Container>
        <BackArrow onClick={() => navigate(-1)}>←</BackArrow>
        {isPending ? (
          <>Loading...</>
        ) : (
          <>
            <CharacterBox>
              <CharacterImg $imgUrl={data?.imageUrl} />
              <CharacterName>
                {location.state.name
                  ? location.state.name
                  : isPending
                  ? "Loading..."
                  : data?.name}
                's Films'
              </CharacterName>
              <Films>
                {data.films?.map((el: string) => {
                  return <Film>{el}</Film>;
                })}
              </Films>
            </CharacterBox>
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

const BackArrow = styled.span`
  width: 20px;
  height: 20px;
  line-height: 15px;
  font-size: 24px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const CharacterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CharacterImg = styled.div<{ $imgUrl: string }>`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-image: url(${(props) => props.$imgUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 20px;
`;

const CharacterName = styled.h6`
  font-size: 32px;
  margin-bottom: 40px;
`;

const Films = styled.ul`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const Film = styled.li`
  width: fit-content;
  padding: 10px;
  border-radius: 10px;
  color: ${theme.blackColor};
  background-color: ${theme.textColor};
`;
