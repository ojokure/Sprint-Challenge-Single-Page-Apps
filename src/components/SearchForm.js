import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import { bounce } from "react-animations";

const StyledForm = styled.section`
  font-family: "ABeeZee";
  color:#fed45f;
  padding-top:15px;
  &:hover {
    color:blue;
    font-weight: bold;
  }
`;

const StyledResult = styled(StyledForm)`
   color: blue;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
  margin: 20px auto;
  font-family: "ABeeZee";
  width: 100%;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #7ab900,
    0 0 70px #7ab900, 0 0 80px #7ab900, 0 0 100px #7ab900, 0 0 150px #7ab900;
  backdrop-filter: greyscale(0.8);
  background: linear-gradient(
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.3)
  );
  &:hover {
    color: green;
    font-weight: bold;
  }
`;

const StyledImg = styled.img`
  border-radius: 50%;
  width: 75%;
`;

export default function SearchForm() {
  const [search, setSearch] = useState("");

  const [searchResult, setSearchResult] = useState([]);

  const handleChange = e => {
    setSearchResult(e.target.value);
  };

  // useEffect(() => {
  const handleSubmit = e => {
    e.preventDefault();
    Axios.get(`https://rickandmortyapi.com/api/character/?name=${search}`).then(
      res => {
        setSearchResult(res.data.results);
      }
    );
  };
  // }, [search]);

  return (
    <>
      <StyledForm>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name"> search </label>
            <input
              value={search}
              onChange={handleChange}
              id="name"
              type="text"
              placeholder="search by name"
            />
          </div>
        </form>
      </StyledForm>
      <StyledResult>
        {searchResult.map(el => (
          <div>
            <div>
              <StyledImg src={el.image} alt={el.id} />
            </div>
            <h4>
              Name: {el.name} Species:{el.species}{" "}
            </h4>
          </div>
        ))}
      </StyledResult>
    </>
  );
}
