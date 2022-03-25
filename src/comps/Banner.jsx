import styled from "styled-components";

const Container = styled.div`
height: 30px;
background-color: #386183;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`

export const Banner = () => {
  return (
    <Container>Free Shipping + Returns, Free Membership, Exclusive Products</Container>
  )
}

export default Banner