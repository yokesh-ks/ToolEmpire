import { Container } from "@uimakers/tools-ui";
import styled from "styled-components";
import { Clamp } from "../../utils";

const AllToolSection = (props) => {
  const { data } = props;

  const handleClick = (routeName) => {
    window.open(routeName, "_self");
  };

  return (
    <Container>
      <GridContainer>
        {data.map((item, index) => (
          <Card onClick={() => handleClick(item?.routeName)} key={index}>
            <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
              <IconContain />
              <div style={{ flex: 1, marginLeft: 20 }}>
                <CardTitle>{item?.title}</CardTitle>
                <CardDescription>{item?.description}</CardDescription>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button>View Tool</Button>
            </div>
          </Card>
        ))}
      </GridContainer>
    </Container>
  );
};

export default AllToolSection;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: ${Clamp(160, 80)} 0px;
  gap: ${(props) => props.theme.spacing.spacing8};

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  background: ${(props) => props.theme.colors.background};
  border: 2px solid ${(props) => props.theme.colors.onNeutral};
  box-shadow: 2px 2px 4px ${(props) => props.theme.colors.onNeutral};
  border-radius: 8px;
  padding: ${(props) => props.theme.spacing.spacing6};
  cursor: pointer;
`;

const IconContain = styled.div`
  width: 60px;
  height: 60px;
  background: ${(props) => props.theme.colors.textHints};
  opacity: 0.4;
  border-radius: 40px;
`;

const CardTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.onNeutral};
`;

const CardDescription = styled.h4`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.textHints};
`;

const Button = styled.div`
  width: 100px;
  height: 31px;
  font-size: 12px;
  line-height: 15px;
  font-weight: 400;
  margin-top: ${(props) => props.theme.spacing.spacing7};
  padding: ${(props) => props.theme.spacing.spacing3}
    ${(props) => props.theme.spacing.spacing5};
  color: ${(props) => props.theme.colors.onPrimary};
  background: ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.onNeutral};
  box-shadow: 4px 4px 0px ${(props) => props.theme.colors.onNeutral};
  border-radius: 4px;
  cursor: pointer;
`;
