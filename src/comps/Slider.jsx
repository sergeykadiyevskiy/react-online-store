import styled from "styled-components";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: left;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 70%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1``;
const Desc = styled.p``;
const Button = styled.button``;

export const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImageContainer>
            <Image src="https://images.unsplash.com/photo-1520315342629-6ea920342047?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" />
          </ImageContainer>
          <InfoContainer>
            <Title>TITLE GOES HERE</Title>
            <Desc>DESCRIPTION GOES HERE</Desc>
            <Button>BUTTON GOES HERE</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};
