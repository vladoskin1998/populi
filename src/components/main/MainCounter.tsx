import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from '@react-spring/web';

const MainCounter = ({ count }: { count: string }) => {
  const [currentCount, setCurrentCount] = useState(count);

  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(400px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    reset: true,
    config: config.stiff,
  });

  useEffect(() => {
    setCurrentCount(count);
  }, [count]);

  return (
    <div className='main__counter'>
      <animated.div style={props}>{currentCount}</animated.div>
    </div>
  );
};

export default MainCounter;