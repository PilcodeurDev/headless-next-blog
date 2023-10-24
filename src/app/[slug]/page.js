/**
 * The internal imports
 */
import getCategoryColor from '@/helpers/get-category-color'
import styles from './style.module.sass'
import fetchBlogs from '@/helpers/fetch-blogs'
import config from '../config'


const BlogDetails = async (props) => {
  const blogs = await fetchBlogs(`filters[slug][$eq]=${props.params.slug}`)

  if (blogs.data.length === 0) return null;
  const blog = blogs.data[0];



  return (
    <div className="container pb-80">
      <div className="row mb-50">
        <div className="col col_9">
          <div className={`h6 mb-20 ${getCategoryColor(blog.attributes.Category)}`}>{blog.attributes.Category}</div>
          <h2>{blog.attributes.Title}</h2>
        </div>
      </div>



      <div className="row mb-50">
        <div className="col col_9" dangerouslySetInnerHTML={{__html: blog.attributes.Content}}></div>
      </div>
    </div>
  )
}

// dynamic recorery before

export const generateStaticParams = async () => {
  const blogs = await fetchBlogs();

  return blogs.data.map((blog) => ({
    slug: blog.attributes.slug
  }));
}

export default BlogDetails
