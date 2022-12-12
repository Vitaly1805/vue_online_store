<template>
    <div class="v-main-wrapper">
        <p>{{title}}</p>
        <vCatalog />
				<span class="button" v-on:click="printHello">Нажми</span>
				<input type="text" v-model="title">
    </div>
</template>

<script>
import vCatalog from './v-catolog.vue'

export default {
    name: 'v-main-wrapper',
    data() {
        return {
            title: 'Hello niggers:)'
        }
    },
    components: {
			vCatalog
    },
		methods: {
			printHello() {
				alert('Зачем нажал?')
			}
		}
}
</script>

<style lang="scss">
body {
    
}

.button {
	display: inline-block;
	padding: 10px 20px;
	font-size: 20px;
	text-align: center;
	background: #cdcdcd;
	margin: 20px 0;
	cursor: pointer;
}
</style>