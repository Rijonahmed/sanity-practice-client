import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: "57h88xwi",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-08-05",
})
