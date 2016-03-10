function resize() {
		/* Find the new window dimensions */
			var respWidth = parseInt(d3.select("#graph").style("width")),
			respHeight = parseInt(d3.select("#graph").style("height"));

			chart.attr("width",respWidth);
		}