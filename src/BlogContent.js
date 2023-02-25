import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Loader from "./Loader";

const BlogContent = () => {
  const { id } = useParams();
  const { data: blog, isLoading } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );

  console.log(blog);

  return (
    <main className="blog__content">
      {isLoading && <Loader />}
      {blog && (
        <div className="blog__content__wrapper">
          <h1>{blog.title}</h1>
          <figure>
            <img src={blog.poster} alt={blog.title} />
            <h5>by {blog.author}</h5>
          </figure>
          <article>
            {blog.body.map((item) => (
              <p key={item.slice(0, 3)}>{item}</p>
            ))}
          </article>
        </div>
      )}
    </main>
  );
};

export default BlogContent;
