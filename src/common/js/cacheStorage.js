import { saveTostorage,loadFormstorage} from './storage.js'

const ANIMAL_HISTORY = 'animal__history'
const saveAnimalHistory = function(animal) {
    let animalHistory = loadFormstorage(ANIMAL_HISTORY,[])
    
    inserArray(animalHistory,animal,(item)=>item.id==animal.id,3)
    saveTostorage(ANIMAL_HISTORY,animalHistory)
}

function loadAnimalHistory(){
    return loadFormstorage(ANIMAL_HISTORY,[])
}

function inserArray(arr,item,compareFn,maxLen){
    const index = arr.findIndex(compareFn)
    if(index>=0){
        arr.splice(index,1)
    }
    arr.unshift(item)
    if(maxLen && arr.length>maxLen){
        arr.pop()
    }
}

export {
    saveAnimalHistory,
    loadAnimalHistory
}