import NextLink from "next/link";
import { Box, Text, Image } from "@skynexui/components";

export async function getStaticProps() {
  const dadosDaAPI = await fetch(
    `https://fakeapi-omariosouto.vercel.app/api/posts/`
  ).then((res) => res.json());
  const post = dadosDaAPI;

  return {
    props: {
      posts: post.posts,
    },
    revalidate: 120,
  };
}

export default function PostsScreen({ posts }) {
  const infos = {
    nome: "Gabriel Machado",
    githubUser: "Gabriel-025",
  };
  // const posts = dados.posts;
  return (
    <Box
      styleSheet={{
        flexDirection: "column",
        margin: "32px auto",
        maxWidth: "800px",
        paddingHorizontal: "16px",
      }}
    >
      <Image
        src={`https://github.com/${infos.githubUser}.png`}
        styleSheet={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          margin: "0 auto",
          border: "2px solid #F9703E",
        }}
      />
      <Text
        variant="heading1"
        tag="h1"
        styleSheet={{ color: "#F9703E", justifyContent: "center" }}
      >
        {infos.nome}
      </Text>

      <Box
        styleSheet={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          marginTop: "16px",
          gridGap: "16px",
        }}
      >
      
        {posts.map(({ title, content, id }, index) => {
          return <Post key={id} title={title} content={content} id={id} />;
        })}
      </Box>
    </Box>
  );
}

function Post({ title, content, id }) {
  return (
    <Box
      styleSheet={{
        flexDirection: "column",
        border: "1px solid #F9703E",
        padding: "16px",
        boxShadow: "1px 1px 5px 0 rgba(255,69,0,0.2)",
        transition: ".3s",
        borderRadius: "4px",
        hover: {
          boxShadow: "1px 1px 5px 5px rgba(255,69,0,0.2)",
        },
      }}
    >
      <NextLink href={`posts/${id}`}>
        <Text
          tag="a"
          variant="heading4"
          styleSheet={{
            display: " block",
            color: "#F9703E",
            marginBottom: "8px",
            cursor:"pointer"
          }}
        >
          {title}
        </Text>
      </NextLink>
      <Text>{content.substring(0, 140)}...</Text>
    </Box>
  );
}
