
document.querySelector("#form").addEventListener("submit", formSubmit);
var todoArr = JSON.parse(localStorage.getItem("todoDataBase")) || []; 
// we take the value from localStorage, if nothing is present inside localStorage, 
// then we neeed to display the data/array is empty, so [] is used.

// or operator

function formSubmit(event)  
{
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var qty = document.querySelector("#qty").value;
  //console.log(first)
  var priority = document.querySelector("#priority").value;

  var todoObj = {
    todoName: name,
    // the above method or the below method
    // todoName: document.querySelector("#name").value,
    todoQty: qty,
    todoPrio: priority,
  };

  todoArr.push(todoObj);

  console.log(todoArr);

  // storing the todoArr data inside localStorage using key todoList
  localStorage.setItem("todoDataBase", JSON.stringify(todoArr));
}

//STEPS/FLOW :
// 1. we want to access all the details from one page to another page
// 2. here in the above example, we want to access all the object details, i.e todo name,
// todo quantity, todo priority. here each details is considered as an object, because 
// everything in JavaScript is an object.
// 3. to access one page details in an another page, we need an external Storage, herewe use a local Storage
// called as localStorage, which has setItem, getItem inbuilt properties,
// using which we can store and access the data.
// 4. in localStorage, all the data is stored in the form of string. So to store an array, we need to
// convert the given data into array by using localStorage("keyName/variableName", JSON.stringify(data));
// in localStorage, all the data which is stored as an object is stored in the form of JSON objects, i.e both key and value will
// be included inside double quotes, but the JS objects have only values inside double quotes.
// so to get the objects in the form of JavaScript objects we need to parse it during accessing data.
// so whenever we want to access the data in the form of an object we need to parse the data.
// i.e JSON.parse(localStorage.getItem("dataName"));
// 5. in the above ex, we need to store todo name, quantity, priority in the localStoarge
// using localStorage.setItem("arrayNameGivenByUsWhichCanBeAccessedInAnotherPage", dataStoredInAboveArrayName);
// 6. since it is a form, we use form tag to add event listener. on clicking submit, all the data/objects should get stored
// inside an array, which in turn will be used to get stored in localStorage, by giving the "keyname" to that array of objects.
// inside localStorage.setItem
// 7. 














// // or statement - it will check only for one condition
// console.log(false || true);

// console.log(1 || 0);

// console.log(0 || 1);

// console.log(1 || null);

// console.log(null || 1);

// console.log(0 || 0);

// console.log(JSON.parse(localStorage.getItem("axshbdsjhbjsdb")) || []);

// console.log(5 > 8 || 5 > 9);
// console.log(false || false);

// var a = "strimg"

// var a = 12
// console.log(a)





// DAY - 1
// document.querySelector("#form").addEventListener("submit", formSubmit);
// var todoArr = JSON.parse(localStorage.getItem("todoLocal")) || [];
// function formSubmit(event)
// {
//     event.preventDefault();
//     var name = document.querySelector("#name").value;
//     var qty = document.querySelector("#qty").value;
//     var priority = document.querySelector("#priority").value;

//     var todoObj = {
//         name: name,
//         qty: qty,
//         priority: priority,
//     };

//     todoArr.push(todoObj);
//     localStorage.setItem("todoLocal", JSON.stringify(todoArr));

// }


