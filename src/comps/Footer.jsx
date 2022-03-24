import styled from "styled-components";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';



const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``
const Description = styled.p`
    margin: 20px 0px
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    

`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
    `
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;   
    margin-bottom: 10px;
`


const Right = styled.div`
  flex: 1;
  padding: 20px;
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
              <ListItem>Terms</ListItem>
          </List>
      </Center>
      <Right>
          <Title>Contact</Title>
          <ContactItem>P Sherman; 42 Wallaby Way, Sydney, Australia</ContactItem>
          <ContactItem></ContactItem>
          <ContactItem></ContactItem>
          <ContactItem></ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
