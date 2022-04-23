import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
height: 30px;
background-color: #386183;
color: white;
align-items: center;
display: flex;
justify-content: center;
font-weight: 500;
font-size: 14px;
${mobile({fontSize: "12px"})}
`

export const Banner = () => {

  
  return (
    <Container>Free Shipping + Returns, Free Membership, Exclusive Products</Container>
  )
}

export default Banner