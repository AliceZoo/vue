<template>
	<div id="show">
		<HeadView></HeadView>
		<section id="product">
		<h2><img src="../assets/images/cp.jpg"></h2>
		<div class="show">
			<ul>
				<li v-for="item in arrList">
					<router-link to="/show">
						<span><img :src="item.src" /></span>
						<p>{{item.title}}</p>
					</router-link>
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
			this.$http.get('static/data/show.data').then(function(res){
				_this.arrList = res.data;
			}).catch(function(err){
				console.log(err);
			})
		}
	}
}
</script>