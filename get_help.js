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
});

function openMenu() {
  document.getElementById("menuButton").classList.add("menu__btn1");
}

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

// $("#btn1").click(function () {
//   $("html,body").animate({
//       scrollTop: $("#book_now").offset().top
//     },
//     "slow"
//   );
// });

// $("#btn2").click(function () {
//   $("html,body").animate({
//       scrollTop: $("#peer_support").offset().top
//     },
//     "slow"
//   );
// });

$(document).ready(function () {
  var controller = new ScrollMagic.Controller();
  var scene0 = new ScrollMagic.Scene({
      triggerElement: "container1"
    })
    .setClassToggle("#text1", "comeup")
    .addTo(controller);
  var scene1 = new ScrollMagic.Scene({
      triggerElement: "container1"
    })
    .setClassToggle("#text1_1", "comeup")
    .addTo(controller);
  var scene2 = new ScrollMagic.Scene({
      triggerElement: "container1"
    })
    .setClassToggle("#btn1", "comeup")
    .addTo(controller);
  var scene3 = new ScrollMagic.Scene({
      triggerElement: "container1"
    })
    .setClassToggle("#text4", "comeup")
    .addTo(controller);
  var scene4 = new ScrollMagic.Scene({
      triggerElement: "container1"
    })
    .setClassToggle("#text5", "comeup")
    .addTo(controller);
  var scene5 = new ScrollMagic.Scene({
      triggerElement: "container1"
    })
    .setClassToggle("#text6", "comeup")
    .addTo(controller);
  var scene6 = new ScrollMagic.Scene({
      triggerElement: "container1"
    })
    .setClassToggle("#c", "comeup")
    .addTo(controller);
  var scene7 = new ScrollMagic.Scene({
      triggerElement: "container1"
    })
    .setClassToggle("#u", "comeup")
    .addTo(controller);
  var scene8 = new ScrollMagic.Scene({
      triggerElement: "container1"
    })
    .setClassToggle("#f", "comeup")
    .addTo(controller);
  var scene9 = new ScrollMagic.Scene({
      triggerElement: "container3"
    })
    .setClassToggle("#text3", "comeup")
    .addTo(controller);
  var scene10 = new ScrollMagic.Scene({
      triggerElement: "container3"
    })
    .setClassToggle("#b1", "comeup")
    .addTo(controller);
  var scene11 = new ScrollMagic.Scene({
      triggerElement: "container3"
    })
    .setClassToggle("#b2", "comeup")
    .addTo(controller);
  var scene12 = new ScrollMagic.Scene({
      triggerElement: "container3"
    })
    .setClassToggle("#b3", "comeup")
    .addTo(controller);
  var scene13 = new ScrollMagic.Scene({
      triggerElement: "container3"
    })
    .setClassToggle("#psycho_title", "comeup")
    .addTo(controller);
  var scene14 = new ScrollMagic.Scene({
      triggerElement: "container3"
    })
    .setClassToggle("#slider", "comeup")
    .addTo(controller);
  var scene15 = new ScrollMagic.Scene({
      triggerElement: "container3"
    })
    .setClassToggle("#story_title", "comeup")
    .addTo(controller);
  var scene16 = new ScrollMagic.Scene({
      triggerElement: "container3"
    })
    .setClassToggle("#story_0", "comeup")
    .addTo(controller);
  var scene17 = new ScrollMagic.Scene({
      triggerElement: "container3"
    })
    .setClassToggle("#story_name", "comeup")
    .addTo(controller);
  var scene18 = new ScrollMagic.Scene({
      triggerElement: "container4"
    })
    .setClassToggle("#text2", "comeup")
    .addTo(controller);
  var scene19 = new ScrollMagic.Scene({
      triggerElement: "container4"
    })
    .setClassToggle("#text2_0", "comeup")
    .addTo(controller);
  var scene20 = new ScrollMagic.Scene({
      triggerElement: "container4"
    })
    .setClassToggle("#text2_1", "comeup")
    .addTo(controller);
  var scene21 = new ScrollMagic.Scene({
      triggerElement: "container4"
    })
    .setClassToggle("#i", "comeup")
    .addTo(controller);
  var scene21 = new ScrollMagic.Scene({
      triggerElement: "container4"
    })
    .setClassToggle("#text2_2", "comeup")
    .addTo(controller);
  var scene22 = new ScrollMagic.Scene({
      triggerElement: "container4"
    })
    .setClassToggle("#e", "comeup")
    .addTo(controller);
  var scene23 = new ScrollMagic.Scene({
      triggerElement: "container4"
    })
    .setClassToggle("#text2_3", "comeup")
    .addTo(controller);
  var scene24 = new ScrollMagic.Scene({
      triggerElement: "container4"
    })
    .setClassToggle("#a", "comeup")
    .addTo(controller);
  var scene25 = new ScrollMagic.Scene({
      triggerElement: "container4"
    })
    .setClassToggle("#btn2", "comeup")
    .addTo(controller);
  var scene26 = new ScrollMagic.Scene({
      triggerElement: "container4"
    })
    .setClassToggle("#para_professional", "bg_fill")
    .addTo(controller);
});

var symbols = ["*", "#", "%", "&", "?", "@"];
var speed = 2000;
setInterval(whole_c, speed);

function whole_c() {
  var i = 0;
  var timer_c = setInterval(type_c, 90);

  function type_c() {
    if (i < 5) {
      var sym = symbols[Math.floor(Math.random() * 6)];
      document.getElementById("c").textContent = sym;
      i++;
    } else {
      clearInterval(timer_c);
      timer_c = null;
      document.getElementById("c").textContent = "C";
    }
  }
}
setInterval(whole_u, speed);

function whole_u() {
  var j = 0;
  var timer_u = setInterval(type_u, 90);

  function type_u() {
    if (j < 5) {
      var sym = symbols[Math.floor(Math.random() * 6)];
      document.getElementById("u").textContent = sym;
      j++;
    } else {
      clearInterval(timer_u);
      timer_u = null;
      document.getElementById("u").textContent = "U";
    }
  }
}
setInterval(whole_f, speed);

function whole_f() {
  var k = 0;
  var timer_f = setInterval(type_f, 90);

  function type_f() {
    if (k < 5) {
      var sym = symbols[Math.floor(Math.random() * 6)];
      document.getElementById("f").innerHTML = sym;
      k++;
    } else {
      clearInterval(timer_f);
      timer_f = null;
      document.getElementById("f").textContent = "F";
    }
  }
}
setInterval(whole_i, speed);

function whole_i() {
  var i = 0;
  var timer_i = setInterval(type_i, 90);

  function type_i() {
    if (i < 5) {
      var sym = symbols[Math.floor(Math.random() * 6)];
      document.getElementById("i").textContent = sym;
      i++;
    } else {
      clearInterval(timer_i);
      timer_i = null;
      document.getElementById("i").textContent = "I";
    }
  }
}
setInterval(whole_e, speed);

function whole_e() {
  var i = 0;
  var timer_e = setInterval(type_e, 90);

  function type_e() {
    if (i < 5) {
      var sym = symbols[Math.floor(Math.random() * 6)];
      document.getElementById("e").textContent = sym;
      i++;
    } else {
      clearInterval(timer_e);
      timer_e = null;
      document.getElementById("e").textContent = "E";
    }
  }
}
setInterval(whole_a, speed);

function whole_a() {
  var i = 0;
  var timer_a = setInterval(type_a, 90);

  function type_a() {
    if (i < 5) {
      var sym = symbols[Math.floor(Math.random() * 6)];
      document.getElementById("a").textContent = sym;
      i++;
    } else {
      clearInterval(timer_a);
      timer_a = null;
      document.getElementById("a").textContent = "A";
    }
  }
}
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var z;
//   var slides = document.getElementsByClassName("container3_2");
//   if (n > slides.length) {
//     slideIndex = 1
//   }
//   if (n < 1) {
//     slideIndex = slides.length
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex - 1].style.display = "block";
// }