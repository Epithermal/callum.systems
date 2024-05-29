import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import fetch from 'node-fetch';

async function getData() {
  try {
    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
    
    if (!res.ok) {
      const errorDetails = await res.text();
      console.error(`Fetch failed: ${res.status} - ${res.statusText} - ${errorDetails}`);
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();

    const filtered = data.filter((item) => {
      return item?.cover_image;
    }).sort((a, b) => new Date(b.published_at) - new Date(a.published_at)).slice(0, 5);
    console.log('Filtered data:', filtered);

    return filtered;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}


export default async function Home() {
  const blogs = await getData();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </>
  );
}

