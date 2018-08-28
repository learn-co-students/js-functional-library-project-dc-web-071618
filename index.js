fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {

      for (const key in collection) {
        callback(collection[key])
      }
      return collection
    },

    map: function(collection, callback) {
      let newArr = []
      for (const key in collection) {
        newArr.push(callback(collection[key]))
      }
      return newArr
    },

    reduce: function(collection, callback, acc) {
      acc === undefined ? acc = 0 : acc = acc
      let totalVal = 0
      collection.forEach(function (element){
         totalVal += callback(acc, element, collection)
      })
      return totalVal - acc * (collection.length-1)
    },

    find: function(collection, callback) {
      for (const key in collection){
        if (callback(collection[key]) === true){
          return collection[key]
        }
      }
    },

    filter: function(collection, callback) {
      let arr = []
      for (const key in collection){
        if (callback(collection[key]) === true){
          arr.push(collection[key])
        }
      }
      return arr
    },

    size: function(collection){
      let i = 0
      for (const key in collection){
        i += 1
      }
      return i
    },

    first: function(array, n){
      if (n === undefined){
        n = 1
      }
      let rturn = array.slice(0, n)
      if (rturn.length === 1){
        return rturn[0]
      }
      else {
        return rturn
      }
    },

    last: function(array, n){
      if (n === undefined){
        n = 1
      }
      let rturn = array.slice(0-n)
      if (rturn.length === 1){
        return rturn[0]
      }
      else {
        return rturn
      }
    },

      compact: function(array){
        newArr = []
        for (const key in array) {
          if (!!array[key] == true){
            newArr.push(array[key])
          }
        }
        return newArr
      },

    sortBy: function(array, callback){
      return array.slice().sort(function (a, b){
        return callback(a) - callback(b)
      })
    },

    flatten: function(array, shallow){
      newArr = []
      deepIterator(array)
      function deepIterator(target){

        if (typeof target === 'object'){
          for (const key in target){
            deepIterator(target[key])
          }
        } else{
          newArr.push(target)
        }
      }
      return newArr
    },

    uniq: function(array, isSorted, callback){
      newArr = [];
      cbArray = []
      if (callback === undefined){
        for (const key in array){
          if (newArr.includes(array[key]) == false){
            newArr.push(array[key])
          }
        }
      } else{
        for (const key in array){
          if (cbArray.includes(callback(array[key])) == false){
            cbArray.push(callback(array[key]))
            newArr.push(array[key])
          }
        }
      }
      return newArr
    },

  keys: function(object){
    newArr = []
    for (const key in object){
      newArr.push(key)
    }
    return newArr
  },

  values: function(object){
    newArr = []
    for (const key in object){
      newArr.push(object[key])
    }
    return newArr
  },

  functions: function(fi){
    newArr = []
    for (const key in fi){
      if (typeof fi[key] === 'function') {
        newArr.push(key)
      }
    }
    return newArr
  }

  }
})()

fi.libraryMethod()
