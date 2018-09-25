function find(array, criteriaFn) {

  let current = arrays
  let next = [ ]
  
  while(current) {

    if(criteriaFn(current)) {
      return current
    }
   
    if(Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }

    current = next.shift() 
  }
  
  return current
    
}

function find(array, criteriaFn) {

// traversing through nested arrays
  let current = arrays
  let next = [ ]
  
// traversing 
  let currentObj = object
  let nextObj = { }
  
  while(current) {

    if(criteriaFn(current)) {
      return current
    }
   
    if(Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }

    current = next.shift() 
  }
  
  return null
    
}

