import React, { useEffect, useState } from "react";

const Questiontimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [onTimeout, timeout]);

  //so here we are setting the time to deduct after timeout starts
  useEffect(() => {
    setInterval(
      () => setRemainingTime((prevRemainingTime) => prevRemainingTime - 100),
      100
    );
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
};

export default Questiontimer;
