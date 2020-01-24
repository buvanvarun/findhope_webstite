function onclik() {
    if (document.getElementById("menu").style.visibility == "hidden") {
        document.getElementById("menu1").style.top = "-120vw";
        setTimeout(function () {
            document.getElementById("menu2").style.top = "-120vw";
        }, 200);
        setTimeout(function () {
            document.getElementById("menu").style.visibility = "visible";
        }, 200);
    } else {
        document.getElementById("menu1").style.top = "-250vw";
        setTimeout(function () {
            document.getElementById("menu2").style.top = "-250vw";
        }, 200);
        setTimeout(function () {
            document.getElementById("menu").style.visibility = "hidden";
        }, 200);
    }
}
$(document).ready(function () {
    var controller = new ScrollMagic.Controller();
    var scene1 = new ScrollMagic.Scene({
            triggerElement: "#t1"
        })
        .setClassToggle("#content_box1", "content_box_ani")
        .addTo(controller);
    var scene2 = new ScrollMagic.Scene({
            triggerElement: "#t1"
        })
        .setClassToggle("#content_box2", "content_box_ani")
        .addTo(controller);
    var scene3 = new ScrollMagic.Scene({
            triggerElement: "#t1"
        })
        .setClassToggle("#content_box3", "content_box_ani")
        .addTo(controller);
})