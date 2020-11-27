import { readable, writable } from "svelte/store";

function createStore() {
  const account = readable("0xa28a2cf78a0fe18bb58465ec2f9021d1f5909ea7");

  return {
    account,
  };
}

export const store = createStore();
