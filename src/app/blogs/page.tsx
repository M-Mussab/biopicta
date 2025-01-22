import { urlFor } from "@/sanity/lib/image";
import { sanityClient } from "../../sanity/lib/client";
import { FaTag } from "react-icons/fa"; // Import the desired icon from react-icons

const fetchData = async () => {
  const query = `*[_type == "post"]{
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

  try {
    const data = await sanityClient.fetch(query);
    console.log(data.categories);
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

const Blog = async () => {
  const posts = await fetchData();

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post:any) => (
          <a
            href="#"
            key={post._id}
            className="group bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
          >
            {post.mainImage?.asset?.url && (
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                className="h-56 w-full object-cover group-hover:opacity-90 transition-opacity"
              />
            )}
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">

                {post.author?.image && (
                  <img
                    src={urlFor( post.author.image).url() || ""}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                <span className="text-gray-600">{post.author?.name || "Unknown Author"}</span>
              </div>

<div className="flex items-center gap-3">
  {/* Category Icon */}
  <FaTag className="text-blue-500 text-lg" />

  {/* Category Name */}
  <span className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
    {post.category?.title || "Unknown Category"}
  </span>
</div>

              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              

            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog;
