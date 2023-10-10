import { Builder } from "@builder.io/react"

import Hero from "./sections/Hero"
import Form from "./sections/Form"
import Where from "./sections/Where"
import RichTextSection from "./sections/RichTextSection"
import Gifts from "./sections/Gifts"

Builder.registerComponent(Hero, {
  name: "Hero",
  image: "https://tabler-icons.io/static/tabler-icons/icons-png/photo-minus.png",
  inputs: [
    { name: "firstPersonName", type: "string", required: true },
    { name: "secondPersonName", type: "string", required: true },
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

Builder.registerComponent(Where, {
  name: "Where",
  image: "https://tabler-icons.io/static/tabler-icons/icons-png/map-pin.png",
  inputs: [
    { name: "title", type: "string" },
    { name: "image", type: "file" },
    { name: "where", type: "longText" },
  ],
})

Builder.registerComponent(RichTextSection, {
  name: "Rich Text Section",
  image: "https://tabler-icons.io/static/tabler-icons/icons-png/letter-case.png",
  inputs: [
    { name: "title", type: "string" },
    { name: "richText", type: "richText", friendlyName: "content" },
    { name: "id", type: "string" },
  ],
})

Builder.registerComponent(Gifts, {
  name: "Gifts",
  image: "https://tabler-icons.io/static/tabler-icons/icons-png/gift.png",
  inputs: [
    { name: "title", type: "string" },
    { name: "content", type: "longText" },
    { name: "link", type: "string" },
    { name: "linkText", type: "string" },
    { name: "richText", type: "richText" },
  ],
})
