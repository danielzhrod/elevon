import { createClient } from '@sanity/client';
import projectsData from '../data/projects.json';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export const sanityClient = projectId
  ? createClient({ projectId, dataset, useCdn: true, apiVersion: '2024-01-01' })
  : null;

export async function getProjects() {
  if (!sanityClient) return projectsData;
  try {
    const data = await sanityClient.fetch(`*[_type == "project"] | order(order asc) {
      "id": _id,
      "num": num,
      title,
      tag,
      description,
      url,
      "image": image.asset->url,
      imageAlt,
      tags
    }`);
    return data.length ? data : projectsData;
  } catch {
    return projectsData;
  }
}
