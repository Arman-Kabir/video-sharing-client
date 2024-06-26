import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../components/Comments";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const HR = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
  margin: 5px 0 20px 0;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;
const Description = styled.p`
  font-size: 14px;
`;
const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iFrame
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="Youtube video player"
            // eslint-disable-next-line react/no-unknown-property
            frameborder="0"
            allow="accelerometer; autoplay;
          clipboard-write;encrypted-media;
          gyroscope;picture-in-picture"
            // eslint-disable-next-line react/no-unknown-property
            allowfullscreen
          ></iFrame>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,948,154 views . Jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> 123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <HR></HR>
        <Channel>
          <ChannelInfo>
            <Image src="https://lh3.googleusercontent.com/ogw/ANLem4bjj38Bsj91yCv26WbQZs6v6UnQjQtqv6ZwJf_g=s32-c-mo"></Image>
            <ChannelDetail>
              <ChannelName>RMAN DEV</ChannelName>
              <ChannelCounter>200k subscribers</ChannelCounter>
              <Description>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                sint illum esse quae quia. Quisquam, perspiciatis? Eum velit
                facilis beatae ipsum veritatis minus, itaque modi accusamus ex.
                Explicabo sunt voluptatum eaque a commodi, eligendi dolorem
                nisi. Ducimus numquam ad voluptatem unde consequuntur uia a
                culpa mollitia recusandae sunt facere! Eius officia numquam
                temporibus ex accusantium necessitatibus dolor laboriosam
                adipisci est iure. Libero.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <HR></HR>
        <Comments></Comments>
      </Content>
      <Recommendation>
        <Card type="sm"></Card>
        <Card type="sm"></Card>
        <Card type="sm"></Card>
        <Card type="sm"></Card>
        <Card type="sm"></Card>
        <Card type="sm"></Card>
        <Card type="sm"></Card>
        <Card type="sm"></Card>
        <Card type="sm"></Card>
      </Recommendation>
    </Container>
  );
};

export default Video;
