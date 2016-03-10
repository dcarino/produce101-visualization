function updateData() {

   console.log("here");
    var data = csv("data/trainees.csv", function(error, data) {
    x.domain([0, d3.max(data, function(d){
        return d.Age;}
    )]);
    draw(data);

}