/**
 * The internal imports
 */
import Image from 'next/image'

/**
 * The internal imports
 */
import Button, { IconTypes } from '../button/button'
import styles from "./card.module.sass"


const Card = () => (
    <div className={styles.card}>
      <div className={styles.card_imageWrap}>
        <div className={styles.card_image}>
          <Image src="/thumb-featured-article.jpg" alt="thumbrail" fill={true} />
        </div>
      </div>
        <div className={styles.card_content}>
          <div className={`${styles.card_label} h6 mb-10 orange`} >Product Reviews</div>
          <div className={`${styles.card_title} h3 mb-20`}>
            Class aptent taciti socio squad litoral torquent per conubia nostra
          </div>
          <p className={`${styles.card_summary} fw-600`}>
            Mauris Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, enim.
          </p>
          <Button href="#" icon={IconTypes.ARROW_RIGHT}>Read More</Button>
        </div>
    </div>
  )
export default Card
