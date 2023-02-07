var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// Create submit event
form.addEventListener("submit", addItem);
// Delete 
itemList.addEventListener("click", removeItem);

// Filter event
filter.addEventListener("keyup", filterItems);

// Add 

function addItem(e) {

  e.preventDefault();

  // Get input value

  var newItem = document.getElementById("item").value;
  var newdes = document.getElementById("description").value;

  // Create new li element

  var li = document.createElement("li");



  // Add class

  li.className = "list-group-item";



  // Add text node with input value

  li.appendChild(document.createTextNode(newItem));

  li.appendChild(document.createTextNode(" "+ newdes));



  // Create del button element

  var editBtn = document.createElement("button");

  var deleteBtn = document.createElement("button");



  //Add classes to del button

  editBtn.className = "btn btn-edit btn-#ccc float-right edit";

  deleteBtn.className = "btn btn-danger btn-sm float-right delete";



  // Append text node

  editBtn.appendChild(document.createTextNode("edit"));

  deleteBtn.appendChild(document.createTextNode("X"));



  // Append button to li

  li.appendChild(editBtn);

  li.appendChild(deleteBtn);



  // Append li to list

  itemList.appendChild(li);

}



// Remove item

function removeItem(e) {

  if (e.target.classList.contains("delete")) {

    if (confirm("Are You Sure?")) {

      var li = e.target.parentElement;

      itemList.removeChild(li);

    }

  }

}



// Filter Items

function filterItems(e) {

  //convert text to lowercase

  var text = e.target.value.toLowerCase();

  // Get all list

  var lis = itemList.getElementsByTagName("li");

  //  Convert to an array

  Array.from(lis).forEach(function (item) {

    var itemName = item.firstChild.textContent;

    var desName = item.lastChild.textContent;

    if (

      itemName.toLowerCase().indexOf(text) != -1 ||
      desName.toLowerCase().indexOf(text) != -1

    ) { item.style.display = "block";
    } else {
      item.style.display = "none";
    }

  });

}



function savetoLocalStorage(event) {
    var item= document.getElementById('item').value;
    var descr= document.getElementById('description').value ;
    
    var obj = {
        descr:descr, 
        item : item 
    }
    event.preventDefault();
    localStorage.setItem('obj', JSON.stringify(obj))
}

