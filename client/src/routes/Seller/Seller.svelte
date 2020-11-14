<script>
    import marketContent from "./../../datas/marketContent";
    import Element from "./sellerElement.svelte";
    export let params = {};
    let seller;
    let price = 0;
    $: {
        const { id, sid } = params;
        seller = marketContent
            .find((e) => parseInt(e.id) === parseInt(id))
            .seller.find((s) => parseInt(s.sid) === parseInt(sid));
    }
</script>

<style>
    .seller__root {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

<div class="seller__root">
    {#each seller.content as good}
        <Element
            info={good}
            on:change={({ detail }) => {
                price += detail.price;
            }} />
    {/each}
    <div>총계 : {price}</div>
</div>
