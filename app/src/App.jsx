import { useEffect, useState } from 'react';
import styled from 'styled-components'

const BASE_URL="http://localhost:9000/";
const App = () => {
  useEffect(()=>{
  const[data,setData] = useState(null);
  const[loading,setLoading] = useState(false);
  const[error,setError] = useState(null);

  const fetchFoodData= async ()=>{
    setLoading(true);
    try {
      const response = await fetch(BASE_URL);
      const json =await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      setError("Unable to fetch data");
    }
  };
  fetchFoodData();
  },[]);
  
  return <Container>
    <TopContainer>
      <div classname="logo">
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className='search'>
        <input placeholder='Search Food' />

      </div>
    </TopContainer>

    <FilterContainer>
      <Button>All</Button>
      <Button>Breakfast</Button>
      <Button>Lunch</Button>
      <Button>Dinner</Button>
    </FilterContainer>

    <FoodCardsContainer>
      <FoodCard>

      </FoodCard>
    </FoodCardsContainer>
  </Container>;
};

export default App;
const Container=styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer=styled.div`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search{
    input{
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;
const FilterContainer=styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;
const Button=styled.button`
  background: #FF4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
`;
const FoodCardsContainer=styled.section`
  height: calc(100vh - 210px);
  background-image: url("/bg.png");
  background-size: cover;
`;
const FoodCard=styled.div`
  
`;