import { Form } from "../../form/form.component.tsx";

export const Poll = () => (
  <Form
    formId={1}
    formObj={{
      settings: {
        animationDirection: "horizontal",
        disableWheelSwiping: false,
        disableNavigationArrows: true,
        disableProgressBar: true,
        showQuestionsNumbers: false,
      },
      messages: {
        "label.hintText.enter": "",
      },
      theme: {
        font: "Roboto",
        buttonsBgColor: "#fcd34d",
        questionsColor: "#000",
        answersColor: "#0aa7c2",
        buttonsFontColor: "#fff",
        buttonsBorderRadius: 25,
        errorsFontColor: "#fff",
        errorsBgColor: "#ef4444",
      },
    }}
    onSubmit={(_, { completeForm, setIsSubmitting }) => {
      setTimeout(() => {
        setIsSubmitting(false);
        completeForm();
      }, 500);
    }}
    applyLogic={false}
  />
);
