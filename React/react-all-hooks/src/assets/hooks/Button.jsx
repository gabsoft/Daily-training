import React, { forwardRef, useImperativeHandle, useState } from 'react';

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <span>Button From Child</span>
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default Button;
