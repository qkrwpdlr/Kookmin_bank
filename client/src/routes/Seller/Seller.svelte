<script>
    import marketContent from "./../../datas/marketContent";
    export let params = {};
    let seller;
    $: {
        const { id, sid } = params;
        seller = marketContent
            .find((e) => parseInt(e.id) === parseInt(id))
            .seller.find((s) => parseInt(s.sid) === parseInt(sid));
    }
</script>

{#each seller.content as good}
    <div>{good.title}</div>
{/each}
