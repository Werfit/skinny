import { registerBlockType } from "@quillforms/blocks";
import { RadioButtonDisplay } from "./display.tsx";

registerBlockType("radio-button", {
  supports: {
    editable: true,
  },
  attributes: {
    choices: {
      type: "array",
      items: {
        type: "object",
        properties: {
          value: {
            type: "string",
          },
          label: {
            type: "string",
          },
        },
      },
    },
  },
  display: RadioButtonDisplay as React.FC,
});
