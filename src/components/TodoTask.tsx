import { ITask } from "../common/interfaces";
interface TodoTaskProps {
  task: ITask;
  completeTask: (taskNameToDelete: string) => void;
}

export default function TodoTask({ task, completeTask }: TodoTaskProps) {
  return (
    <section className="pb-4">
      <section className="flex">
        <section>
          <button
            className="btn5"
            onClick={() => {
              completeTask(task.taskName);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </section>
        <section>
          <h1 className="pl-2">{task.taskName}</h1>
          <h2 className="pl-2 text-gray-400">{task.description}</h2>
        </section>
        <section></section>
      </section>
    </section>
  );
}
