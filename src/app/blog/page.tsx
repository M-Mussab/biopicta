import client, { urlFor } from "@/sanity/";

export async function getStaticProps() {
    const query = `*[_type == "post"]{
        _id,
        title,
        slug,
        mainImage,
        publishedAt,
        "authorName": author->name,
        "authorImage": author->image,
        categories[]->{
            title
        },
        body
    }`;

    const posts = await client.fetch(query);

    return {
        props: {
            posts,
        },
    };
}

export default function Blog({ posts }) {
    return (
        <div>
            <h1>Blogs</h1>
            {posts.map((post) => (
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <img src={urlFor(post.mainImage).url()} alt={post.title} />
                    <p>{post.body}</p>
                    <p>By: {post.authorName}</p>
                </div>
            ))}
        </div>
    );
}
