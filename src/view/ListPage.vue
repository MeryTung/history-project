<template>
   <div class="list-wrapper">
     <ul class="list">
         <li v-for="animal in animalData" :key="animal.id" class="animal-car" @click="changeDetail(animal)">
             <div class="animal-pic-wrapper">
                <img :src="animal.picUrl" :alt="animal.name" />
             </div>
             <div class="animal-title">
                 {{animal.name}}
             </div>
         </li>
     </ul>
     {{num}}
     <button class="btn" @click="addnum">add +1</button>
   </div>
</template>

<script>
import animalData from '../mock/animal.js'
import historyData from '../database/history.js'
import { saveAnimalHistory }  from '../common/js/cacheStorage.js'
export default {
    name:"ListPage",
    data(){
        return {
            animalData,
            historyData,
            num:1
        }
    },
    methods:{
        addnum(){
            this.num += 1
        },
        changeDetail(animal){
            // historyData.push(animal)
            saveAnimalHistory(animal)
            this.$router.push({path:`/list/${animal.id}`})
    }
    }
}
</script>

<style>

</style>