function findMinAndRemove(array){
  let minIdx = 0
  let min = array[minIdx]
  for(let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      minIdx = i
      min = array[i]
    }
  }
  return min
}

function insertionSort(array){

}
