import PropTypes from 'prop-types';
import Button from '../Button/Button';
import StatusBadge from '../StatusBadge/StatusBadge';
import styles from './FieldCard.module.css';

function FieldCard({ title, crop, moisture, status = 'normal', onDetails }) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h4 className={styles.title}>{title}</h4>
        <StatusBadge status={status} />
      </header>

      <dl className={styles.meta}>
        <div className={styles.row}>
          <dt>Crop:</dt>
          <dd>{crop}</dd>
        </div>
        <div className={styles.row}>
          <dt>Moisture:</dt>
          <dd>{moisture}</dd>
        </div>
      </dl>

      <Button variant="primary" onClick={onDetails}>
        Details
      </Button>
    </article>
  );
}

FieldCard.propTypes = {
  title: PropTypes.string.isRequired,
  crop: PropTypes.string.isRequired,
  moisture: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['normal', 'warning', 'critical']),
  onDetails: PropTypes.func,
};

export default FieldCard;