import Filter from "./Filter";
import BlogCard from "./BlogCards";
import Loader from "./Loader";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isLoading } = useFetch("http://localhost:8000/blogs");

  return (
    <>
      {isLoading && <Loader />}
      <Filter />
      <main className="content">{blogs && <BlogCard blogs={blogs} />}</main>
    </>
  );
};

export default Home;
