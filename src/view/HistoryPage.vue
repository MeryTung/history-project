<template>
  <div class="history-wrapper">
      <ul class="history">
        <li v-for="item in historyData" :key="item.id">
          <div class="history-pic">
            <img :src="item.picUrl" alt="item.name" />
          </div>
         
          <div class="history-title">
            {{item.name}}
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
import {loadAnimalHistory} from '../common/js/cacheStorage'
export default {
  data(){
    return {
        historyData:null
    }
  },
    mounted(){
      this.historyData = loadAnimalHistory()
    }
}
</script>

<style>
.history{width:300px;margin:0 auto;padding:0;display:flex;justify-content:center;flex-direction: column;}
.history-pic{width:300px;height:180px;overflow:hidden}
.history-pic img{width:100%;}
.history-title{ text-align:center; background-color:#f1f1f1; border:1px solid #eee;line-height:40px;border-top:none; border-radius: 5px;margin-bottom:20px;}
</style>