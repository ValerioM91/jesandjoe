import { Builder, withChildren } from "@builder.io/react"

import Hero from "./sections/Hero"
import Form from "./sections/Form"
import Where from "./sections/Where"
import RichTextSection from "./sections/RichTextSection"
import Gifts from "./sections/Gifts"
import Map from "./sections/Map"
import Icons from "./sections/Icons"
import { iconNames } from "./components/Icon"

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
  noWrap: true,
})

Builder.registerComponent(Form, {
  name: "Form",
  image: "https://tabler-icons.io/static/tabler-icons/icons-png/checklist.png",
  inputs: [
    { name: "title", type: "string" },
    { name: "subtitle", type: "string" },
    { name: "thankYouMessage", type: "longText", friendlyName: "Thank you message" },
  ],
  noWrap: true,
})

Builder.registerComponent(Where, {
  name: "Where",
  image: "https://tabler-icons.io/static/tabler-icons/icons-png/map-pin.png",
  inputs: [
    { name: "title", type: "string" },
    { name: "image", type: "file" },
    { name: "where", type: "longText" },
  ],
  noWrap: true,
})

Builder.registerComponent(RichTextSection, {
  name: "Rich Text Section",
  image: "https://tabler-icons.io/static/tabler-icons/icons-png/letter-case.png",
  inputs: [
    { name: "title", type: "string" },
    { name: "richText", type: "richText", friendlyName: "content" },
    { name: "id", type: "string" },
  ],
  noWrap: true,
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
  noWrap: true,
})

Builder.registerComponent(Map, {
  name: "Map",
  image: "https://tabler-icons.io/static/tabler-icons/icons-png/map.png",
  inputs: [{ name: "location", type: "string", required: true }],
  noWrap: true,
})

Builder.registerComponent(withChildren(Icons), {
  name: "Icons section",
  canHaveChildren: true,
  image: "https://tabler-icons.io/static/tabler-icons/icons-png/icons.png",
  inputs: [
    { name: "background", type: "enum", enum: ["white", "green"] },
    { name: "title", type: "string" },
    {
      name: "icons",
      type: "list",
      subFields: [
        { name: "icon", type: "enum", enum: iconNames, required: true },
        { name: "text", type: "longText" },
      ],
    },
  ],
  noWrap: true,
})
