import styled from "styled-components";
import Navbar from "../comps/Navbar";
import { Banner } from "../comps/Banner";
import Products from "../comps/Products";
import Newsletter from "../comps/Newsletter";
import Footer from "../comps/Footer";
import { mobile } from "../responsive"
import { useLocation } from "react-router-dom";
import { useState } from "react";


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
  ${mobile({margin: "0px 20px", display: "flex", flexDirection: "column"})}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({marginRight: "0px"})}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin: "10px 0px"})}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation()
  const category = location.pathname.split("/")[2]
  const [filter, setFilter] = useState({})
  const [sort, setSort] = useState("Featured")

  const handleFilters = (e) => {
    const value = e.target.value
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  }


  return (
    <Container>
      <Navbar />
      <Banner />
      <Title>Stomp</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter:</FilterText>
          <Select name="activity" onChange={handleFilters}>
            <Option disabled>
              Activities
            </Option>
            <Option>Lifestyle</Option>
            <Option>Running</Option>
            <Option>Upscale</Option>
            <Option>Sport</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>
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
          <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="featured">Featured</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products  category={category} filter={filter} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
