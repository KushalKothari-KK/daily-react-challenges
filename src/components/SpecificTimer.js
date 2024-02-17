//Build a timer that counts down from a specified time.

import { useEffect, useState } from "react";

const SpecificTimer = () => {
  const [time, setTime] = useState(60);
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  return <div>Time Left: {time} Seconds</div>;
};

export default SpecificTimer;
