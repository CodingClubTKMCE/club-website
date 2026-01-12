import { writable } from "svelte/store";

function createRoleStore() {
  const { subscribe, set } = writable<string | null>(null);

  return {
    subscribe,
    init() {
      if (typeof localStorage !== "undefined") {
        const saved = localStorage.getItem("role");
        set(saved);
      }
    },
    login(role: string) {
      localStorage.setItem("role", role);
      set(role);
    },
    logout() {
      localStorage.removeItem("role");
      set(null);
    },
  };
}

export const role = createRoleStore();
