/**
 * The internal imports
 */
import Card from "../components/card/card";
import { IconTypes } from "@/components/button/button"
import config from "@/config";

const fetchblogs = async (params) => {
  const init = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`
    }
  }
  const request = await fetch(`${config.api}/api/blogs?populate=*&${params}`, init);
  const response = await request.json();

  return response;
}

const Home = async () => {
  const [featuredBlogs, blogs] = await Promise.all([
    await fetchblogs('filters[IsFeatured][$eq]=true'),
    await fetchblogs('filters[IsFeatured][$eq]=false')
  ])
  console.log(featuredBlogs.data);
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
        <div className="col col_4 m-mw-100">
          <Card
            label="Opinions"
            title="Class aptent taciti socio squad litoral torquent per conubia nostra"
            summary="Mauris Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, enim."
            href="#"
            btnIcon={ IconTypes.ARROW_RIGHT }
            // btnLabel={}
            className="mb-30"
          />
        </div>
        <div className="col col_4 m-mw-100">
          <Card
            label="Product Reviews"
            title="Class aptent taciti socio squad litoral torquent per conubia nostra"
            summary="Mauris Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, enim."
            href="#"
            btnIcon={ IconTypes.ARROW_RIGHT }
            // btnLabel={}
            className="mb-30"
          />
        </div>
        <div className="col col_4 m-mw-100">
          <Card
            label="Travels Guides"
            title="Class aptent taciti socio squad litoral torquent per conubia nostra"
            summary="Mauris Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, enim."
            href="#"
            btnIcon={ IconTypes.ARROW_RIGHT }
            // btnLabel={}
            className="mb-30"
          />
        </div>
      </div>
    </div>
  )
};
export default Home;
