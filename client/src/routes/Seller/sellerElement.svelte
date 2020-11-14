<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = new createEventDispatcher();
    let count = 0;
    export let info;
    const increase = () => {
        count += 1;
        dispatch("change", {
            price: info.price,
        });
    };
    const decrease = () => {
        if (count <= 0) return;
        count -= 1;
        dispatch("change", {
            price: -info.price,
        });
    };
</script>

<style>
    .count__root {
        width: 140px;
        height: 40px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .count__root div {
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .count__price {
        width: 60px;
    }

    .element__root {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .count__unit {
        margin-left: 5px;
        font-size: 0.8em;
    }
    .button:active {
        background-color: rgb(216, 216, 216);
        transition: background-color 0.2s;
    }
    .button {
        transition: background-color 0.2s;
        border-radius: 3px;
    }
</style>

<div class="element__root">
    <div>
        {info.title}
        :
        {info.price}
        /
        {#if info.unit === 0}개{:else}100g{/if}
    </div>
    <div class="count__root">
        <div class="button" on:click={increase}>+</div>
        <div class="count__price">
            <span>{#if info.unit === 0}
                    {count}
                {:else}{count * 100}{/if}</span><span class="count__unit">
                {#if info.unit === 0}개{:else}g{/if}
            </span>
        </div>
        <div class="button" on:click={decrease}>-</div>
    </div>
</div>
