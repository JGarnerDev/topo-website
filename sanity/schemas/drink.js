export default {
  name: "drink",
  title: "Drinks",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the drink",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "Cost of the combo in cents",
      validation: (Rule) => Rule.min(50).max(50000),
    },
  ],
};
