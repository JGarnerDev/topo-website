export default {
  name: "copywriting",
  title: "Copywriting",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Copywriting title",
      type: "string",
      description: "The section of where this text goes",
    },
    {
      name: "content",
      title: "Content",
      type: "text",
      description:
        "The text content of the section (between 100 and 200 characters)",
      validation: (Rule) => Rule.required().min(100).max(200),
    },
  ],
};
