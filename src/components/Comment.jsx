import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.span`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://lh3.googleusercontent.com/ogw/ANLem4bjj38Bsj91yCv26WbQZs6v6UnQjQtqv6ZwJf_g=s32-c-mo"></Avatar>

      <Details>
        <Name>
          Mr. Arman <Date> 3 days ago</Date>{" "}
        </Name>

        <Text>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsa
          eum enim adipisci obcaecati assumenda!{" "}
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
