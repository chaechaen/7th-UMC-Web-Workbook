import Movie from "./Components/Movie/Movie";
import { MOVIES } from "./movieDummy.js";

import styled, { createGlobalStyle } from "styled-components";

function App() {
  return (
<>
    <GlobalStyle />
    <AppContainer>
      {MOVIES.results.map((item) => {
        // 배열에 대해 iterate 하는 메서드 map()을 사용해 movies 객체(api의 데이터)의 results 배열에 있는 각 항목에 대해 작업 수행
        return (
          <Movie
            key={item.id} // 각 요소의 고유한 ID를 key로 사용
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            overview={item.overview}
          />
        );
      })}
    </AppContainer>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #242756;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default App;

