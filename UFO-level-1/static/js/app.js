// from data.js
var tableData = data;
// console.log(data)

// reference to table
var tbody = d3.select("tbody")

// YOUR CODE HERE!
// Loop through data and append a row for each
// the function(sighting) is grabbing objects from the array 'data'
data.forEach(function(sighting) {
    // console.log(sighting);
    var row = tbody.append("tr");

    // for each sighting value
    // console.log it
    Object.entries(sighting).forEach(function([key,value]) {
        // console.log(key,value);
        // append a cell to the row for each value
        var cell = row.append("td");
        // append text to the cell
        cell.text(value); 
    });
});

// select form
var form = d3.select("#filter-btn");

// event handlers
form.on("click", runEnter);

// event handler function
function runEnter(){

    // prevents the page from refreshing
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    // console.log(data);

    var filteredData = data.filter(sight => sight.datetime === inputValue);
    console.log(filteredData);

    // makes the table empty
    tbody.html("")

    // append relevant data to empty table
    filteredData.forEach(function(sighting) {
        // console.log(sighting);
        var row = tbody.append("tr");
    
        // for each sighting value
        // console.log it
        Object.entries(sighting).forEach(function([key,value]) {
            // console.log(key,value);
            // append a cell to the row for each value
            var cell = row.append("td");
            // append text to the cell
            cell.text(value); 
        });
    });
};