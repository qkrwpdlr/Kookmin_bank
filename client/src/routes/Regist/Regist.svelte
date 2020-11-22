<script>
  import { postMenu } from "./../../http/postMenu";
  let unit = 0;
  let title = "";
  let price = 0;
  const upload = () => {
    postMenu(title, price);
  };
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
    width: 40px;
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
        {#if unit === 0}g/원{:else}개/원{/if}
      </div>
    </div>
    <div class="up" on:click={upload}>올리기</div>
  </div>
</div>
