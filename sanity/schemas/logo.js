export default {
  name: "logo",
  title: "Logo",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Logo name",
      type: "string",
      description: "The name of the image",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Logo",
      options: { hotspot: true },
    },
  ],
};
