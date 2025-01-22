import { sanityClient } from "../../sanity/lib/client";

const fetchData = async ()=>{
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
        body
      }`;
  
      // Fetch posts from Sanity

        try {
          const data = await sanityClient.fetch(query);
           return data
        } catch (error) {
          console.error("Error fetching posts:", error);
        }

}

const Blog = async () => {
const posts = await fetchData()


 

  return (
    <div className="bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post:any) => (
          <div
            key={post._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {post.mainImage?.asset?.url && (
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600">
                {post.body?.[0]?.children?.[0]?.text || "No description"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

