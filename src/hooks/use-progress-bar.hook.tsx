import { useEffect, useState } from "react";

export const useProgressBar = () => {
  const [progressState, setProgressState] = useState(0);

  useEffect(() => {
    const intervalStep = 25;
    const intervalMax = 100;

    const intervalId = setInterval(() => {
      setProgressState((state) => {
        if (state + intervalStep > intervalMax) {
          return state;
        }

        return state + intervalStep;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return { progress: progressState };
};
