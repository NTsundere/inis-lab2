import PropTypes from 'prop-types';
import styles from './StatusBadge.module.css';

function StatusBadge({ status = 'normal' }) {
  const labels = {
    normal: 'Normal',
    warning: 'Warning',
    critical: 'Critical',
  };

  return (
    <span className={`${styles.badge} ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

StatusBadge.propTypes = {
  status: PropTypes.oneOf(['normal', 'warning', 'critical']),
};

export default StatusBadge;