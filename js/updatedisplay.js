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
    if (classAttribute.indexOf("demo1-git-commit") > -1) {
        setTimeout(displayData, 0, JSONData1_demo1, vis, h, scaleY);
        // do stuff
    }
    if (classAttribute.indexOf("demo1-git-push") > -1) {
        setTimeout(displayData, 0, JSONData2_demo1, vis, h, scaleY);
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
    if (classAttribute.indexOf("demo1-git-commit") > -1) {
        setTimeout(displayData, 0, JSONData0_demo1, vis, h, scaleY);
        // do stuff
    }
    if (classAttribute.indexOf("demo1-git-push") > -1) {
        setTimeout(displayData, 0, JSONData1_demo1, vis, h, scaleY);
        // do stuff
    }
} );

} ); // end addEventListener


function displayData(data, vis, h, scaleY) {
render(data, vis, h, scaleY);
}

// demo1 data
    var JSONData0 = {"directed": true, "HEAD": "", "links": [], "multigraph": false, "graph": [], "labels": [], "master": "", "nodes": []};

    var JSONData0_demo1 = {"directed": true, "HEAD": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "links": [], "multigraph": false, "graph": [], "labels": ["master"], "master": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "nodes": [{"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [400, 0]}, ]};

    var JSONData1_demo1 = {"directed": true, "HEAD": "1ddefaae6634d68350f4b738702f1103442c1af4", "links": [{"source": 0, "target": 1}, ], "multigraph": false, "graph": [], "labels": ["master"], "master": "1ddefaae6634d68350f4b738702f1103442c1af4", "nodes": [{"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [400, 0]}, {"message": "Test commit 1", "id": "1ddefaae6634d68350f4b738702f1103442c1af4", "pos": [400.0, 200.0]} ]};

    var JSONData2_demo1 = {"directed": true, "HEAD": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "links": [{"source": 0, "target": 1}, {"source": 1, "target": 2}], "multigraph": false, "graph": [], "labels": ["master"], "master": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "nodes": [{"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [400, 0]}, {"message": "Test commit 1", "id": "1ddefaae6634d68350f4b738702f1103442c1af4", "pos": [400.0, 200.0]}, {"message": "Test commit 2", "id": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "pos": [400.0, 400.0]}, ]};


// title data. Place at end of index.html

    var JSONData0_title = {"directed": true, "HEAD": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "links": [], "multigraph": false, "graph": [], "labels": ["master"], "master": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "nodes": [{"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [100, 200]}, ]};

    var JSONData1_title = {"directed": true, "HEAD": "1ddefaae6634d68350f4b738702f1103442c1af4", "links": [{"source": 0, "target": 1}, ], "multigraph": false, "graph": [], "labels": ["master"], "master": "1ddefaae6634d68350f4b738702f1103442c1af4", "nodes": [{"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [100, 200]}, {"message": "Press SPC to proceed", "id": "1ddefaae6634d68350f4b738702f1103442c1af4", "pos": [400.0, 200.0]} ]};

    var JSONData2_title = {"directed": true, "HEAD": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "links": [{"source": 0, "target": 1}, {"source": 1, "target": 2}], "multigraph": false, "graph": [], "labels": ["master"], "master": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "nodes": [{"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [100, 200]}, {"message": "Press SPC to proceed", "id": "1ddefaae6634d68350f4b738702f1103442c1af4", "pos": [400.0, 200.0]}, {"message": "Press ? for tutorial", "id": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "pos": [700.0, 200.0]}, ]};

    var vis = d3.select("#title-chart").style("padding-top", "0px").style("padding-bottom", "100px");
    var h = 50*JSONData2_title.nodes.length;
    var data = JSONData2_title;
    var scaleY = d3.scale.linear()
        .range([d3.min(data.nodes, function(d){return d.pos[1]} ), d3.max(data.nodes, function(d){return d.pos[1]} )])
        .domain([h, 0]);

    setTimeout(displayData, 500, JSONData0_title, vis, h, scaleY);
    setTimeout(displayData, 1500, JSONData1_title, vis, h, scaleY);
    setTimeout(displayData, 2500, JSONData2_title, vis, h, scaleY);
