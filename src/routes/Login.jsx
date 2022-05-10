import styled from "styled-components";
import { mobile } from  "../responsive"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://i.imgur.com/hKQMcZb.jpg") center;
  display: flex;
  background-size: cover;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 25%;
  background-color: white;
  padding: 20px;
  ${mobile({width: "75%"})}
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  margin: 10px 0;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  color: white;
  background-color: #386183;
  cursor: pointer;
  margin-bottom: 10;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>LOGIN</Button>
          <Link>FORGOT PASSWORD?</Link>
          <Link>CREATE AN ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
