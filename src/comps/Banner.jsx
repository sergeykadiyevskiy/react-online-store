import styled from "styled-components";

const Container = styled.div`
height: 30px;
background-color: orangered;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`

export const Banner = () => {
  return (
    <Container>
        Get a 3% Discount on Purchases Over $1000 
    </Container>
  )
}
