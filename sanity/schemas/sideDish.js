export default {
  name: "sideDish",
  title: "Side Dishes",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Title of the side menu item",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      description: "Description of the side dish",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "Cost of the main plate in cents",
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
