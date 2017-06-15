<template>	
	<div id="home">
		<div id="header">
			<header class="index_head">
		      <img src="../assets/images/index-banner.jpg" >
		    </header>
		</div>
		<NavView v-show="true"></NavView>
		<section>
	      <h3>精品展示</h3>
	      <ul class="product">
	      	<li v-for="item in arrList">
	      		<router-link to="/show">
		          <span><img :src="item.src" /></span>
		          <p>{{item.title}}</p>
		        </router-link>
	        </li>
	      </ul>
	    </section>
	    <section class="aboutjs">
	      <h3>公司简介</h3>
	      <div class="about">
	        <div class="about_img fl"><img src="../assets/images/about-img.jpg"></div>浙江东阳市东源红木家具有限公司成立于2011年，是一家专门生产、经营、销售红木家具的生产型企业，位于东阳市南马镇机械工业园，占地面积10余亩，现有职工100余人。2014年，该公司在国家工商总局注册了专有商标：东源红。
	      </div>
	    </section>
	</div>
</template>
<script>
import NavView from './Nav.vue'
export default {
	data(){
		return {
			arrList:[]
		}
	},
	components:{
	NavView
	},
	mounted(){
		this.fetchData();
	},
	methods:{
		fetchData(){
			var _this = this;
			this.$http.get('static/data/home.data').then(function(res){
				_this.arrList = res.data;
			}).catch(function(err){
				console.log(err);
			})
		}
	}
}
</script>
</script>