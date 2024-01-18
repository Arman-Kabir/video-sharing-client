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

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`${API_BASE_URL}videos/random`);
      // const res = await axios.get("videos/random");
      console.log(res.data);
      setVideos(res.data);
    };
    fetchVideos();
  }, []);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} />
      ))}
    </Container>
  );
};

export default Home;
