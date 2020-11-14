<script>
    import Router from "svelte-spa-router";
    import routes from "./routes";
</script>

<style scoped>
    #root {
        width: 100vw;
        height: 100vh;
    }
    :global(body) {
        margin: 0;
        padding: 0;
    }
    @font-face {
        font-family: "WandohopeB";
        src: url("/assets/font/WandohopeB.woff") format("woff");
        font-weight: normal;
        font-style: normal;
    }
    * {
        font-family: "WandohopeB";
    }
</style>

<div id="root">
    <Router {routes} />
</div>
