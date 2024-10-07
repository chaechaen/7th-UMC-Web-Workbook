import React, { useState } from "react";
import styled from "styled-components";

const Movie = ({ title, poster_path, vote_average, id, overview }) => {
  const baseURL = "https://image.tmdb.org/t/p/w500";
  const posterURL = `${baseURL}${poster_path}`;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MovieContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={posterURL} alt={title} />
      {isHovered ? (
        <HoverInfo>
          <h5>{title}</h5>
          <span>{overview}</span>
          <p>{id}</p>
        </HoverInfo>
      ) : (
        <MovieInfo>
          <h5>{title}</h5>
          <span>{vote_average}</span>
          <p>{id}</p>
        </MovieInfo>
      )}
    </MovieContainer>
  );
};

const MovieContainer = styled.div`
  margin: 18px;
  background-color: #474c79;
  color: white;
  border-radius: 5px;
  position: relative;
  img {
    max-width: 100%; /* 이미지 최대 너비 설정 */
  }
`;

const MovieInfo = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  h5 {
    margin: 0;
    color: white;
  }
  span {
    color: white;
    margin-left: auto;
  }
`;

const HoverInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s;
  h5, span, p {
    color: white;
    margin: 5px;
  }

  /* hover 시 표시 */
  ${MovieContainer}:hover & {
    opacity: 1;
  }
`;

export default Movie;
