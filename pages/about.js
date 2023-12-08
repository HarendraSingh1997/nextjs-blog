import React from "react";
import posts from "../data/posts";

export async function getServerSideProps() {
  //const posts = posts;

  return {
    props: {
      posts,
    },
  };
}

const About = ({ posts }) => {
  return (
    <>
      <div>About Post</div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}


export default About;