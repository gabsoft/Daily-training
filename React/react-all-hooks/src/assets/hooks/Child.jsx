import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function Child({ returnComment }) {
  useEffect(() => {
  }, [returnComment]);

  return <div>{returnComment('Galego')}</div>;
}

Child.propTypes = {
  returnComment: PropTypes.func.isRequired,
};

export default Child;
