import config from "@/config";

const fetchBlogs = async (params) => {
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

export default fetchBlogs;
