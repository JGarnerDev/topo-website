export default {
  name: "sandwich",
  title: "Sandwiches",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the sandwich",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      description: "Description of the sandwich",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "Cost of the sandwich in cents",
      validation: (Rule) => Rule.min(50).max(50000),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Image",
      options: { hotspot: true },
    },
  ],
};
