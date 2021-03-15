import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import NavBar from "./NavBar";
import PostCard from "../../components/PostCard";

const posts = [
  {
    id: 1,
    author: {
      id: 1,
      name: "Jordan Marta",
      username: "jordan.smta",
      avatar: "/images/avatars/avatar_1.jpg",
    },
    title: "Criando um App do zero utilizando React.js",
    date: "December 7, 2020",
    description: "Fala pessoal! Qual o framework favorito de vcs?",
    hashtags: "#dotnet, #javascript, #reactjs, #developer",
    image: "/images/posts/post9.png",
  },
  {
    id: 2,
    author: {
      id: 1,
      name: "Jordan Marta",
      username: "jordan.smta",
      avatar: "/images/avatars/avatar_1.jpg",
    },
    title: "Comparativo entre React.js e Vue.js - Performance",
    date: "December 1, 2020",
    description:
      "Quero criar um bootcamp gratuito para passar um pouco da minha experiência pra vcs! Quem topa?",
    hashtags: "#framework, #javascript, #reactjs, #vue",
    image: "/images/posts/post8.png",
  },
];

function Feed() {
  return (
    <Container maxWidth="lg">
      <Box display="flex">
        <NavBar />
        <div>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Box>
    </Container>
  );
}

export default Feed;
