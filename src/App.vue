<template>
<div class="comtainer">
  <ul class="tab">
    <router-link to="/" custom
  v-slot="{ href,navigate, isActive, isExactActive }">
  <li :class="[isActive && 'tab-item-active', isExactActive && 'router-link-exact-active']" class="tab-item">
    <a :href="href" @click="navigate">动物列表页</a>
  </li>
  </router-link>
    <router-link to="/history" custom v-slot="{href,isActive, isExactActive}">
     <li :class="[isActive && 'tab-item-active',isExactActive && 'router-link-exact-active']" class="tab-item">
       <a :href="href">历史浏览页</a>
     </li>
    </router-link>
  </ul>
  <router-view></router-view>
</div>
</template>

<script>
// import { saveTostorage,loadFormstorage }  from './common/js/storage.js'
export default {
  name: 'App',
  components: {},
  data(){
    return {
    }
  },
  mounted(){
  //   saveTostorage('age','32')
  //   saveTostorage('city','北京');
  //   const result = loadFormstorage('address',[])
  //   console.log(result);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
}
.comtainer{padding:0;width:1200px;margin: 0 auto;}
.tab{ margin:0 auto; padding:0;width:350px; overflow: hidden; margin-bottom: 30px;}
.tab-item{line-height: 24px;padding:10px; float:left;width: 140px; text-decoration: none; border: 1px solid #eee}
.tab-item a{text-decoration: none}
.tab-item a:active{color: #fff}
.tab-item-active{background-color: #272727; }
.tab-item-active a {color: #fff}

</style>
