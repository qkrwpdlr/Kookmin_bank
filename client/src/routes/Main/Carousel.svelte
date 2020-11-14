<script>
    import Element from "./CarouselElement.svelte";
    import { tweened } from "svelte/motion";
    import { elasticIn } from "svelte/easing";
    import { onMount } from "svelte";
    export let elements = [];
    const positionX = tweened(0, {
        duration: 1000,
        delay: 1000,
    });
    onMount(() => {
        animation();
    });
    const animation = async () => {
        for (let i = 1; i < elements.length; i++)
            await positionX.update((n) => n + 100);
        setTimeout(() => {
            positionX.update((n) => 0, { duration: 0, delay: 1000 });
            animation();
        }, 1000);
    };
    $: css = `transform: translate(-${$positionX}vw);will-change: transform;width:${
        elements.length * 100
    }vw`;
</script>

<style>
    .carousel__root {
        height: 30vh;
        display: flex;
        overflow-x: hidden;
    }
</style>

<div class="carousel__root" style={css}>
    {#each elements as element}
        <Element src={element} />
    {/each}
</div>
