import {createClient, groq} from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production", // "production"
    projectId: "76yhh5ly", // "76yhh5ly"
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production", // server-side is statically generated, the CDN is only necessary beneficial if queries are called on-demand
});

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);