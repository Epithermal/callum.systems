// @flow strict
import fetch from 'node-fetch';
import { personalData } from "@/utils/data/personal-data";

async function getBlog(slug) {
  try {
    console.log(`Fetching blog details for user: ${personalData.devUsername}, slug: ${slug}`);

    const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`);
    console.log(`Fetch response status: ${res.status} ${res.statusText}`);

    if (!res.ok) {
      const errorDetails = await res.text();
      console.error(`Fetch failed: ${res.status} - ${res.statusText} - ${errorDetails}`);
      throw new Error(`Failed to fetch data: ${res.status} - ${res.statusText} - ${errorDetails}`);
    }

    const data = await res.json();
    console.log('Fetched blog details:', data);

    return data;
  } catch (error) {
    console.error('Error fetching blog details:', error);
    throw error;
  }
}

async function BlogDetails({ params }) {
  const slug = params.slug;
  try {
    const blog = await getBlog(slug);

    return (
      <div>
        <h1>{blog.title}</h1>
        <p>{blog.description}</p>
        {/* Render other blog details here */}
      </div>
    );
  } catch (error) {
    return <div>Error loading blog details: {error.message}</div>;
  }
}

export default BlogDetails;
