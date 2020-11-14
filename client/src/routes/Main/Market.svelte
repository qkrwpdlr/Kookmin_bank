<script>
    import Element from "./MarketElement.svelte";
    import Markets from "./../../datas/markets";
    import { push } from "svelte-spa-router";
</script>

<style>
    .market__root {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        grid-auto-rows: minmax(120px, 120px);
        padding-top: 10px;
    }
</style>

<div class="market__root">
    {#each Markets as Market}
        <Element info={Market} on:click={() => push(`/market/${Market.id}`)} />
    {/each}
</div>
