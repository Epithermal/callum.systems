import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaPlay } from 'react-icons/fa';
import placeholder from '/public/png/placeholder.png';

const SingleProject = ({ project }) => {
  const { name, description, tags, code, demo, image, features } = project;

  return (
    <div className="group w-full h-fit flex flex-col items-center justify-center relative cursor-text overflow-hidden px-4 md:px-8 py-6 bg-gradient-to-r from-[#281e57] to-[#201435] shadow-xl rounded-lg border border-[#1a1443]">
      <h2 className="text-white font-semibold text-2xl md:text-3xl text-center capitalize mb-4">
        {name}
      </h2>
      <div className="relative w-full mb-6">
        <Image
          src={image ? image.src : placeholder}
          alt={name}
          width={1080}
          height={720}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="flex items-center justify-center space-x-4 mb-4">
        {demo && (
          <Link href={demo} target="_blank" legacyBehavior>
            <a className="flex justify-center items-center w-12 h-12 rounded-full border-2 border-white text-white transition-all duration-300 hover:bg-[#231d4b] hover:text-violet-600 hover:border-violet-600 hover:scale-110">
              <FaPlay />
            </a>
          </Link>
        )}
        {code && (
          <Link href={code} target="_blank" legacyBehavior>
            <a className="flex justify-center items-center w-12 h-12 rounded-full border-2 border-white text-white transition-all duration-300 hover:bg-[#231d4b] hover:text-violet-600 hover:border-violet-600 hover:scale-110">
              <FaCode />
            </a>
          </Link>
        )}
      </div>
      <p className="text-white text-sm md:text-base leading-relaxed text-center mb-6 px-4">
        {description}
      </p>
      {tags && (
        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((tag, id) => (
            <span className="text-xs md:text-sm text-white bg-[#1a1443] px-3 py-1 rounded-full" key={id}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleProject;
