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
  var cityElement = d3.select("#city");
  var stateElement = d3.select("#state");
  var countryElement = d3.select("#country");
  var shapeElement = d3.select("#shape");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var cityvalue = cityElement.property("value");
  var statevalue = stateElement.property("value");
  var countryvalue = countryElement.property("value");
  var shapevalue = shapeElement.property("value");

  //var filteredData = tableData.filter(ufo => ufo.datetime === inputValue)
  
  //Clear Table
  if (inputValue != ""){
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue)
  }
  else;
    {tableData}

 if (cityvalue != ""){
    var filteredData = tableData.filter(ufo => ufo.city === cityvalue)
    }
 else;
    {tableData}

 if (statevalue != ""){
    var filteredData = tableData.filter(ufo => ufo.state === statevalue)
    }
 else;
    {tableData}

 if (countryvalue != ""){
    var filteredData = tableData.filter(ufo => ufo.country === countryvalue)
    }
 else;
    {tableData}
 if (shapevalue != ""){
    var filteredData = tableData.filter(ufo => ufo.shape === shapevalue)
    }
    else;
        {tableData}


  tbody.html("");
  //load filtered data
  filteredData.forEach((x) => {
    var row = tbody.append("tr");
    Object.entries(x).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  })});