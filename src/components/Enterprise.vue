<template>
	<div id="enterprise1">
	<HeadView></HeadView>
		<section id="product">
		<h2><img src="../assets/images/qyfc.jpg"></h2>
		<div class="show_fc">
			<ul>
				<li v-for="item in arrList">
					<img :src="item.src" />
				</li>
			</ul>
		</div>
	</section>
	</div>
</template>
<script>
import HeadView from './Head.vue'
export default {
	data(){
		return {
			arrList:[]
		}
	},
	components:{
		HeadView
	},
	mounted(){
		this.fetchData();
	},
	methods:{
		fetchData(){
			var _this = this;
			this.$http.get('static/data/enterprise.data').then(function(res){
				_this.arrList = res.data;
			}).catch(function(err){
				console.log(err);
			})
		}
	}
}
</script>