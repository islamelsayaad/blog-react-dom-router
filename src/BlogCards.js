import { Link } from "react-router-dom";

const BlogCards = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <div className="blog-item" key={blog.id}>
          <Link to={`blogs/${blog.id}`} className="blog-item-wrapper">
            <div className="item-thumbnail">
              <img src={blog.thumbnail} alt={blog.title} />
            </div>
            <div className="item-details">
              <span>{blog.title}</span>
              <h5>by {blog.author}</h5>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default BlogCards;
