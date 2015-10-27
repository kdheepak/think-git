render = function(JSONData, vis) {

var w = 1500,
    H = 50,
    fill = d3.scale.category20();

var h = H;


console.log(JSONData.nodes)

var data = JSONData

h = H*1.5*data.nodes.length;
    vis.attr("height", h)
    .attr("width", w);

h = H*1.5*data.nodes.length;

        vis.attr("height", h);

    var transitiontime = 0;

    scaleY = d3.scale.linear()
        .range([d3.min(data.nodes, function(d){return d.pos[1]} ), d3.max(data.nodes, function(d){return d.pos[1]} )])
        .domain([h, 0])

    var scaleX = function(d){return d}



var PosX = function(d, i, location) { return scaleX(data.nodes[d[location]].pos[0]); };
var PosY = function(d, i, location) { return scaleY.invert(data.nodes[d[location]].pos[1]); };

        //create a reverseMap for getting the node information from the commit.hash
        var reverseMap = {};

            for(var i=0; i<data.nodes.length; i++){
            var p = data.nodes[i];
            var hash = p.id;
            reverseMap[hash] = p;
            };

        // use poslink function as a key for link information. See stackoverflow answer
        function poslink(d, i){ try{ return d.id ;} catch(err) {console.log(err); } }

        data.links.forEach(function(d) {
          d.id = data.nodes[d.source].id + "" + data.nodes[d.target].id;
        });

        var linkUpdateSelection = vis.selectAll(".link")
            .data(data.links, poslink);

            linkUpdateSelection.exit().remove();

            linkUpdateSelection
            .enter().append("line")          // attach a line
            .attr("class", "link")
            .style("stroke", "black")  // colour the line
            .attr("x1", function(d, i) {return PosX(d, i, "source");}) // x position of the first end of the line
            .attr("y1", function(d, i) {return PosY(d, i, "source");}) // y position of the first end of the line
            .attr("x2", function(d, i) {return PosX(d, i, "target");}) // x position of the second end of the line
            .attr("y2", function(d, i) {return PosY(d, i, "target");})    // y position of the second end of the line
             .style('opacity', 0);

             linkUpdateSelection
            .attr("class", "link")
            .style("stroke", "black")  // colour the line
                .transition()
                .delay(function(d,i) {return i*transitiontime})
            .attr("x1", function(d, i) {return PosX(d, i, "source");}) // x position of the first end of the line
            .attr("y1", function(d, i) {return PosY(d, i, "source");}) // y position of the first end of the line
            .attr("x2", function(d, i) {return PosX(d, i, "target");}) // x position of the second end of the line
            .attr("y2", function(d, i) {return PosY(d, i, "target");})    // y position of the second end of the line
                .style('opacity', 1);

          // use data.nodes[].id as key for the nodes
          var nodeUpdateSelection = vis.selectAll("circle.node")
              .data(data.nodes, function(d) {return d.id});

            nodeUpdateSelection.exit().remove();

            nodeUpdateSelection.enter().append("svg:circle")
              .attr("class", "node")
              .attr("cx", function(d, i) { return scaleX(d.pos[0]); })
              .attr("cy", function(d, i) { return scaleY.invert(d.pos[1]); })
              .attr("r", 0)
              .attr('fill', function(d, i) {if (reverseMap[d.id]==reverseMap[data['HEAD']]){return '#99FF66';} else {return 'red';}} )
              .on('mouseover', function(d,i) {
                d3.select(this).transition()
                  .ease('cubic-out')
                  .duration('200')
                  .attr("r", 15);
              })
              .on('mouseout', function(d,i) {
                d3.select(this).transition()
                  .ease('cubic-out')
                  .duration('200')
                  .attr("r", 10);
              });

            nodeUpdateSelection.transition()
                .delay(function(d,i) {return i*transitiontime})
                .attr("class", "node")
                .attr("cx", function(d, i) { return scaleX(d.pos[0]); })
                .attr("cy", function(d, i) { return scaleY.invert(d.pos[1]); })
                .attr('fill', function(d, i) {if (reverseMap[d.id]==reverseMap[data['HEAD']]){return '#99FF66';} else {return 'red';}} )
                .attr("r", 10)

            var textUpdateSelection = vis.selectAll("text.message")
                .data(data.nodes, function(d) {return d.id});

            textUpdateSelection.exit().remove();

            textUpdateSelection
            .enter().append("text")
              .text(function(d) { return d.id.substring(0, 6) + " - " + d.message; })
                         .attr("x", function(d) { return 15+scaleX(d.pos[0]); })
                         .attr("y", function(d) { return scaleY.invert(d.pos[1])-15; })
                         .attr("font-family", "sans-serif")
                         .attr("class", "message")
                         .attr("font-size", "15px")
                         .attr("fill", "blue")
                         .style('fill-opacity', 0);

            textUpdateSelection
              .text(function(d) { return d.id.substring(0, 6) + " - " + d.message; })
                         .transition()
                         .delay(function(d,i) {return i*transitiontime})
                            .style('fill-opacity', 1)
                         .attr("x", function(d) { return 15+scaleX(d.pos[0]); })
                         .attr("y", function(d) { return scaleY.invert(d.pos[1])-15; })
                         .attr("class", "message")
                         .attr("font-family", "sans-serif")
                         .attr("font-size", "15px")
                         .attr("fill", "blue");


            var labelUpdateSelection = vis.selectAll("text.labels")
                .data(data.labels);

        var labelPosX = function(d) { return reverseMap[d].pos[0]; };
        var labelPosY = function(d) { return reverseMap[d].pos[1]; };

            labelUpdateSelection.exit().remove();

            labelUpdateSelection.enter().append("text")
              .text(function(d) { return d })
                            .style('fill-opacity', 0)
             .attr("x", function(d, i) { return scaleX(data[d][0]) - 75; })
             .attr("y", function(d, i) { return scaleY.invert(data[d][1])+5; })
             .attr("class", "labels")
             .attr("font-family", "sans-serif")
             .attr("font-size", "15px");

            labelUpdateSelection
              .text(function(d) { return d })
                         .transition()
                         .delay(function(d,i) {return i*transitiontime})
                            .style('fill-opacity', 1)
             .attr("x", function(d, i) { return scaleX(labelPosX(data[d])) - 50 ; })
             .attr("y", function(d, i) { return scaleY.invert(labelPosY(data[d])) - 25 + i*5; })
             .attr("class", "labels")
             .attr("font-family", "sans-serif")
             .attr("font-size", "15px");


    }; //end function 

