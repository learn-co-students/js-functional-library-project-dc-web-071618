fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const item in collection) {
        callback(collection[item]);
      }
      return collection;
    },

    map: function(collection, callback) {
      const newCollection = [];
      for (const item in collection) {
        newCollection.push(callback(collection[item]));
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc) {
      if (!acc) {
        var acc = 0;
      }
      console.log(acc);
      for (const item in collection) {
        acc = callback(acc, collection[item], collection);
      }
      return acc;
    },

    find: function(collection, predicate) {
      for (const item in collection) {
        if (predicate(collection[item])) {
          return collection[item];
        }
      }
    },
    
    filter: function(collection, predicate) {
      const newCollection = [] 
      for (const item in collection) {
        if (predicate(collection[item])) {
          newCollection.push(collection[item]);
        }
      }
      return newCollection;
    },

    size: function(collection) {
      let size = 0;
      for (const item in collection) {
        size++;
      }
      return size;
    },

    first: function(array, n) {
      if (!n) {
        return array[0];
      }
      const newCollection = [];
      for (let i = 0; i < n; i++) {
        newCollection.push(array[i])
      }
      return newCollection;
    },

    last: function(array, n) {
      if (!n) {
        return array.slice(-1)[0]
      }
      return array.slice(-n);

    },

    compact: function(array) {
      const newArray =[];
      for (const item of array){
        if (item) {
          newArray.push(item);
        }
      }
      return newArray;
    },

    sortBy: function(array, callback) {
      const newArray = array.slice()
      return newArray.sort(function(a, b) {
        if (callback(a) < callback(b)) {
          return -1;
        }
        else if (callback(a) === callback(b)) {
          return 0;
        }
        else {
          return 1;
        }
      })
    },

    uniq: function(array, isSorted, callback) {
      const newArray = [];
      const callbackArray = [];
      function count(_array, value) {
        let count = 0;
        for(let i=0; i<_array.length; i++) {
          if (_array[i] === value) {
            count++;
          }
        }
        return count;
      }
      if (callback) {
        for (let i = 0; i < array.length; i++) {
          callbackArray.push(callback(array[i]))
          if (!newArray.includes(array[i]) && count(callbackArray, callback(array[i])) <= 1) {
            newArray.push(array[i]);
          }
        }
      }
      else {
      for (let i = 0; i < array.length; i++) {
        if(callback) {
          callbackArray.push(callback(array[i]))
        }
        if (!newArray.includes(array[i])) {
          newArray.push(array[i]);
        }
      }
    }
    return newArray;
  },

  keys: function(obj) {
    const keysArray = [];
    for (const key in obj) {
      keysArray.push(key);
    }
    return keysArray;
  },

  values: function(obj) {
    const valuesArray = [];
    for (const key in obj) {
      valuesArray.push(obj[key]);
    }
    return valuesArray;
  },

  functions: function(obj) {
    const functionsArray = [];
    for (const key in obj) {
      if (typeof obj[key] === 'function') {
        functionsArray.push(obj[key].name)
      }
    }
    return functionsArray;
  },

  flatten: function(array) {
    flattenedArray = [];
    for (let item of array) {
      while(typeof item === 'object') {
        item = item[0]
      }
      flattenedArray.push(item);
    }
    return flattenedArray;
  }
  }
})()

fi.libraryMethod()
