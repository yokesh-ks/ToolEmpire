import { Container } from "@uimakers/tools-ui";
import { Clamp } from "../../utils";
import styled from "styled-components";

const HeroSection = (props) => {
  const { title, description } = props;
  return (
    <SectionWrapper>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Container>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  background: ${(props) => props.theme.colors.primary};
  padding-top: ${(props) => props.theme.spacing.spacing13};
  padding-bottom: ${(props) => props.theme.spacing.spacing10};
`;

const Title = styled.h1`
  font-size: ${Clamp(96, 44)};
  color: ${(props) => props.theme.colors.onPrimary};
  text-align: center;
`;

const Description = styled.h1`
  margin-top: ${(props) => props.theme.spacing.spacing4};
  font-size: ${Clamp(64, 20)};
  color: ${(props) => props.theme.colors.onPrimary};
  text-align: center;
`;

export default HeroSection;
