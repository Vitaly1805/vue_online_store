<template>
    <div class="v-catalog-item">
        <p>First item</p>
        <p>Price: 2000</p>
        <button>Bue</button>
    </div>
</template>
<script>
export default {
    name: "v-catalog-item"
}
</script>
<style lang="scss">
    .v-catalog-item {
        width: 200px;
        background: #cdcdcd;
        margin: 0 auto;
        padding: $padding;
    }
</style>