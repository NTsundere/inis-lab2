import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './InputField.module.css';

function InputField({
  label,
  placeholder = '',
  type = 'text',
  hasError = false,
  onChange,
}) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  const wrapperClass = [styles.wrapper, hasError ? styles.error : '']
    .filter(Boolean)
    .join(' ');

  return (
    <label className={wrapperClass}>
      {label && <span className={styles.label}>{label}</span>}
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  hasError: PropTypes.bool,
  onChange: PropTypes.func,
};

export default InputField;