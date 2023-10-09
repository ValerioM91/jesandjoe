import { Builder } from "@builder.io/react"

import Hero from "./sections/Hero"
import Form from "./sections/Form"

Builder.registerComponent(Hero, {
  name: "Hero",
  image: "https://tabler-icons.io/static/tabler-icons/icons-png/photo-minus.png",
  inputs: [
    { name: "image", type: "file" },
    { name: "firstPersonName", type: "string" },
    { name: "secondPersonName", type: "string" },
    { name: "date", type: "string" },
    { name: "when", type: "string" },
    { name: "where", type: "longText" },
  ],
})

Builder.registerComponent(Form, {
  name: "Form",
  image: "https://tabler-icons.io/static/tabler-icons/icons-png/checklist.png",
  inputs: [
    { name: "title", type: "string" },
    { name: "subtitle", type: "string" },
    { name: "thankYouMessage", type: "longText", friendlyName: "Thank you message" },
  ],
})
