Reveal.initialize();


Reveal.addEventListener( 'title-event', function() {
    var h = 50*1.5*JSONData0.nodes.length;
    setTimeout(displayData, 500, JSONData0);

    setTimeout(displayData, 1500, JSONData1);

    setTimeout(displayData, 2500, JSONData2);
} );


var vis = d3.select("#title-chart").style("padding-top", "0px").style("padding-bottom", "100px");
function displayData(data) {
render(data, vis, h);
}
    var JSONData0 = {"directed": true, "HEAD": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "links": [], "multigraph": false, "graph": [], "labels": ["master"], "master": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "nodes": [{"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [100, 200]}, ]};
    var h = 50*1.5*JSONData0.nodes.length;
    setTimeout(displayData, 500, JSONData0);

    var JSONData1 = {"directed": true, "HEAD": "1ddefaae6634d68350f4b738702f1103442c1af4", "links": [{"source": 0, "target": 1}, ], "multigraph": false, "graph": [], "labels": ["master"], "master": "1ddefaae6634d68350f4b738702f1103442c1af4", "nodes": [{"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [100, 200]}, {"message": "Press SPC to proceed", "id": "1ddefaae6634d68350f4b738702f1103442c1af4", "pos": [400.0, 200.0]} ]};
    setTimeout(displayData, 1500, JSONData1);

    var JSONData2 = {"directed": true, "HEAD": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "links": [{"source": 0, "target": 1}, {"source": 1, "target": 2}], "multigraph": false, "graph": [], "labels": ["master"], "master": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "nodes": [{"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [100, 200]}, {"message": "Press SPC to proceed", "id": "1ddefaae6634d68350f4b738702f1103442c1af4", "pos": [400.0, 200.0]}, {"message": "Press ? for tutorial", "id": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "pos": [700.0, 200.0]}, ]};
    setTimeout(displayData, 2500, JSONData2);

