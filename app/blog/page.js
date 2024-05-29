// @flow strict
"use client";
import { useEffect, useState } from 'react';
import { personalData } from "@/utils/data/personal-data";
import BlogCard from "../components/homepage/blog/blog-card";

async function fetchBlogs() {
  try {
    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
    if (!res.ok) {
      const errorDetails = await res.text();
      console.error(`Fetch failed: ${res.status} - ${res.statusText} - ${errorDetails}`);
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error during fetch:', error);
    throw error;
  }
}

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAndSetBlogs() {
      try {
        const data = await fetchBlogs();
        setBlogs(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchAndSetBlogs();
  }, []);

  if (error) {
    return <div>Error loading blogs: {error}</div>;
  }

  if (!blogs.length) {
    console.warn('Fetched blogs array is empty.');
    return <div>No blogs found</div>;
  }

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blog
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {blogs.map((blog, i) => (
          <BlogCard blog={blog} key={i} />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
