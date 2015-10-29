Reveal.initialize();


Reveal.addEventListener( 'title-event', function() {
    var vis = d3.select("#title-chart").style("padding-top", "0px").style("padding-bottom", "100px");
    var h = 50*JSONData2_title.nodes.length;
    var data = JSONData2_title;
    var scaleY = d3.scale.linear()
        .range([d3.min(data.nodes, function(d){return d.pos[1]} ), d3.max(data.nodes, function(d){return d.pos[1]} )])
        .domain([h, 0]);

    setTimeout(displayData, 500, JSONData0_title, vis, h, scaleY);

    setTimeout(displayData, 1500, JSONData1_title, vis, h, scaleY);

    setTimeout(displayData, 2500, JSONData2_title, vis, h, scaleY);
} );

Reveal.addEventListener( 'demo1-event', function() {
    var vis = d3.select("#demo1-chart").style("padding-top", "100px").style("padding-bottom", "100px");

    var h = 50*1.5*JSONData2_demo1.nodes.length;

    var data = JSONData2_demo1;
    var scaleY = d3.scale.linear()
        .range([d3.min(data.nodes, function(d){return d.pos[1]} ), d3.max(data.nodes, function(d){return d.pos[1]} )])
        .domain([h, 0]);

Reveal.addEventListener( 'fragmentshown', function( event ) {
    var classAttribute = event.fragment.getAttribute("class")
    if (classAttribute.indexOf("demo1-git-add") > -1) {
        setTimeout(displayData, 0, JSONData0_demo1, vis, h, scaleY);
        // do stuff
    }
    if (classAttribute.indexOf("demo1-git-commit-1") > -1) {
        setTimeout(displayData, 0, JSONData1_demo1, vis, h, scaleY);
        // do stuff
    }
    if (classAttribute.indexOf("demo1-git-commit-2") > -1) {
        setTimeout(displayData, 0, JSONData2_demo1, vis, h, scaleY);
        // do stuff
    }
    if (classAttribute.indexOf("demo1-git-push") > -1) {
        setTimeout(displayData, 0, JSONData3_demo1, vis, h, scaleY);
        // do stuff
    }
    //setTimeout(displayData, 1500, JSONData1_demo1, vis, h);
    //setTimeout(displayData, 2500, JSONData2_demo1, vis, h);
} );   

Reveal.addEventListener( 'fragmenthidden', function( event ) {
    console.log(event.fragment.getAttribute("class"))
    var classAttribute = event.fragment.getAttribute("class")
    if (classAttribute.indexOf("demo1-git-add") > -1) {
        setTimeout(displayData, 0, JSONData0, vis, h, scaleY);
        // do stuff
    }
    if (classAttribute.indexOf("demo1-git-commit-1") > -1) {
        setTimeout(displayData, 0, JSONData0_demo1, vis, h, scaleY);
        // do stuff
    }
    if (classAttribute.indexOf("demo1-git-commit-2") > -1) {
        setTimeout(displayData, 0, JSONData1_demo1, vis, h, scaleY);
        // do stuff
    }
    if (classAttribute.indexOf("demo1-git-push") > -1) {
        setTimeout(displayData, 0, JSONData2_demo1, vis, h, scaleY);
        // do stuff
    }
} );

} ); // end addEventListener


function displayData(data, vis, h, scaleY) {
render(data, vis, h, scaleY);
}


    var vis = d3.select("#title-chart").style("padding-top", "0px").style("padding-bottom", "100px");
    var h = 50*JSONData2_title.nodes.length;
    var data = JSONData2_title;
    var scaleY = d3.scale.linear()
        .range([d3.min(data.nodes, function(d){return d.pos[1]} ), d3.max(data.nodes, function(d){return d.pos[1]} )])
        .domain([h, 0]);

    setTimeout(displayData, 0, JSONData0_title, vis, h, scaleY);
    setTimeout(displayData, 1000, JSONData1_title, vis, h, scaleY);
    setTimeout(displayData, 2000, JSONData2_title, vis, h, scaleY);
