import { Container } from "@uimakers/tools-ui";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";

const ListTools = (props) => {
  const { data } = props;

  const handleClick = (routeName) => {
    window.open(routeName, "_self");
  };

  return (
    <Container>
      <div className="grid grid-cols-3 gap-4">
        {data.map((item, index) => (
          <Card
            onClick={() => handleClick(item?.routeName)}
            key={index}
            className="p-4"
          >
            <CardTitle>{item?.title}</CardTitle>
            <CardDescription className="my-3">
              {item?.description}
            </CardDescription>

            <div className="flex justify-end">
              <Button variant="link">View Tool &rarr;</Button>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default ListTools;
