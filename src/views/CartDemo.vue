<template>
	<div>
		<div id="app">
			<div id="shoppingcart">
				<header>
					<div class="grid-container">
						<div><input type="checkbox" name="" id="" v-model="all" /></div>
						<div>商品</div>
						<div>单价（元）</div>
						<div>数量</div>
						<div>小计（元）</div>
						<div>操作</div>
					</div>
				</header>
				<section>
					<div v-for="good in goods" :key="good.id" class="grid-container">
						<div><input type="checkbox" v-model="good.checked" id="" /></div>
						<div>{{ good.name }}</div>
						<div>{{ good.price }}</div>
						<div>
							<button @click="good.num > 0 ? good.num-- : ''">-</button>
							<input type="text" v-model="good.num" id="goodnum" />
							<button @click="good.num++">+</button>
						</div>
						<div>{{ good.num * good.price }}</div>
						<div>
							<button @click="deleteItem(good)">删除</button>
						</div>
					</div>
				</section>
				<footer>
					<div class="last">
						<div><button @click="delSel">删除选中商品</button></div>
						<div>共 {{ goods.length }} 件，选中 {{ checkedLength }} 件</div>
						<div>合计 {{ totalPrice }}</div>
						<div><button>去结算</button></div>
					</div>
				</footer>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue'

const goods = ref([
	{
		id: 1,
		name: 'Huawei Band',
		num: 1,
		price: 169,
		checked: true,
	},
	{
		id: 2,
		name: 'Sony Camera',
		num: 1,
		price: 163,
		checked: true,
	},
	{
		id: 3,
		name: 'Xiaomi Car',
		num: 1,
		price: 189,
		checked: false,
	},
	{
		id: 4,
		name: 'iPhone 16',
		num: 1,
		price: 1800,
		checked: true,
	},
])

function deleteItem(good) {
	if (window.confirm('delete?')) {
		goods.value = goods.value.filter((item) => item !== good)
	}
}

const totalPrice = computed(() => {
	let total = 0
	for (let item of goods.value) {
		if (item.checked) {
			total += item.num * item.price
		}
	}
	return total
})

const all = computed({
	get() {
		return goods.value.every((item) => {
			return item.checked
		})
	},
	set(newVal) {
		goods.value.forEach((item) => {
			item.checked = newVal
		})
	},
})
function delSel() {
	goods.value = goods.value.filter((item) => !item.checked)
}

const checkedLength = computed(() => {
	return goods.value.filter((item) => item.checked).length
})
</script>

<style lang="scss" scoped>
#app {
	#shoppingcart {
		header {
			font-weight: bold;
			border-bottom: 3px solid #ccc;
		}
		.grid-container {
			display: grid;
			grid-template-columns: repeat(6, 1fr);
			justify-items: center;
			padding: 10px;
		}
		section {
			#goodnum {
				width: 70px;
				box-sizing: border-box;
				margin: 0 10px;
				text-align: center;
			}
		}
		footer {
			.last {
				display: flex;
				gap: 30px;
				padding: 10px;
				border-top: 3px solid #ccc;
			}
		}
	}
}
</style>
