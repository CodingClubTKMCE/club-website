// src/lib/stores/auth.ts
import { writable } from "svelte/store";

function createAuthStore() {
  const { subscribe, set } = writable<string | null>(null);

  return {
    subscribe,
    init() {
      if (typeof localStorage !== "undefined") {
        const saved = localStorage.getItem("token");
        set(saved);
      }
    },
    login(token: string) {
      localStorage.setItem("token", token);
      set(token);
    },
    logout() {
      localStorage.removeItem("token");
      set(null);
    },
  };
}

export const auth = createAuthStore();
