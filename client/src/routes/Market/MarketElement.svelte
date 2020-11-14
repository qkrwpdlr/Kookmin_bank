<script>
    export let info;
</script>

<style>
    .market_element__root {
        width: 80%;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 10px;
        display: flex;
        border-bottom: 1px solid rgb(205, 205, 205);
    }
    .market_element__root > img {
        width: 70px;
        height: 70px;
        border-radius: 4px;
    }
    .market_element__root > div {
        margin-left: 10px;
        font-size: 20px;
    }
    .market_element__info{
        font-size: 15px;
        margin-top: 5px;
    }
</style>

<div class="market_element__root">
    <img src={info.src} alt="" />
    <div>
        {info.title}
        <div class="market_element__info">{info.info}</div>
    </div>
</div>
