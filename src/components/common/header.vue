<template>
  <div class="header">
	  <div class="container">
	   <h1 class="title"><a href="">Vue Title</a></h1> 
	   <ul class="nav">
	   	<li>
	   		<router-link :to="{ name:'site'}">首页</router-link>
	   	</li>
	   	<li>
	   		<router-link :to="{ name:'about'}">关于</router-link>
	   	</li>
	   </ul>
	  </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
	background: #fff;
  height: 70px;
  line-height: 70px;
  color: #575e65;
  box-shadow: 0px 3px 8px 0 rgba(175, 179, 209, 0.16);
}
.title {
	font-size: 20px;
	display: inline-block;
}
.nav {
	display: inline-block;
  margin-left: 30px;
  line-height: 70px;
  li {
  	display: inline-block;
    position: relative;
    margin: 0 15px;
  }
  a{
  	color: #575e65;
    display: inline-block;
    height: 100%;
  }
  .is-active{
  	color:#32a3fd;
  	position: relative;
  	&:before{
			content: "";
	    width: 75%;
	    height: 4px;
	    display: inline-block;
	    background: #2b9ef9;
	    box-shadow: 0px -4px 10px 0 rgba(192, 232, 255, 0.8);
	    border-radius: 6px;
	    position: absolute;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    margin: 0 auto;
  	}
  }
}
</style>