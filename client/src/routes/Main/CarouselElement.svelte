<script>
  export let src =
    "https://mblogthumb-phinf.pstatic.net/MjAxODA1MjhfMTA0/MDAxNTI3NDg3MTczOTY5.C2eXPMwTXPN7mN6rhXpLrbLAu36fyR7JDr3Ym8URGl8g.97dxz-n9zjbzgv8KbhDwrICDNbNierqWueC0aRsfgjIg.JPEG.ehfkdl8989/KakaoTalk_Moim_4UjmLsR1AohJhEmSqqNZkX7uHKU0kp.jpg?type=w800";
  $: css = `background-image: url(${src});`;
</script>

<style>
  .carousel__element {
    width: 100vw;
    height: 30vh;
    background-size: cover;
    background-position: 50% 50%;
  }
</style>

<div class="carousel__element" style={css} />