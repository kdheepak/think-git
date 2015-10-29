Reveal.initialize({
// Display controls in the bottom right corner
    controls: true,

    // Display a presentation progress bar
    progress: true,

    // Display the page number of the current slide
    slideNumber: false,

    // Push each slide change to the browser history
    history: false,

    // Enable keyboard shortcuts for navigation
    keyboard: true,

    // Enable the slide overview mode
    overview: true,

    // Vertical centering of slides
    center: true,

    // Enables touch navigation on devices with touch input
    touch: true,

    // Loop the presentation
    loop: false,

    // Change the presentation direction to be RTL
    rtl: false,

    // Turns fragments on and off globally
    fragments: true,

    // Flags if the presentation is running in an embedded mode,
    // i.e. contained within a limited portion of the screen
    embedded: false,

    // Flags if we should show a help overlay when the questionmark
    // key is pressed
    help: true,

    // Flags if speaker notes should be visible to all viewers
    showNotes: false,

    // Number of milliseconds between automatically proceeding to the
    // next slide, disabled when set to 0, this value can be overwritten
    // by using a data-autoslide attribute on your slides
    autoSlide: 0,

    // Stop auto-sliding after user input
    autoSlideStoppable: true,

    // Enable slide navigation via mouse wheel
    mouseWheel: false,

    // Hides the address bar on mobile devices
    hideAddressBar: true,

    // Opens links in an iframe preview overlay
    previewLinks: false,

    // Transition style
    transition: 'none', // none/fade/slide/convex/concave/zoom

    // Transition speed
    transitionSpeed: 'default', // default/fast/slow

    // Transition style for full page slide backgrounds
    backgroundTransition: 'default', // none/fade/slide/convex/concave/zoom

    // Number of slides away from the current that are visible
    viewDistance: 3,

    // Parallax background image
    parallaxBackgroundImage: '', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"

    // Parallax background size
    parallaxBackgroundSize: '', // CSS syntax, e.g. "2100px 900px"

    // Amount to move parallax background (horizontal and vertical) on slide change
    // Number, e.g. 100
    parallaxBackgroundHorizontal: '',
    parallaxBackgroundVertical: ''
}
);


Reveal.addEventListener( 'demo3-event', function() {
    var vis = d3.select("#demo3-chart").style("padding-top", "100px").style("padding-bottom", "100px");

    var h = 50*1.5*JSONData2_demo1.nodes.length;

    var data = JSONData2_demo1;
    var scaleY = d3.scale.linear()
        .range([d3.min(data.nodes, function(d){return d.pos[1]} ), d3.max(data.nodes, function(d){return d.pos[1]} )])
        .domain([h, 0]);

Reveal.addEventListener( 'fragmentshown', function( event ) {
    var classAttribute = event.fragment.getAttribute("class")
    if (classAttribute.indexOf("demo3-git-add") > -1) {
        setTimeout(displayData, 500, JSONData0_demo1, vis, h, scaleY);
        // do stuff
    }
    if (classAttribute.indexOf("demo3-git-commit-1") > -1) {
        setTimeout(displayData, 500, JSONData1_demo1, vis, h, scaleY);
        // do stuff
    }
    if (classAttribute.indexOf("demo3-git-commit-2") > -1) {
        setTimeout(displayData, 500, JSONData2_demo1, vis, h, scaleY);
        // do stuff
    }
    if (classAttribute.indexOf("demo3-git-push") > -1) {
        setTimeout(displayData, 500, JSONData3_demo1, vis, h, scaleY);
        // do stuff
    }
    //setTimeout(displayData, 1500, JSONData1_demo1, vis, h);
    //setTimeout(displayData, 2500, JSONData2_demo1, vis, h);
} );   

Reveal.addEventListener( 'fragmenthidden', function( event ) {
    console.log(event.fragment.getAttribute("class"))
    var classAttribute = event.fragment.getAttribute("class")
    if (classAttribute.indexOf("demo3-git-add") > -1) {
        setTimeout(displayData, 0, JSONData0, vis, h, scaleY);
        // do stuff
    }
    if (classAttribute.indexOf("demo3-git-commit-1") > -1) {
        setTimeout(displayData, 500, JSONData0_demo1, vis, h, scaleY);
        // do stuff
    }
    if (classAttribute.indexOf("demo3-git-commit-2") > -1) {
        setTimeout(displayData, 500, JSONData1_demo1, vis, h, scaleY);
        // do stuff
    }
    if (classAttribute.indexOf("demo3-git-push") > -1) {
        setTimeout(displayData, 500, JSONData2_demo1, vis, h, scaleY);
        // do stuff
    }
} );

} ); // end addEventListener
Reveal.addEventListener( 'demo2-event', function() {
    var vis = d3.select("#demo2-chart").style("padding-top", "100px").style("padding-bottom", "100px");

    var h = 50*1.5*JSONData2_demo2.nodes.length;

    var data = JSONData2_demo1;
    var scaleY = d3.scale.linear()
        .range([d3.min(data.nodes, function(d){return d.pos[1]} ), d3.max(data.nodes, function(d){return d.pos[1]} )])
        .domain([h, 0]);
        setTimeout(displayData, 500, JSONData0_demo2, vis, h, scaleY);

Reveal.addEventListener( 'fragmentshown', function( event ) {
    var classAttribute = event.fragment.getAttribute("class")
    if (classAttribute.indexOf("demo2-git-checkout-1") > -1) {
        setTimeout(displayData, 500, JSONData1_demo2, vis, h, scaleY);
        // do stuff
    }
    if (classAttribute.indexOf("demo2-git-checkout-2") > -1) {
        setTimeout(displayData, 500, JSONData2_demo2, vis, h, scaleY);
        // do stuff
    }
    if (classAttribute.indexOf("demo2-git-merge") > -1) {
        setTimeout(displayData, 500, JSONData0_demo2, vis, h, scaleY);
        // do stuff
    }
    //setTimeout(displayData, 1500, JSONData1_demo1, vis, h);
    //setTimeout(displayData, 2500, JSONData2_demo1, vis, h);
} );   

Reveal.addEventListener( 'fragmenthidden', function( event ) {
    console.log(event.fragment.getAttribute("class"))
    var classAttribute = event.fragment.getAttribute("class")
    if (classAttribute.indexOf("demo2-git-checkout-1") > -1) {
        setTimeout(displayData, 500, JSONData0_demo2, vis, h, scaleY);
        // do stuff
    }
    if (classAttribute.indexOf("demo2-git-checkout-2") > -1) {
        setTimeout(displayData, 500, JSONData1_demo2, vis, h, scaleY);
        // do stuff
    }
    if (classAttribute.indexOf("demo2-git-merge") > -1) {
        setTimeout(displayData, 500, JSONData2_demo2, vis, h, scaleY);
        // do stuff
    }
} );

} ); // end addEventListener


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
        setTimeout(displayData, 500, JSONData0_demo1, vis, h, scaleY);
        // do stuff
    }
    if (classAttribute.indexOf("demo1-git-commit-1") > -1) {
        setTimeout(displayData, 500, JSONData1_demo1, vis, h, scaleY);
        // do stuff
    }
    if (classAttribute.indexOf("demo1-git-commit-2") > -1) {
        setTimeout(displayData, 500, JSONData2_demo1, vis, h, scaleY);
        // do stuff
    }
    if (classAttribute.indexOf("demo1-git-push") > -1) {
        setTimeout(displayData, 500, JSONData3_demo1, vis, h, scaleY);
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
        setTimeout(displayData, 500, JSONData0_demo1, vis, h, scaleY);
        // do stuff
    }
    if (classAttribute.indexOf("demo1-git-commit-2") > -1) {
        setTimeout(displayData, 500, JSONData1_demo1, vis, h, scaleY);
        // do stuff
    }
    if (classAttribute.indexOf("demo1-git-push") > -1) {
        setTimeout(displayData, 500, JSONData2_demo1, vis, h, scaleY);
        // do stuff
    }
} );

} ); // end addEventListener

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
