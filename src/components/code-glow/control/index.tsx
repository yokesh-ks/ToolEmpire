import { Card } from "@/components/ui/card";
import ThemeSelect from "./theme-select";
import LanguageSelect from "./language-select";
import FontSelect from "./font-select";
import PaddingBox from "./padding-box";
import BackgroundSwitch from "./background-switch";
import DarkModeSwitch from "./dark-mode-switch";
import ExportOptions from "./export-options";

export const Control = ({ editorRef }) => {
  return (
    <Card className="fixed bottom-8 py-4 px-6">
      <div className="flex flex-wrap gap-4 p-0">
        <ThemeSelect />
        <LanguageSelect />
        <FontSelect />
        <PaddingBox />
        <BackgroundSwitch />
        <DarkModeSwitch />
        <div className="place-self-center">
          <ExportOptions targetRef={editorRef} />
        </div>
      </div>
    </Card>
  );
};
