import { Container } from "@uimakers/tools-ui";

const HeroSection = (props) => {
  const { title, description } = props;
  return (
    <div
      style={{
        backgroundColor: "#0077FF",
        paddingTop: 154,
        paddingBottom: 66,
      }}
    >
      <Container>
        <h1
          style={{
            fontSize: 96,
            color: "#fff",
            textAlign: "center",
          }}
        >
          {title}
        </h1>
        <h1
          style={{
            fontSize: 64,
            color: "#fff",
            textAlign: "center",
          }}
        >
          {description}
        </h1>
      </Container>
    </div>
  );
};

export default HeroSection;
