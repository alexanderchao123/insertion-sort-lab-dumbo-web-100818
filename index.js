function findMinAndRemove(array){
  let minIdx = 0
  let min = array[minIdx]
  for(let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      minIdx = i
      min = array[i]
    }
  }
  array.splice(minIdx, 1)
  return min
}

function insertionSort(array){

}
