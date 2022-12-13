import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'logo',
  title: 'Logo',
  type: 'document',
  fields: [
    defineField({
      name: 'logoImage',
      title: 'Logo image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})