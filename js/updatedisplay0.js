Reveal.addEventListener( 'network', function() {
    var vis = d3.select("#demo0-chart").style("padding-top", "100px").style("padding-bottom", "100px");

    var h = 50*1.5*data_demo0_1.nodes.length;

    var data = data_demo0_final;
    var scaleY = d3.scale.linear()
        .range([d3.min(data.nodes, function(d){return d.pos[1]} ), d3.max(data.nodes, function(d){return d.pos[1]} )])
        .domain([h, 0]);

Reveal.addEventListener( 'fragmentshown', function( event ) {
    console.log(event.fragment.getAttribute("class"))
    var classAttribute = event.fragment.getAttribute("class")
    if (classAttribute.indexOf("demo0-start") > -1) {
        setTimeout(displayData, 500, data_demo0_0, vis, h, scaleY);
    }
    else if (classAttribute.indexOf("demo0-git-story-1") > -1) {
        setTimeout(displayData, 500, data_demo0_1, vis, h, scaleY);
    }
    else if (classAttribute.indexOf("demo0-git-story-2") > -1) {
        setTimeout(displayData, 500, data_demo0_2, vis, h, scaleY);
    }
    else if (classAttribute.indexOf("demo0-git-story-3") > -1) {
        console.log(event.fragment.getAttribute("class"))
        setTimeout(displayData, 500, data_demo0_3, vis, h, scaleY);
    }
    else if (classAttribute.indexOf("demo0-git-delete-merge") > -1) {
        console.log(event.fragment.getAttribute("class"))
        setTimeout(displayData, 500, data_demo0_final, vis, h, scaleY);
    }
} );   

Reveal.addEventListener( 'fragmenthidden', function( event ) {
    console.log(event.fragment.getAttribute("class"))
    var classAttribute = event.fragment.getAttribute("class")
    if (classAttribute.indexOf("demo0-git-story-1") > -1) {
        setTimeout(displayData, 500, data_demo0_0, vis, h, scaleY);
    }
    else if (classAttribute.indexOf("demo0-git-story-2") > -1) {
        setTimeout(displayData, 500, data_demo0_1, vis, h, scaleY);
    }
    else if (classAttribute.indexOf("demo0-git-story-3") > -1) {
        setTimeout(displayData, 500, data_demo0_2, vis, h, scaleY);
    }
    else if (classAttribute.indexOf("demo0-git-delete-merge") > -1) {
        setTimeout(displayData, 500, data_demo0_3, vis, h, scaleY);
    }
} );

} ); // end addEventListener


