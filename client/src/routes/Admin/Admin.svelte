<script>
  import { BrowserQRCodeReader } from "@zxing/library";
  import lottie from "lottie-web";
  import { onMount } from "svelte";
  import { push } from "svelte-spa-router";
  onMount(() => {
    lottie.loadAnimation({
      container: mainElem, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: `assets/lotties/mart.json`, // the path to the animation json
    });
  });
  let isVideo = false;
  let isFind = false;
  let element;
  let mainElem;
  const click = async () => {
    const codeReader = new BrowserQRCodeReader();
    isVideo = true;
    codeReader
      .decodeOnceFromVideoDevice(undefined, "video")
      .then((result) => {
        fetch(`${result.text}`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        });
        isFind = true;
        console.log(result.text);
      })
      .catch((err) => console.error(err));
  };
  const backFalse = () => {
    isVideo = false;
    isFind = false;
  };
  $: if (isFind) {
    lottie.loadAnimation({
      container: element, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: `assets/lotties/pay.json`, // the path to the animation json
    });
  }
</script>

<style>
  .pay {
    width: 100vw;
    height: 50vh;
    background-color: rgb(253, 185, 19);
  }
  .video__wrap {
    width: 100vw;
    height: 100vh;
    background-color: rgb(253, 185, 19);
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    display: flex;
    flex-direction: column;
  }
  #video {
    width: 100%;
  }
  .video__info {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .success__message {
    width: 80vw;
    height: 30vh;
    top: 10vh;
    left: 10vw;
    position: absolute;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
  }
  .bottom__button {
    position: absolute;
    bottom: 10vh;
    width: 80vw;
    left: 10vw;
    display: flex;
    justify-content: space-around;
    z-index: 10001;
  }
  .bottom__button div {
    background-color: white;
    padding: 10px;
    color: black;
    border-radius: 6px;
  }
  .shake-horizontal {
    -webkit-animation: shake-horizontal 2s
      cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both;
    animation: shake-horizontal 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      infinite both;
  }
  /* ----------------------------------------------
 * Generated by Animista on 2020-11-22 8:28:58
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
 * ----------------------------------------
 * animation shake-horizontal
 * ----------------------------------------
 */
  @-webkit-keyframes shake-horizontal {
    0%,
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70% {
      -webkit-transform: translateX(-10px);
      transform: translateX(-10px);
    }
    20%,
    40%,
    60% {
      -webkit-transform: translateX(10px);
      transform: translateX(10px);
    }
    80% {
      -webkit-transform: translateX(8px);
      transform: translateX(8px);
    }
    90% {
      -webkit-transform: translateX(-8px);
      transform: translateX(-8px);
    }
  }
  @keyframes shake-horizontal {
    0%,
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70% {
      -webkit-transform: translateX(-10px);
      transform: translateX(-10px);
    }
    20%,
    40%,
    60% {
      -webkit-transform: translateX(10px);
      transform: translateX(10px);
    }
    80% {
      -webkit-transform: translateX(8px);
      transform: translateX(8px);
    }
    90% {
      -webkit-transform: translateX(-8px);
      transform: translateX(-8px);
    }
  }
  .button__root {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .button__root div {
    padding: 15px;
    border-radius: 3px;
    background-color: white;
    border: 1px solid black;
  }
</style>

{#if isVideo}
  <div class="video__wrap" bind:this={element}>
    {#if isFind === false}
      <video id="video" />
      <div class="video__info">
        <div>QRCode를 찾는중입니다...</div>
        <div>QR 코드를 중앙에 오도록 해주세요</div>
      </div>
    {:else}
      <div class="success__message shake-horizontal">결제가 완료되었습니다</div>
      <div class="bottom__button">
        <div on:click={() => backFalse()}>뒤로가기
        </div>
      </div>
    {/if}
  </div>
{:else}
  <div class="pay" bind:this={mainElem} />
  <div class="pay button__root">
    <div on:click={click}>정산하기</div>
    <div
      on:click={() => {
        push('/Regist');
      }}>
      등록하기
    </div>
  </div>
{/if}
