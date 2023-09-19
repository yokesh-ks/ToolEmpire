import { Button } from "../../ui/button";
import { toPng } from "html-to-image";
import { toast } from "react-hot-toast";
import useStore from "@/store/store";

export default function ExportOptions({ targetRef }) {
  const title = useStore((state) => state.title);

  const saveImage = async (name, format) => {
    const loading = toast.loading(`Exporting ${format} image...`);

    try {
      let imgUrl, filename;
      switch (format) {
        case "PNG":
          imgUrl = await toPng(targetRef.current, { pixelRatio: 2 });
          filename = `${name}.png`;
          break;
        default:
          return;
      }

      const a = document.createElement("a");
      a.href = imgUrl;
      a.download = filename;
      a.click();

      toast.remove(loading);
      toast.success("Downloaded successfully!");
    } catch (error) {
      toast.remove(loading);
      toast.error("Something went wrong!");
    }
  };

  return (
    <Button onClick={() => saveImage(title, "PNG")}>
      {/* <Share2Icon className="mr-2" /> */}
      Download
    </Button>
  );
}
