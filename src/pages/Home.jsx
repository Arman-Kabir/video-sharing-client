import styled from "styled-components";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../utils/apiConfig";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({type}) => {
  const [videos, setVideos] = useState([]);
  // const [channel, setChannel] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`${API_BASE_URL}videos/${type}`);
      // const res = await axios.get("videos/random");
      console.log(res.data);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
