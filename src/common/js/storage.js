
const _ANIMAL_ = '_animal_'
function saveTostorage(key,val){
    let animal = localStorage.getItem(_ANIMAL_);
    if(!animal){
        animal = {}
    }else{
        animal = JSON.parse(animal)
    }
    animal[key] = val
    localStorage.setItem(_ANIMAL_,JSON.stringify(animal))
}

function loadFormstorage(key,def){
   let animal = localStorage.getItem(_ANIMAL_);
    if(!animal){
      return def  
    }
    animal = JSON.parse(animal)
    let result = animal[key] ||def
    return result
}

export {
    saveTostorage,
    loadFormstorage
}