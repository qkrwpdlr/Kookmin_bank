<script>
  import marketContent from "./../../datas/marketContent";
  import Element from "./sellerElement.svelte";
  import Qr from "./QrModal.svelte";
  import { getQRUrl } from "./../../http/getQRUrl";
  import { getMenu } from "./../../http/getMenu";
import { onMount } from "svelte";
  export let params = {};
  let seller;
  let price = 0;
  let url = "";
  let content = []
  $: {
    const { id, sid } = params;
    seller = marketContent
      .find((e) => parseInt(e.id) === parseInt(id))
      .seller.find((s) => parseInt(s.sid) === parseInt(sid));
  }
  let isModal = false;
  const buy = async () => {
    if (isActive) return;
    url = await getQRUrl();
    isModal = true;
  };
  onMount(async ()=>{
    const {rows} = await getMenu()
    content = rows
  })
  $: isActive = price === 0;
</script>

<style>
  .seller__root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .seller_element__wrap {
    width: 90%;
    padding: 5%;
    height: 90%;
    overflow: scroll;
  }
  .seller__bottom {
    background-color: rgb(255, 188, 0);
    width: 100vw;
    color: white;
    font-size: 30px;
    bottom: 0;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .jello-vertical {
    -webkit-animation: jello-vertical 0.9s both;
    animation: jello-vertical 0.9s both;
  }
  @-webkit-keyframes jello-vertical {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    40% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    50% {
      -webkit-transform: scale3d(0.85, 1.15, 1);
      transform: scale3d(0.85, 1.15, 1);
    }
    65% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    75% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes jello-vertical {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    40% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    50% {
      -webkit-transform: scale3d(0.85, 1.15, 1);
      transform: scale3d(0.85, 1.15, 1);
    }
    65% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    75% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
</style>

<div class="seller__root">
  <div class="seller_element__wrap">
    {#each content as good}
      <Element
        info={good}
        on:change={({ detail }) => {
          price += detail.price;
        }} />
    {/each}
    <div>총계 : {price}</div>
  </div>
  <div
    on:click={buy}
    class="seller__bottom"
    style={isActive ? 'background-color: rgb(96,88,76)' : 'background-color: rgb(255, 188, 0);'}>
    <div>구매하기</div>
  </div>
</div>
{#if isModal}
  <Qr {url} />
{/if}
