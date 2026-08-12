import { createClient } from "next-sanity";


export const client = createClient({
  projectId: '3of8oto4',
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token : process.env.SANITY_READ_TOKEN
});

export const sanityWriteClient = createClient(
    {
        projectId : '3of8oto4',
        dataset : "production",
        apiVersion: "2024-01-01",
        useCdn : false,
        token : process.env.SANITY_WRITE_TOKEN
    }
);