// const person = {
//   name: "Awesome Name",
//   occupation: {
//     title: "Senior Manager of Awesome",
//     yearsHeld: 2
//   },
//   pets: [{
//     kind: "dog",
//     name: "Fiona"
//   }, {
//     kind: "cat",
//     name: "Ralph"
//   }]
// }

// console.log(person)

// console.log(person.occupation)

// console.log(person.occupation.yearsHeld)

// const collections = [1, [2, [4, [5, [6]], 3]]]

// console.log(collections)

// // The second element of the collections element

// collections[1][1]

// console.log(collections[1][1])

// collections[1][1][1]

// console.log(collections[1][1][1])

// collections[1][1][1][1]

// console.log(collections[1][1][1][1])

// collections[1][1][1][1][0]

// console.log(collections[1][1][1][1][0])

// const array = [1, [2, [4, [5, [6]], 3]]]

// function find(array, criteriaFn) {
//   for(let i = 0; i < array.length; i++) {
//     if(criteriaFn(array[i])) {
//     return array[i]
//     }
//   }
// }

// console.log(find())

// function find(array, criteriaFn) {
//   // initialize two variables, `current`, and `next`
//   // `current` keeps track of the element that we're
//   // currently on, just like we did when unpacking the
//   // array above; `next` is itself an array that keeps
//   // track of the elements (which might be arrays!) that
//   // we haven't looked at yet
//   let current = arrays
//   let next = [ ]
  
//   // hey, a `while` loop! this loop will
//   // trigger if `current` is truthy – so when
//   //  we exhaust `next` and, below, attempt to
//   // `shift()` `undefined` (when `next` is empty)
//   // onto `current` is truthy – so when
//   // we exhaust `next` and, below, attempt to
//   // `shift()` `undefined` (when `next` is empty)
//   // onto `current`, we'll exit the loop
//   while(current) {
//     // if `current` satisfies the
//     // `criteriaFn`, then
//     // return it – recall that `return` will exit then
//     // entire function!
//     if(criteriaFn(current)) {
//       return current
//     }
    
//     //if `current` is an array, we want to
//     // push all of its elements (which be arrays)
//     // onto `next`
//     if(Array.isArray(current)) {
//       for (let i = 0; i < current.length; i++) {
//         next.push(current[i])
//       }
//     }
//     // after pushing any children (if there 
//     // are any) of `current` onto `next`, we want to
//     // take the first element of `next` and make it the
//     // new `current` for the next pass of the 
//     // `while` loop
//     current = next.shift()
    
//   }
  
//   // if we haven't
//   return null
  
// }

// console.log(n => n > 5)

function find(array, criteriaFn) {
  let current = collections
  let next = [ ]
  
  while(current) {
    if(criteriaFn(current))  {
      return current
  }
  
  if(Array.isArray(current)) {
    for (let i = 0; i < current.length; i++) {
      next.push(array)
    }
  }
  
  current = next.sift()
  }
  
  return null
}

console.log(find())
