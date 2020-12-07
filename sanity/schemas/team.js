export default {
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of you guys",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      description: "Description of you guys",
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
