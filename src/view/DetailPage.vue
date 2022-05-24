<template>
  <div class="detail-wrapper">
    <ul>
      <li v-for="item in getDetailData()" :key="item.id">
        <img :src="item.picUrl" alt="item.name" />
        <div class="detail-title">
          {{item.name}}
        </div>
      </li>
    </ul>
   
  </div>
</template>

<script>
import animalData from '../mock/animal.js'
export default {
  name:'DetailPage',
  data(){
     return {
       id:this.$route.params.id,
       detailData:null
     }
  },
  methods:{
    getDetailData(){
        const data = animalData.filter(
          item=>{
          if(item.id==this.id){
              return item
           }
          }
       )
       return data
    }
  },
  mounted(){
    this.detailData = this.getDetailData()
  }
}
</script>

<style>

</style>