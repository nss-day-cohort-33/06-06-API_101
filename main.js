
// 1) Ask the db to gimmie some data
fetch("http://localhost:8088/food")
// 2) wait, using a Promise
// 3) receive the data
.then( data => data.json())
.then( food => {
  // 5) loop over the array of objects
  // 6) Do stuff to the data
  console.table(food)
  let foodContainer = document.querySelector("#food-list")
  // 7) Display the data in the DOM as HTML
  food.forEach( item => foodContainer.innerHTML += `<h2>I like to eat ${item.name}</h2>`)
})

// fetching data from an outside API!
fetch("https://world.openfoodfacts.org/api/v0/product/5400101059634.json")
.then( data => data.json())
.then( foodItem => console.log(foodItem))
