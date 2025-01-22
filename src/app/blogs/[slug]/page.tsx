import { sanityClient } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { FaTag } from 'react-icons/fa';

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    mainImage{
      asset->{
        _id,
        url
      },
    },
    author -> {
      name,
      image
    },
    category -> {
      title
    },
    body
  }`;

  return sanityClient.fetch(query, { slug });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getPost(slug);

  if (!post) return <div>Post not found</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {post.mainImage?.asset?.url && (
          <img
            src={post.mainImage.asset.url || '/placeholder.svg'}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
        )}
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              {post.author?.image && (
                <img
                  src={urlFor(post.author.image).url() || ''}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}
              <span className="text-gray-600">
                {post.author?.name || 'Unknown Author'}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FaTag className="text-blue-500 text-lg" />
              <span className="text-gray-600">
                {post.category?.title || 'Unknown Category'}
              </span>
            </div>
          </div>
          <div className="prose max-w-none text-black">
            <PortableText value={post.body} />
          </div>
        </div>
      </article>
    </div>
  );
}
