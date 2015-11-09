// demo1 data
var JSONData0 = {"directed": true, "HEAD": "", "links": [], "multigraph": false, "graph": [], "labels": [], "master": "", "nodes": []};

var JSONData2_demo1 = {"directed": true, "HEAD": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", 
    "links": [
            {"source": 0, "target": 1}, 
            {"source": 1, "target": 2},
    ], 
    "multigraph": false, 
    "graph": [], 
    "labels": ["master", "origin/master"], 
    "origin/master": "3a253b5c7ff62479e333c4f60dc41d46863e8905", 
    "master": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", 
    "nodes": [
            {"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [400, 0]}, 
            {"message": "Test commit 1", "id": "1ddefaae6634d68350f4b738702f1103442c1af4", "pos": [400.0, 200.0]}, 
            {"message": "Test commit 2", "id": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "pos": [400.0, 400.0]},
    ]
};

var JSONData0_demo2 = {"directed": true, "HEAD": "3a253b5c7ff62479e333c4f60dc41d46863e8905", 
    "links": [
            
    ], 
    "multigraph": false, 
    "graph": [], 
    "labels": ["master", ], 
    "master": "3a253b5c7ff62479e333c4f60dc41d46863e8905", 
    "nodes": [
            {"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [400, 0]}, 
    ]
};

var JSONData1_demo2 = {"directed": true, "HEAD": "1ddefaae6634d68350f4b738702f1103442c1af4", 
    "links": [
            {"source": 0, "target": 1}, 
    ], 
    "multigraph": false, 
    "graph": [], 
    "labels": ["master", ], 
    "master": "1ddefaae6634d68350f4b738702f1103442c1af4", 
    "feature": "3a253b5c7ff62479e333c4f60dc41d46863e8905", 
    "nodes": [
            {"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [400, 0]}, 
            {"message": "Test commit 1", "id": "1ddefaae6634d68350f4b738702f1103442c1af4", "pos": [400.0, 200.0]}, 
    ]
};

var JSONData1_demo6 = {"directed": true, "HEAD": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", 
    "links": [
            {"source": 0, "target": 1}, 
            {"source": 1, "target": 2},
    ], 
    "multigraph": false, 
    "graph": [], 
    "labels": ["master", "feature"], 
    "master": "3a253b5c7ff62479e333c4f60dc41d46863e8905", 
    "feature": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", 
    "nodes": [
            {"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [400, 0]}, 
            {"message": "Test commit 1", "id": "1ddefaae6634d68350f4b738702f1103442c1af4", "pos": [200.0, 200.0]}, 
            {"message": "Test commit 2", "id": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "pos": [200.0, 400.0]},
    ]
};
var JSONData2_demo6 = {"directed": true, "HEAD": "3a253b5c7ff62479e333c4f60dc41d46863e8905", 
    "links": [
            {"source": 0, "target": 1}, 
            {"source": 1, "target": 2},
    ], 
    "multigraph": false, 
    "graph": [], 
    "labels": ["master", "feature"], 
    "master": "3a253b5c7ff62479e333c4f60dc41d46863e8905", 
    "feature": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", 
    "nodes": [
            {"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [400, 0]}, 
            {"message": "Test commit 1", "id": "1ddefaae6634d68350f4b738702f1103442c1af4", "pos": [200.0, 200.0]}, 
            {"message": "Test commit 2", "id": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "pos": [200.0, 400.0]},
    ]
};

var JSONData2_demo2 = {"directed": true, "HEAD": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", 
    "links": [
            {"source": 0, "target": 1}, 
            {"source": 1, "target": 2},
    ], 
    "multigraph": false, 
    "graph": [], 
    "labels": ["master", ], 
    "feature": "3a253b5c7ff62479e333c4f60dc41d46863e8905", 
    "master": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", 
    "nodes": [
            {"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [400, 0]}, 
            {"message": "Test commit 1", "id": "1ddefaae6634d68350f4b738702f1103442c1af4", "pos": [400.0, 200.0]}, 
            {"message": "Test commit 2", "id": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "pos": [400.0, 400.0]},
    ]
};

var JSONData1_demo3 = {"directed": true, "HEAD": "3a253b5c7ff62479e333c4f60dc41d46863e8905", 
    "links": [
    ], 
    "multigraph": false, 
    "graph": [], 
    "labels": ["master", "feature"], 
    "master": "3a253b5c7ff62479e333c4f60dc41d46863e8905", 
    "feature": "3a253b5c7ff62479e333c4f60dc41d46863e8905", 
    "nodes": [
            {"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [400, 0]}, 
    ]
};

var JSONData2_demo3 = {"directed": true, "HEAD": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", 
    "links": [
            {"source": 0, "target": 1}, 
            {"source": 1, "target": 2},
    ], 
    "multigraph": false, 
    "graph": [], 
    "labels": ["master", "feature"], 
    "master": "3a253b5c7ff62479e333c4f60dc41d46863e8905", 
    "feature": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", 
    "nodes": [
            {"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [400, 0]}, 
            {"message": "Test commit 1", "id": "1ddefaae6634d68350f4b738702f1103442c1af4", "pos": [200.0, 200.0]}, 
            {"message": "Test commit 2", "id": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "pos": [200.0, 400.0]},
    ]
};

var JSONData3_demo3 = {"directed": true, "HEAD": "3a253b5c7ff62479e333c4f60dc41d46863e8905", 
    "links": [
            {"source": 0, "target": 1}, 
            {"source": 1, "target": 2},
    ], 
    "multigraph": false, 
    "graph": [], 
    "labels": ["master", "feature"], 
    "master": "3a253b5c7ff62479e333c4f60dc41d46863e8905", 
    "feature": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", 
    "nodes": [
            {"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [400, 0]}, 
            {"message": "Test commit 1", "id": "1ddefaae6634d68350f4b738702f1103442c1af4", "pos": [200.0, 200.0]}, 
            {"message": "Test commit 2", "id": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "pos": [200.0, 400.0]},
    ]
};

var JSONData4_demo4 = {"directed": true, "HEAD": "590e14f6c62f904af769a4143fe067063cd5e684", 
    "links": [
            {"source": 0, "target": 1}, 
            {"source": 1, "target": 2},
            {"source": 0, "target": 3},
            {"source": 3, "target": 4},
            {"source": 2, "target": 4},
    ], 
    "multigraph": false, 
    "graph": [], 
    "labels": ["master", "feature"], 
    "master": "590e14f6c62f904af769a4143fe067063cd5e684", 
    "feature": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", 
    "nodes": [
            {"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [400, 0]}, 
            {"message": "Test commit 1", "id": "1ddefaae6634d68350f4b738702f1103442c1af4", "pos": [200.0, 200.0]}, 
            {"message": "Test commit 2", "id": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "pos": [200.0, 400.0]},
            {"message": "Test commit 3", "id": "b2e6afb9d645c70a48a0ad167141d4657d5f3059", "pos": [400.0, 300.0]},
            {"message": "Merge commit", "id": "590e14f6c62f904af769a4143fe067063cd5e684", "pos": [400.0, 600.0]},
    ]
};

var JSONData5_demo4 = {"directed": true, "HEAD": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", 
    "links": [
            {"source": 0, "target": 1}, 
            {"source": 1, "target": 2},
            {"source": 0, "target": 3},
            {"source": 3, "target": 4},
            {"source": 2, "target": 4},
    ], 
    "multigraph": false, 
    "graph": [], 
    "labels": ["master", "feature"], 
    "master": "590e14f6c62f904af769a4143fe067063cd5e684", 
    "feature": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", 
    "nodes": [
            {"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [400, 0]}, 
            {"message": "Test commit 1", "id": "1ddefaae6634d68350f4b738702f1103442c1af4", "pos": [200.0, 200.0]}, 
            {"message": "Test commit 2", "id": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "pos": [200.0, 400.0]},
            {"message": "Test commit 3", "id": "b2e6afb9d645c70a48a0ad167141d4657d5f3059", "pos": [400.0, 300.0]},
            {"message": "Merge commit", "id": "590e14f6c62f904af769a4143fe067063cd5e684", "pos": [400.0, 600.0]},
    ]
};

var JSONData6_demo4 = {"directed": true, "HEAD": "590e14f6c62f904af769a4143fe067063cd5e684", 
    "links": [
            {"source": 0, "target": 1}, 
            {"source": 1, "target": 2},
            {"source": 0, "target": 3},
            {"source": 3, "target": 4},
            {"source": 2, "target": 4},
    ], 
    "multigraph": false, 
    "graph": [], 
    "labels": ["master", "feature"], 
    "master": "590e14f6c62f904af769a4143fe067063cd5e684", 
    "feature": "590e14f6c62f904af769a4143fe067063cd5e684", 
    "nodes": [
            {"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [400, 0]}, 
            {"message": "Test commit 1", "id": "1ddefaae6634d68350f4b738702f1103442c1af4", "pos": [200.0, 200.0]}, 
            {"message": "Test commit 2", "id": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "pos": [200.0, 400.0]},
            {"message": "Test commit 3", "id": "b2e6afb9d645c70a48a0ad167141d4657d5f3059", "pos": [400.0, 300.0]},
            {"message": "Merge commit", "id": "590e14f6c62f904af769a4143fe067063cd5e684", "pos": [400.0, 600.0]},
    ]
};

var JSONData2_demo4 = {"directed": true, "HEAD": "b2e6afb9d645c70a48a0ad167141d4657d5f3059", 
    "links": [
            {"source": 0, "target": 1}, 
            {"source": 1, "target": 2},
            {"source": 0, "target": 3},
    ], 
    "multigraph": false, 
    "graph": [], 
    "labels": ["master", "feature"], 
    "master": "b2e6afb9d645c70a48a0ad167141d4657d5f3059", 
    "feature": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", 
    "nodes": [
            {"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [400, 0]}, 
            {"message": "Test commit 1", "id": "1ddefaae6634d68350f4b738702f1103442c1af4", "pos": [200.0, 200.0]}, 
            {"message": "Test commit 2", "id": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "pos": [200.0, 400.0]},
            {"message": "Test commit 3", "id": "b2e6afb9d645c70a48a0ad167141d4657d5f3059", "pos": [400.0, 300.0]},
    ]
};
var JSONData4_demo3 = {"directed": true, "HEAD": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", 
    "links": [
            {"source": 0, "target": 1}, 
            {"source": 1, "target": 2},
            {"source": 0, "target": 3},
    ], 
    "multigraph": false, 
    "graph": [], 
    "labels": ["master", "feature"], 
    "master": "b2e6afb9d645c70a48a0ad167141d4657d5f3059", 
    "feature": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", 
    "nodes": [
            {"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [400, 0]}, 
            {"message": "Test commit 1", "id": "1ddefaae6634d68350f4b738702f1103442c1af4", "pos": [200.0, 200.0]}, 
            {"message": "Test commit 2", "id": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "pos": [200.0, 400.0]},
            {"message": "Test commit 3", "id": "b2e6afb9d645c70a48a0ad167141d4657d5f3059", "pos": [400.0, 300.0]},
    ]
};
var JSONData3_demo4 = {"directed": true, "HEAD": "b2e6afb9d645c70a48a0ad167141d4657d5f3059", 
    "links": [
            {"source": 0, "target": 1}, 
    ], 
    "multigraph": false, 
    "graph": [], 
    "labels": ["master",], 
    "master": "b2e6afb9d645c70a48a0ad167141d4657d5f3059", 
    "nodes": [
            {"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [400, 0]}, 
            {"message": "Test commit 3", "id": "b2e6afb9d645c70a48a0ad167141d4657d5f3059", "pos": [400.0, 300.0]},
    ]
};

var JSONData4_demo5 = {"directed": true, "HEAD": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", 
    "links": [
            {"source": 1, "target": 2},
            {"source": 0, "target": 3},
    ], 
    "multigraph": false, 
    "graph": [], 
    "labels": ["master", "feature"], 
    "master": "b2e6afb9d645c70a48a0ad167141d4657d5f3059", 
    "feature": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", 
    "nodes": [
            {"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [400, 0]}, 
            {"message": "Test commit 1", "id": "1ddefaae6634d68350f4b738702f1103442c1af4", "pos": [200.0, 400.0]}, 
            {"message": "Test commit 2", "id": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "pos": [200.0, 600.0]},
            {"message": "Test commit 3", "id": "b2e6afb9d645c70a48a0ad167141d4657d5f3059", "pos": [400.0, 200.0]},
    ]
};

var JSONData5_demo5 = {"directed": true, "HEAD": "1b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", 
    "links": [
            {"source": 1, "target": 2},
            {"source": 0, "target": 3},
            {"source": 3, "target": 1},
    ], 
    "multigraph": false, 
    "graph": [], 
    "labels": ["master", "feature"], 
    "master": "b2e6afb9d645c70a48a0ad167141d4657d5f3059", 
    "feature": "1b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", 
    "nodes": [
            {"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [400, 0]}, 
            {"message": "Test commit 1", "id": "2ddefaae6634d68350f4b738702f1103442c1af4", "pos": [400.0, 400.0]}, 
            {"message": "Test commit 2", "id": "1b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "pos": [400.0, 600.0]},
            {"message": "Test commit 3", "id": "b2e6afb9d645c70a48a0ad167141d4657d5f3059", "pos": [400.0, 200.0]},
    ]
};


// data for demo1

    var JSONData0_demo1 = {"directed": true, "HEAD": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "links": [], "multigraph": false, "graph": [], "labels": ["master", "origin/master"], "origin/master": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "master": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "nodes": [{"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [400, 0]}, ]};

    var JSONData1_demo1 = {"directed": true, "HEAD": "1ddefaae6634d68350f4b738702f1103442c1af4", "links": [{"source": 0, "target": 1}, ], "multigraph": false, "graph": [], "labels": ["master", "origin/master"], "origin/master": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "master": "1ddefaae6634d68350f4b738702f1103442c1af4", "nodes": [{"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [400, 0]}, {"message": "Test commit 1", "id": "1ddefaae6634d68350f4b738702f1103442c1af4", "pos": [400.0, 200.0]} ]};

    var JSONData3_demo1 = {"directed": true, "HEAD": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "links": [{"source": 0, "target": 1}, {"source": 1, "target": 2}], "multigraph": false, "graph": [], "labels": ["master", "origin/master"], "origin/master": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "master": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "nodes": [{"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [400, 0]}, {"message": "Test commit 1", "id": "1ddefaae6634d68350f4b738702f1103442c1af4", "pos": [400.0, 200.0]}, {"message": "Test commit 2", "id": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "pos": [400.0, 400.0]}, ]};

// title data. Place at end of index.html

    var JSONData0_title = {"directed": true, "HEAD": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "links": [], "multigraph": false, "graph": [], "labels": [], "master": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "nodes": [{"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [100, 200]}, ]};

    var JSONData1_title = {"directed": true, "HEAD": "1ddefaae6634d68350f4b738702f1103442c1af4", "links": [{"source": 0, "target": 1}, ], "multigraph": false, "graph": [], "labels": [], "master": "1ddefaae6634d68350f4b738702f1103442c1af4", "nodes": [{"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [100, 200]}, {"message": "Press SPC to proceed", "id": "1ddefaae6634d68350f4b738702f1103442c1af4", "pos": [400.0, 200.0]} ]};

    var JSONData2_title = {"directed": true, "HEAD": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "links": [{"source": 0, "target": 1}, {"source": 1, "target": 2}], "multigraph": false, "graph": [], "labels": [], "master": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "nodes": [{"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [100, 200]}, {"message": "Press SPC to proceed", "id": "1ddefaae6634d68350f4b738702f1103442c1af4", "pos": [400.0, 200.0]}, {"message": "Press ? for tutorial", "id": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "pos": [700.0, 200.0]}, ]};

