//Select the button
var button = d3.select("#filter-btn")
button.on("click", function() {
//Select the input element and get the raw HTML node
  var inputElement = d3.select(".form-control");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue)
  console.log(filteredData);
  d3.select("tr").text(filteredData);

  var tbody1 = d3.select("tbody");
  //Loading of the data
  filteredData.forEach((x) => {
    var row = tbody1.append("tr");
    Object.entries(x).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });