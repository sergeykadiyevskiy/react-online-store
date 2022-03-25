import styled from "styled-components";
import Navbar from "../comps/Navbar";
import { Banner } from "../comps/Banner";
import Products from "../comps/Products";
import Newsletter from "../comps/Newsletter";
import Footer from "../comps/Footer";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Title>Stomp</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter:</FilterText>
          <Select>
            <Option disabled selected>
              Activities
            </Option>
            <Option>Lifestyle</Option>
            <Option>Running</Option>
            <Option>Upscale</Option>
            <Option>Sport</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>M 5.5 / W 7</Option>
            <Option>M 6 / W 7.5</Option>
            <Option>M 6.5 / W 8</Option>
            <Option>M 7 / W 8.5</Option>
            <Option>M 7.5 / W 9</Option>
            <Option>M 8 / W 9.5</Option>
            <Option>M 8.5 / W 10</Option>
            <Option>M 9 / W 10.5</Option>
            <Option>M 9.5 / W 11</Option>
            <Option>M 10 / W 11.5</Option>
            <Option>M 10.5 / W 12</Option>
            <Option>M 11 / W 12.5</Option>
            <Option>M 11.5 / W 13</Option>
            <Option>M 12 / W 13.5</Option>
            <Option>M 12.5 / W 14</Option>
            <Option>M 13 / W 14.5</Option>
            <Option>M 13.5 / W 15</Option>
            <Option>M 14 / W 15.5</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort:</FilterText>
          <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
