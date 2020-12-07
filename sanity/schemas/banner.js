export default {
  name: "banner",
  title: "Banner image",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Image name",
      type: "string",
      description: "The name of the image",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Image",
      options: { hotspot: true },
    },
    {
      name: "text",
      title: "Banner text",
      type: "string",
      description: "The text people see when they enter your website",
    },
  ],
};
