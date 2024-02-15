import { registerBlockType } from "@quillforms/blocks";
import { ProgressBarDisplay } from "./display.tsx";

registerBlockType("progress-bar", {
  supports: {
    editable: false,
  },
  display: ProgressBarDisplay as React.FC,
});
