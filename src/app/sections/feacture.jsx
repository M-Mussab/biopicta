import Images1 from '@/app/images/image1.svg';
import Images2 from '@/app/images/image2.svg';
import Images3 from '@/app/images/image3.svg';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export const members = [
  {
    quote: {
      line1:
        'Create unique scientific posters without the hassle of manual adjustments.',
      line2: 'Focus more on your research and less on tweaking poster design.',
      line3:
        'User-friendly poster templates designed specifically for scientists.',
      line4: 'Easily align and distribute elements for a professional look.',
    },
    package: 'Try It For FREE!',
    title: 'Say Goodbye to Adjusting and Aligning in PowerPoint',
    image: Images1,
  },
  {
    quote: {
      line1:
        'Download high-end JPG, PNG, and PDF files for e-presentations and printing.',
      line2:
        'Select templates in portrait, landscape, or square formats effortlessly.',
      line3:
        'Auto-resizing with ratio and proportion ensures consistent margins.',
    },
    package: 'Try It For FREE!',
    title:
      'Ready Made Poster Templates In Portrait, Landscape, And Square Sizes',
    image: Images2,
  },
  {
    quote: {
      line1:
        'Collaborate with co-authors in real-time, sharing and editing posters without barriers.',
      line2: 'Get comments and feedback faster, enhancing team productivity.',
      line3: 'Access your posters securely from anywhere, anytime.',
    },
    package: 'Try It For FREE!',
    title: 'No More Emailing Posters Between Team Members',
    image: Images3,
  },
];

const Feature = () => {
  return (
    <section className="flex flex-col items-center text-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <h1 className="text-4xl sm:text-3xl font-bold text-gray-900 mb-2">
        Create Research Posters In Minutes.
      </h1>
      <p className="mb-8 text-lg text-gray-700">
        <span className="text-4xl text-[#011915] sm:text-3xl font-bold">
          Powered By
        </span>{' '}
        <span className="text-4xl text-green-900 sm:text-3xl font-extrabold">
          Mind-Blowing Design Templates.
        </span>
      </p>
      <p className="text-gray-600 text-base sm:text-lg mb-10">
        Speed Up Your Research Presentations With{' '}
        <span className="font-semibold italic">PosterPro™</span>.
      </p>
      <div className="flex flex-col gap-10">
        {members.map((member, index) => (
          <div
            key={index}
            className={twMerge(
              'flex flex-col lg:flex-row items-center md:justify-between bg-[#F5F5F5] shadow-md px-2 py-4 rounded-lg',
              index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
            )}
          >
            <Image
              src={member.image}
              alt={member.title}
              className="w-full lg:w-1/3 rounded-lg mb-4 lg:mb-0"
            />
            <div className="text-left lg:mx-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {member.title}
              </h2>
              <ul className="list-disc ml-6 text-gray-600 mb-4">
                {Object.values(member.quote).map((line, lineIndex) => (
                  <li key={lineIndex} className="mb-1">
                    {line}
                  </li>
                ))}
              </ul>
              <button className="px-4 py-2 bg-[#B7512C] text-white font-bold rounded-md hover:bg-orange-600">
                {member.package}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
