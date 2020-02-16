// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// YOUR CODE HERE!
console.log(data)

//Loading of the data

data.forEach((data) => {
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


//Load New Table 
//Select the button

var button = d3.select("#filter-btn")
button.on("click", function filter() {
//Select the input element and get the raw HTML node
  var inputElement = d3.select(".form-control");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue)
  console.log(filteredData);
  //Clear Table
  tbody.html("");
  //load filtered data
  filteredData.forEach((x) => {
    var row = tbody.append("tr");
    Object.entries(x).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  })});