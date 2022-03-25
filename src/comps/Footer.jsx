import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Styles by Sergey</Logo>
        <Description>
          Ad aliquip eu eiusmod aliqua excepteur. Eu dolor anim cillum officia
          ex sint eu nulla ut cillum nulla ex labore sint. Dolore est enim elit
          fugiat aliqua amet aliqua. Duis quis nostrud excepteur ullamco aliqua
          labore do cupidatat quis fugiat proident mollit non.
        </Description>
        <SocialContainer>
          <SocialIcon color="#0077b5">
            <LinkedInIcon />
          </SocialIcon>
          <SocialIcon color="#333333">
            <GitHubIcon />
          </SocialIcon>
          <SocialIcon color="#395c85">
            <LanguageIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>LINKS</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Stomp</ListItem>
          <ListItem>Drip</ListItem>
          <ListItem>Rise</ListItem>
          <ListItem>Burst</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Orders</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms of Use</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon style={{marginRight: "10px"}} />P Sherman; 42 Wallaby Way, Sydney, Australia
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon style={{marginRight: "10px"}} />
          +1 555 867 5309
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon style={{marginRight: "10px"}} />
          contact@stylesbysergey.org
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};

export default Footer;