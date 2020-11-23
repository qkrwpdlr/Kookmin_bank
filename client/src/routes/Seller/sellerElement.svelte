<script>
  import { createEventDispatcher } from "svelte";
  import { tweened } from "svelte/motion";
  import { valid } from "./../../http/getVarified";
  const dispatch = new createEventDispatcher();
  let count = 0;
  export let info;
  let step = 0;
  const angle = tweened(0, {
    duration: 500,
  });
  const increase = () => {
    count += 1;
    dispatch("change", {
      price: info.price,
    });
  };
  const decrease = () => {
    if (count <= 0) return;
    count -= 1;
    dispatch("change", {
      price: -info.price,
    });
  };
  let isDone = false;
  let rotate = 0;
</script>

<style>
  .count__root {
    width: 140px;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .count__root div {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .count__price {
    width: 60px;
  }

  .element__root {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .count__unit {
    margin-left: 5px;
    font-size: 0.8em;
  }
  .button:active {
    background-color: rgb(216, 216, 216);
    transition: background-color 0.2s;
  }
  .button {
    transition: background-color 0.2s;
    border-radius: 3px;
  }
  .key {
    width: 16px;
    margin-right: 10px;
  }
  .element__price_info {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
</style>

<div class="element__root">
  <div class="element__price_info">
    {#if step === 0}
      <img
        alt=""
        src="/assets/icon/key.svg"
        class="key"
        style={`transform: rotate(${$angle}deg);will-change: transform;`}
        on:click={async () => {
          valid(info.hashText).then(async ({ result }) => {
            if (info.name === JSON.parse(result).title && JSON.parse(result).price === info.price) {
              await angle.set(1200);
              step = 2;
            } else {
              await angle.set(1200);
              step = 3;
              return;
            }
          });
        }} />
    {:else if step === 1}
      <img src="/assets/icon/key.svg" alt="" class="key" />
    {:else if step === 2}
      <img src="/assets/icon/locked.svg" alt="" class="key" />
    {:else if step === 3}
      <img src="/assets/icon/unlock.svg" alt="" class="key" />
    {/if}
    <span>
      {info.name}
      :
      {info.price}
      /
      {#if info.unit === 0}개{:else}100g{/if}
    </span>
  </div>
  <div class="count__root">
    <div class="button" on:click={increase}>+</div>
    <div class="count__price">
      <span>{#if info.unit === 0}{count}{:else}{count * 100}{/if}</span><span
        class="count__unit">
        {#if info.unit === 0}개{:else}g{/if}
      </span>
    </div>
    <div class="button" on:click={decrease}>-</div>
  </div>
</div>
