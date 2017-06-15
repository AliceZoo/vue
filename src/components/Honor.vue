<template>
	<div id="honor1">
	<HeadView></HeadView>
		<section id="honor">
		<h2><img src="../assets/images/ry.jpg"></h2>
		<div class="show_ry">
			<ul>
				<li v-for="item in arrList">
					<img :src="item.src" />
				</li>
			</ul>
			<p><img src="../assets/images/ry3.jpg" /></p>
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
			this.$http.get('static/data/honor.data').then(function(res){
				_this.arrList = res.data;
			}).catch(function(err){
				console.log(err);
			})
		}
	}
}
</script>