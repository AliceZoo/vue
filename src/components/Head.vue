<template>
	<div id="head">
		<header class="about_head">
			<img id="menu_img" class="menu_img fr" src="../assets/images/menu.png" @click='a=true'>
			<div id="menu" class="menu" v-show="a">
				<ul>
					<router-link to="/home" tag="li">
						<a href="javascript:;">首页</a>
			        </router-link>
					<router-link to="/about" tag="li">
						<a href="javascript:;">关于我们</a>
			        </router-link>
					<router-link to="/show" tag="li">
						<a href="javascript:;">产品展示</a>
			        </router-link>
					<router-link to="/enterprise" tag="li">
						<a href="javascript:;">企业风采</a>
			        </router-link>
					<router-link to="/honor" tag="li">
						<a href="javascript:;">企业荣誉</a>
			        </router-link>
					<router-link to="/contact" tag="li">
						<a href="javascript:;">联系我们</a>
			        </router-link>
				</ul>
			</div>
		</header>
	</div>
</template>
<script>
export default {
  data() {
  	return {
      a:false
    }
  }
}
</script>