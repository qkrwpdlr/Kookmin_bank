<script>
  import { postMenu } from "./../../http/postMenu";
  import { fly } from "svelte/transition";
  let unit = 0;
  let title = "";
  let price = 0;
  let isToast = false;
  const upload = () => {
    isToast = true;
    postMenu(title, price);
  };
  $: if (isToast) {
    setTimeout(() => {
      isToast = false;
    }, 1000);
  }
</script>

<style>
  .regist__root {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .price {
    margin-top: 10%;
    height: 30%;
    display: flex;
    flex-direction: column;
    padding-left: 10%;
    justify-content: space-around;
  }
  .goods__price input {
    width: calc(50% - 50px);
  }
  .money {
    display: inline-block;
    height: 20px;
    width: 60px;
    padding: 5px;
  }
  .up {
    width: 90%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: rgb(255, 188, 0);
  }
  .toast__message {
    width: 80vw;
    background-color: rgba(100, 91, 76);
    opacity: 0.3;
    color: white;
    margin-left: 10vw;
    margin-right: 10vw;
    margin-bottom: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    position: absolute;
    bottom: 0;
  }
</style>

<div class="regist__root">
  <div class="price">
    <div>상품 이름 : <input type="text" bind:value={title} /></div>
    <div class="goods__price">
      상품 가격 :
      <input type="number" bind:value={price} />
      <div
        class="money"
        on:click={() => {
          unit === 0 ? (unit = 1) : (unit = 0);
        }}>
        {#if unit === 0}100g/원{:else}개/원{/if}
      </div>
    </div>
    <div class="up" on:click={upload}>올리기</div>
  </div>
  {#if isToast}
    <div class="toast__message" transition:fly>등록 되었습니다</div>
  {/if}
</div>
