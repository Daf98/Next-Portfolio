import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'pageInfo',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'String'
    },
    {
      name: 'role',
      title: 'Role',
      type: 'String'
    },
    {
      name: 'heroImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'backgroundInformation',
      title: 'BackgroundInformation',
      type: 'String'
    },
    {
      name: 'profilePic',
      title: 'ProfilePic',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'phoneNumber',
      title: 'PhoneNumber',
      type: 'String'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'String'
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'String'
    },
  ],
})
