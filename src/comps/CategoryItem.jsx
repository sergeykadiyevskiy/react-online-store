import { Link } from "react-router-dom"
import styled  from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({height: "40vh"})}
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: #b8edff;
    font-size: 70px;
    margin-bottom: 20px;
    filter: drop-shadow(0 0 1rem crimson);
    
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: #b8edff;
    color: black;
    cursor: pointer;
    font-weight: 700;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
    <Link to={`/products/${item.category}`}>
    <Image src={item.img}/>
    <Info>
        <Title>{item.title}</Title>
        <Button>EXPLORE</Button>
    </Info>
    </Link>
    </Container>
  )
}

export default CategoryItem