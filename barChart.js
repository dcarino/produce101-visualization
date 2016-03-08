var height = 500, //Height of chart
	barWidth = 70; //Height (or Thickness) of bar

var y = d3.scale.linear()
	.range([0, height]);

var chart = d3.select(".chart") 
	.attr("height", height)

d3.csv("data/trainees.csv", type, function(error, data) {
	y.domain([0, d3.max(data, function(d){
		return d.Points;}
	)]);

	chart.attr("width", barWidth * data.length); //Set the height of the chart to sum of the barHeights

	var bar = chart.selectAll("g") //g is a group of SVG elements
		.data(data) //join data to the selection
	    .enter().append("g") //Initiates missing elements
	    .attr("transform", function(d, i) { 
	    	return "translate("+ i * barWidth + ",0)"; });

	bar.append("rect")
	    .attr("height", function(d) { 
	    	return y(d.Points); })
	    .attr("width", barWidth - 2);

	bar.append("text")
	    .attr("y", function(d) { return y(d.Points) - 3; })
	    .attr("x", barWidth / 2)
	    .attr("dx", ".35em")
	    .text(function(d) { return d.Points; })
	    .attr("transform", function(){
	    	return "rotate(-10)";
	    });

	bar.append("text")
	    .attr("y", 5)
	    .attr("x", barWidth / 2)
	    .attr("dx", ".35em")
	    .text(function(d) { 
	    	return d.Name; })
	    
});

function type(d) {
	d.value = +d.Points; // coerce to number
	return d;
}
