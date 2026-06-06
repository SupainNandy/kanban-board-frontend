import { create } from "zustand";

import API from "../api/axios";

const useBoardStore =
  create((set) => ({
    boards: [],

    fetchBoards:
      async () => {
        try {
          const res =
            await API.get(
              "/boards"
            );

          set({
            boards:
              res.data,
          });
        } catch (error) {
          console.log(
            error
          );
        }
      },

    createBoard:
      async (
        title
      ) => {
        try {
          await API.post(
            "/boards",
            {
              title,
            }
          );
        } catch (error) {
          console.log(
            error
          );
        }
      },

    deleteBoard:
      async (id) => {
        try {
          await API.delete(
            `/boards/${id}`
          );
        } catch (error) {
          console.log(
            error
          );
        }
      },
  }));

export default useBoardStore;