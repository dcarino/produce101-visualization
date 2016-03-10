var margin = {top: 30, side: 20, bottom: 30};

var width = parseInt(d3.select("body").style("width"))-margin.side, //Width of chart
	barHeight = (parseInt(d3.select("body").style("height"))-margin.bottom)/7; //Height (or Thickness) of bar

var x = d3.scale.linear()
	.range([0, width]);

var chart = d3.select(".chart") 
	.attr("width", width)



d3.csv("data/trainees.csv", type, function(error, data) {
	x.domain([0, d3.max(data, function(d){
		return d.Points;}
	)]);

	chart.attr("height", barHeight * data.length); //Set the height of the chart to sum of the barHeights

	var bar = chart.selectAll("g") //g is a group of SVG elements
		.data(data) //join data to the selection
	    .enter().append("g") //Initiates missing elements
	    .attr("transform", function(d, i) { 
	    	return "translate(0," + i * barHeight + ")"; });

	//Create the bars
	bar.append("rect")
	    .attr("width", function(d) { return x(d.Points); })
	    .attr("height", barHeight - 1);

	//Add trainees' points
	bar.append("text")
	    .attr("x", function(d) { return x(d.Points) - 3; })
	    .attr("y", barHeight / 2)
	    .attr("dy", ".35em")
	    .text(function(d) { return d.Points; });

	//Add name of trainees
	bar.append("text")
		.attr("id","barName")
	    .attr("x", 3)
	    .attr("y", barHeight / 2)
	    .attr("dy", ".35em")
	    .text(function(d) { 
	    	return d.Name; })
	    .attr("text-anchor", "start");

});

function type(d) {
	d.value = +d.Points; // coerce to number
	return d;
}
