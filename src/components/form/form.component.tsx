import { Form as QuillForm } from "@quillforms/renderer-core";
import {
  FormObj as QuillFormObj,
  SubmissionDispatchers,
} from "@quillforms/renderer-core/build-types/types";
import "@quillforms/renderer-core/build-style/style.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import { useQuery } from "../../hooks/use-query.hook.tsx";
import { FORM_BLOCKS } from "./form-block-mock.ts";
import "./form-styles.css";

import "./blocks/radio-button";
import "./blocks/progress-bar";

registerCoreBlocks();

type FormObj = Omit<QuillFormObj, "blocks"> & {
  blocks?: QuillFormObj["blocks"];
};

type FormOptions = {
  className: string;
  formId: number;
  formObj: FormObj;
  onSubmit: (data: object, dispatchers: SubmissionDispatchers) => void;
  applyLogic: boolean;
};

export const Form: React.FC<FormOptions> = ({
  className,
  formObj,
  ...props
}) => {
  const { data, isLoading, error } = useQuery<FormObj["blocks"]>(
    "http://localhost:3000/api/v1/form/blocks",
    FORM_BLOCKS,
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={className}>
      <div className="small-shadow w-full h-full overflow-hidden rounded-md">
        <QuillForm
          {...props}
          formObj={{
            ...formObj,
            blocks: data ?? [],
          }}
        />
      </div>
    </div>
  );
};
