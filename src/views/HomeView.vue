<template>
	<div class="container">
		<h1 class="title">Vue 示例项目集合</h1>
		<div class="demo-grid">
			<router-link v-for="demo in demos" :key="demo.id" :to="demo.path" class="demo-card">
				<h2>{{ demo.title }}</h2>
				<p>{{ demo.description }}</p>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			demos: [
				{
					id: 1,
					title: '购物车示例',
					description: '简单购物车功能',
					path: '/cart',
				},
				{
					id: 2,
					title: '待办事项',
					description: 'to-do list',
					path: '/todo',
				},
			],
		}
	},
}
</script>

<style>
.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem;
}

.title {
	text-align: center;
	margin-bottom: 2rem;
}

.demo-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 2rem;
}

.demo-card {
	padding: 1.5rem;
	border: 3px solid #eee;
	border-radius: 8px;
	text-decoration: none;
	color: inherit;
	transition:
		transform 0.2s,
		box-shadow 0.2s;
}

.demo-card:hover {
	transform: translateY(-4px);
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.demo-card h2 {
	margin: 0 0 1rem 0;
}

.demo-card p {
	margin: 0;
	color: #666;
}
</style>
