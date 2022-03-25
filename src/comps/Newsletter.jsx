import styled  from "styled-components"
import SendRoundedIcon from '@mui/icons-material/SendRounded';


const Container = styled.div`
    height: 60vh;
    background-image: linear-gradient(to bottom right, #ffcab8, #d1fff4);;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 40%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1.5;
    border: none;
    background-color: crimson;
    color: white;
`


const Newsletter = () => {
  return (
    <Container>
        <Title>SUBSCRIBE</Title>
        <Description>Receive updates on exclusive product releases, discounts, and much more.</Description>
        <InputContainer>
            <Input  placeholder="Enter Your Email"/>
            <Button>
            <SendRoundedIcon />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter