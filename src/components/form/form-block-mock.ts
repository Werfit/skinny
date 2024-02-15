import { FormObj } from "@quillforms/renderer-core/build-types/types";

export const FORM_BLOCKS: FormObj["blocks"] = [
  {
    name: "welcome-screen",
    id: "jg1401r",
    attributes: {
      label: "Weight loss made easy with a prescription to semaglutide",
      description: "Lose up to 1.5% of your body fat per week",
      classnames: "bg-cyan-500",
    },
  },
  {
    name: "email",
    id: "iqfrqwr13r",
    attributes: {
      required: true,
      label: "What's your email address?",
      description:
        "If you are a returning user or have already provided an email address. Please use the same information below so we can match your profile",
    },
  },
  {
    name: "dropdown",
    id: "3nsdf934",
    attributes: {
      label: "What was your gender assigned at birth?",
      description: "Please select your sex",
      choices: [
        {
          label: "Male",
          value: "male",
        },
        {
          label: "Female",
          value: "female",
        },
      ],
    },
  },
  {
    name: "date",
    id: "a213rsew",
    attributes: {
      required: true,
      label: "What is your date of birth",
      description: "Please enter your birthday below",
    },
  },
  {
    name: "short-text",
    id: "kd12edg",
    attributes: {
      attachment: {
        type: "image",
        url: "https://quillforms.com/wp-content/uploads/2022/10/ludovic-migneault-B9YbNbaemMI-unsplash_50-scaled.jpeg",
      },
      layout: "split-right",
      required: true,
      label: "Let's start with your name",
    },
  },
  {
    name: "slider",
    id: "93pda11",
    attributes: {
      label: "Please choose your donation amount!",
      min: 0,
      max: 100,
      step: 1,
      prefix: "$",
      suffix: ",000",
    },
  },
  {
    name: "number",
    id: "wer3qdkdb",
    attributes: {
      required: true,
      label: "Great {{field:kdsfkdg}}, can you type your age?",
    },
  },
  {
    name: "long-text",
    id: "m35612edg",
    attributes: {
      required: true,
      label: "Type a brief about yourself!",
    },
  },
  {
    name: "multiple-choice",
    id: "gqr1294c",
    attributes: {
      required: true,
      multiple: true,
      verticalAlign: false,
      label: "Which subjects do you love the most?",
      choices: [
        {
          label: "Physics",
          value: "physics",
        },
        {
          label: "Math",
          value: "math",
        },
        {
          label: "English",
          value: "english",
        },
        {
          label: "Biology",
          value: "biology",
        },
      ],
    },
  },
  {
    name: "statement",
    id: "g91imf1023",
    attributes: {
      label: "You are doing great so far!",
      buttonText: "Continue",
      quotationMarks: true,
    },
  },
  {
    name: "website",
    id: "bv91em9123",
    attributes: {
      required: true,
      multiple: true,
      label: "Please insert your website url!",
    },
  },
];
