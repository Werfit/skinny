import { FormObj } from "@quillforms/renderer-core/build-types/types";

export const FORM_BLOCKS: FormObj["blocks"] = [
  {
    name: "welcome-screen",
    id: "welcome-screen",
    attributes: {
      label: "Weight loss made easy with a prescription to semaglutide",
      description: "Lose up to 1.5% of your body fat per week",
    },
  },
  {
    name: "email",
    id: "email",
    attributes: {
      required: true,
      label: "What's your email address?",
      description:
        "If you are a returning user or have already provided an email address. Please use the same information below so we can match your profile",
    },
  },
  {
    name: "radio-button",
    id: "dropdown",
    attributes: {
      required: true,
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
    id: "date",
    attributes: {
      required: true,
      label: "What is your date of birth",
      description: "Please enter your birthday below",
    },
  },
  {
    id: "bmi",
    name: "group",
    attributes: {
      label:
        "What is your height and current weight! This will help us calculate your BMI and macronutrients.",
      description: "Please enter your height and weight below",
    },
    innerBlocks: [
      {
        id: "asfijais1e",
        name: "number",
        attributes: {
          label: "Feet",
          required: true,
          layout: "split-left",
        },
      },
      {
        id: "7dsjsdv821",
        name: "number",
        attributes: {
          label: "Inches",
          required: true,
          layout: "split-right",
          placeholder: "4",
        },
      },
      {
        id: "2esad013x",
        name: "number",
        attributes: {
          label: "Currently weight (lbs.)",
          required: true,
          placeholder: "195",
        },
      },
    ],
  },
  {
    name: "radio-button",
    id: "weight-loss",
    attributes: {
      label: "Are you here to be evaluated for weight loss",
      description:
        "All responses will be evaluated by a board-certified physician. Medication may be prescribed for appropriate candidates.",
      choices: [
        {
          label: "Yes",
          value: "yes",
        },
        {
          label: "No",
          value: "no",
        },
      ],
    },
  },
  {
    name: "radio-button",
    id: "attempts",
    attributes: {
      label:
        "Have you ever attempted to lose weight in a weight management program?",
      description:
        "Examples may include caloric restrictions through diet, exercise, or behaviour modification.",
      choices: [
        {
          label: "Yes",
          value: "yes",
        },
        {
          label: "No",
          value: "no",
        },
      ],
    },
  },
  {
    name: "progress-bar",
    id: "progress-bar",
    attributes: {
      label: "Checking Doctor & Stock Availability",
    },
  },
];
