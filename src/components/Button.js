import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ name }) {
  return (
    <button>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

Button.defaultProps = {
  name: '',
};
