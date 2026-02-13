import { create } from "zustand";

export const useStore = create((set) => ({
  elements: [],

  addNote: (text) =>
    set((state) => ({
      elements: [...state.elements, { text, id: Math.random().toString() }],
    })),

  deleteTask: (id) =>
    set((state) => ({
      elements: state.elements.filter((note) => note.id !== id),
    })),
}));
