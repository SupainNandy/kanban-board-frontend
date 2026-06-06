import { create } from "zustand";

import API from "../api/axios";

const useTaskStore =
  create((set) => ({
    tasks: [],

    fetchTasks:
      async (
        boardId
      ) => {
        try {
          const res =
            await API.get(
              `/tasks/${boardId}`
            );

          set({
            tasks:
              res.data,
          });
        } catch (error) {
          console.log(
            error
          );
        }
      },

    createTask:
      async (
        taskData
      ) => {
        try {
          const res =
            await API.post(
              "/tasks",
              taskData
            );

          set(
            (
              state
            ) => ({
              tasks:
                [
                  ...state.tasks,
                  res.data,
                ],
            })
          );
        } catch (error) {
          console.log(
            error
          );
        }
      },

    deleteTask:
      async (
        taskId
      ) => {
        try {
          await API.delete(
            `/tasks/${taskId}`
          );

          set(
            (
              state
            ) => ({
              tasks:
                state.tasks.filter(
                  (
                    task
                  ) =>
                    task._id !==
                    taskId
                ),
            })
          );
        } catch (error) {
          console.log(
            error
          );
        }
      },

    updateTask:
      async (
        taskId,
        data
      ) => {
        try {
          const res =
            await API.put(
              `/tasks/${taskId}`,
              data
            );

          set(
            (
              state
            ) => ({
              tasks:
                state.tasks.map(
                  (
                    task
                  ) =>
                    task._id ===
                      taskId
                      ? res.data
                      : task
                ),
            })
          );
        } catch (error) {
          console.log(
            error
          );
        }
      },
  }));

export default useTaskStore;