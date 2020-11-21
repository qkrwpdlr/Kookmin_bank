import { readable, writable } from "svelte/store";

function createStore() {
  const account = readable("0xc79d9193feea2bd1d8027c88d43c78ee361d94f3");

  return {
    account,
  };
}

export const store = createStore();
