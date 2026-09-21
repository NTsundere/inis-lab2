import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Accordion.module.css';

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.item}>
      <button
        type="button"
        className={styles.header}
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <span className={styles.title}>{title}</span>
        <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
      </button>

      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  defaultOpen: PropTypes.bool,
};

export default Accordion;