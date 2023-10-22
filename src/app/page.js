/**
 * The internal imports
 */
import Card from "../components/card/card";
import { IconTypes } from "@/components/button/button"
import fetchBlogs from "@/helpers/fetch-blogs";
import config from "@/config";

const Home = async () => {
  const [featuredBlogs, blogs] = await Promise.all([
    await fetchBlogs('filters[IsFeatured][$eq]=true'),
    await fetchBlogs('filters[IsFeatured][$eq]=false')
  ])

  return (
    <div className="container pb-80">
      {featuredBlogs.data.map(featuredBlog => (
        <Card
          key={featuredBlog.id}
          label={featuredBlog.attributes.Category}
          title={featuredBlog.attributes.Title}
          summary={featuredBlog.attributes.Summary}
          imgSrc={`${config.api}${featuredBlog.attributes.FeaturedImage.data.attributes.url}`}
          imgAlt="Featured Image"
          href={`/${featuredBlog.attributes.slug}`}
          btnIcon={ IconTypes.ARROW_RIGHT }
          // btnLabel={}
          className="mb-30"
        />
      ))}
      <div className="row">
        {blogs.data.map(blog => (
        <div className="col col_4 m-mw-100" key={blog.id}>
          <Card
            label={blog.attributes.Category}
            title={blog.attributes.Title}
            summary={blog.attributes.Summary}
            imgSrc={`${config.api}${blog.attributes.thumbnail.data.attributes.url}`}
            imgAlt="Thumbnail"
            href={`/${blog.attributes.slug}`}
            btnIcon={ IconTypes.ARROW_RIGHT }
            // btnLabel={}
            className="mb-30"
          />
        </div>
        ))}
      </div>
    </div>
  )
};
export default Home;
