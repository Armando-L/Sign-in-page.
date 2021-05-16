import { useState } from 'react';

function useToggle(initialval = false) {
  const [valState, setValState] = useState(initialval);
  const toggle = () => {
    setValState(!valState);
  };
  return [valState, toggle];
}
export default useToggle;