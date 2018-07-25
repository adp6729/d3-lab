// main.js
// author: Andrew Pittman

var width = 960,
    height = 800;

var path = d3.geo.path()
    .projection(null);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("data/africa.json", function(error, africa) {
  if (error) throw error;

  svg.append("g")
      .attr("class","countries")
    .selectAll("path")
      .data(topojson.feature(africa, africa.objects.countries).features)
    .enter().append("path")
      .attr("d", path)
    .append("title")
      .text(function(d) { return d.properties.admin; });

});

d3.select(self.frameElement).style("height", height + "px");