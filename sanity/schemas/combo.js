export default {
  name: "combo",
  title: "Combos",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the combo",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      description: "Description of the combo",
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
