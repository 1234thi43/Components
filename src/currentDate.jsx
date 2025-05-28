import { useState, useEffect } from "react";

const getTime = (date) => date.toISOString().substring(11, 19);

export const CurrentDateComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>{getTime(currentDate)}</div>;
};

