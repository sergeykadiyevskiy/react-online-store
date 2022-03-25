import styled from "styled-components";
import Navbar from "../comps/Navbar";
import { Banner } from "../comps/Banner";
import Newsletter from "../comps/Newsletter";
import Footer from "../comps/Footer";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
     
        transform: scale(1.2);
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #386183;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #386183;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  transition: all 1s ease;
  &:hover {
    background-image: linear-gradient(to bottom right, #d1fff4, #ffcab8);
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.imgur.com/9lPaFl4.png" />
        </ImageContainer>
        <InfoContainer>
          <Title>Air Jordan 32's</Title>
          <Description>
            Exercitation duis elit Lorem fugiat officia aliquip sit. Dolor
            consectetur esse eiusmod enim dolor incididunt nisi. Qui Lorem anim
            labore cillum dolor enim sunt ut minim aliquip non. Ipsum elit
            deserunt cillum incididunt anim minim ex deserunt dolor. Do esse
            irure adipisicing occaecat laborum est velit ullamco Lorem nisi
            quis. Est occaecat proident pariatur commodo.
          </Description>
          <Price>$ 285</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#a66f88" />
              <FilterColor color="#fb7d5a" />
              <FilterColor color="#aafcfa" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>M 5.5 / W 7</FilterSizeOption>
                <FilterSizeOption>M 7 / W 8.5</FilterSizeOption>
                <FilterSizeOption>M 8.5 / W 10</FilterSizeOption>
                <FilterSizeOption>M 9.5 / W 11</FilterSizeOption>
                <FilterSizeOption>M 11 / W 12.5</FilterSizeOption>
                <FilterSizeOption>M 14 / W 15.5</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveOutlinedIcon />
              <Amount>1</Amount>
              <AddOutlinedIcon />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
