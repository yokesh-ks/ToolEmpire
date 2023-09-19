import useStore from "@/store/store";
import { Button } from "@/components/ui/button";

const paddingArray = [16, 32, 64, 128];

export default function PaddingBox() {
  const padding = useStore((state) => state.padding);

  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        Padding
      </label>
      {paddingArray.map((item, index) => (
        <Button
          variant={Number(padding) === Number(item) ? "default" : "ghost"}
          onClick={() => useStore.setState({ padding: item })}
          key={index}
          className="w-10"
        >
          {item}
        </Button>
      ))}
    </div>
  );
}
