/**
 * The internal imports
 */
import Image from 'next/image'
import getCategoryColor from '@/helpers/get-category-color'
import styles from './style.module.sass'

const BlogDetails = () => (
  <div className="container pb-80">
    <div className="row mb-50">
      <div className="col col_9">
        <div className={`h6 mb-20 ${getCategoryColor('Product Reviews')}`}>{'Product Reviews'}</div>
        <h2>Class aptent taciti socio squad litoral torquent per conubia nostra</h2>
      </div>
    </div>

    <Image className={`${styles.featuredImage} mb-50`} src="/featured-image-1.jpg" alt='featured image' width="1280" height="387" />


    <div className="row mb-50">
      <div className="col col_9">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repudiandae molestias qui. Laudantium, in. Voluptatem ex magnam quo ipsa corporis velit officiis, vitae laboriosam, necessitatibus pariatur rerum sapiente molestiae alias quasi, dicta consequatur odit libero repellendus. Reiciendis porro facilis, modi, nesciunt asperiores corrupti nemo, eum fugit ab id et voluptas.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla accusamus optio quia et. Beatae, est voluptatibus distinctio totam commodi eius harum odit accusantium assumenda hic cumque rem voluptates suscipit nam autem eaque, eligendi, delectus minus corrupti voluptas dolores ducimus?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi inventore repellendus atque id esse sint, repudiandae vero facere illum ipsam, autem ratione distinctio a, voluptas quidem eum perferendis enim molestias!</p>
      </div>
    </div>
  </div>
)

export default BlogDetails
