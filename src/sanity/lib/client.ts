import { projectId, dataset, apiVersion } from './../env';
import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disable CDN if you want real-time updates
});
