import { useProgressBar } from "../../../../hooks/use-progress-bar.hook.tsx";

export const ProgressBarDisplay = () => {
  const { progress } = useProgressBar();

  return (
    <div>
      <div className="h-10 w-full bg-neutral-200 dark:bg-neutral-600">
        <div
          className="h-10 bg-green-400 transition"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span className="text-sm text-gray-500">Total progress: {progress}%</span>
    </div>
  );
};
