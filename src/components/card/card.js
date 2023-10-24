/**
 * The internal imports
 */


/**
 * The internal imports
 */
import Button from '../button/button'
import styles from "./card.module.sass"
import ConditionalRenderer from '../conditional-renderer'
import getCategoryColor from '@/helpers/get-category-color'


const Card = (props) => (
  <div className={`${styles.card_wrap} ${props.className || ''}`}>
    <div className={styles.card}>
      <div className={styles.card_imageWrap}>
        <div className={styles.card_image}>

        </div>
      </div>
        <div className={styles.card_content}>
          <ConditionalRenderer condition={props.label}>
            <div className={`${styles.card_label} h6 mb-10 ${getCategoryColor(props.label)}`}>{props.label}</div>
          </ConditionalRenderer>
          <ConditionalRenderer condition={props.title}>
            <div className={`${styles.card_title} h3 mb-20`}>{props.title}</div>
          </ConditionalRenderer>
          <ConditionalRenderer condition={props.summary}>
            <p className={`${styles.card_summary} fw-600`}>{props.summary}</p>
          </ConditionalRenderer>
          <Button href={props.href} icon={props.btnIcon}>{props.btnLabel || 'En Savoir Plus'}</Button>
        </div>
    </div>
  </div>
  )
export default Card
