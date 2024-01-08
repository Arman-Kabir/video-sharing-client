import styled from "styled-components";
import  armanTube  from "../img/logo.png";

const Container = styled.div`
  flex: 1;
  background-color: #202020;
  height: 100vh;
  color: white;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  gap:5px;
  align-items: center;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={armanTube}></Img>
          RmanTube
        </Logo>
      </Wrapper>
    </Container>
  );
};

export default Menu;
