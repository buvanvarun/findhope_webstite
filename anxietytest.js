(function () {
    var questions = [
        'Feeling <span style="color: #70db70;">nervous</span>, anxious, or on edge',
        'Not being able to stop or control <span style="color: #70db70;">worrying</span>',
        '<span style="color: #70db70;">Worrying</span> too much about different things',
        'Trouble <span style="color: #70db70;">relaxing</span>',
        'Being so <span style="color: #70db70;">restless</span> that it\'s hard to sit still',
        'Becoming easily <span style="color: #70db70;">annoyed</span> or irritable',
        'Feeling <span style="color: #70db70;">afraid</span> as if something awful might happen '

    ];
    var ch = 0;
    var depressionCount = 0;

    displayQuestions();
    var width = (screen.availWidth / 7);
    var barwidth = 0;

    function displayQuestions() {
        if (ch < 7) {
            document.getElementById("q").innerHTML =
                `<span class="anim">` + questions[ch] + `</span>`;
            barwidth += width;
            document.getElementById('progressbar').style.width = barwidth.toString() + 'px';
            ch++;
        } else {
            barwidth += width;
            document.getElementById('progressbar').style.width = barwidth.toString() + 'px';
            displayResult(depressionCount);
        }
    }

    var o1 = document.getElementById("o1");
    var o2 = document.getElementById("o2");
    var o3 = document.getElementById("o3");
    var o4 = document.getElementById("o4");

    o1.onclick = function () {
        displayQuestions();
    };
    o2.onclick = function () {
        depressionCount += 1;
        displayQuestions();
    };
    o3.onclick = function () {
        depressionCount += 2;
        displayQuestions();
    };
    o4.onclick = function () {
        depressionCount += 3;
        displayQuestions();
    };
})();

function displayResult(s) {
    document.getElementById("question").classList.add("opac");
    document.getElementById("options").classList.add("opac");
    document.getElementById("res").classList.remove("opac");
    var str;
    if (s <= 5) {
        str = "Minimal anxiety";
    } else if (s > 5 && s <= 9) {
        str = "Mild anxiety";
    } else if (s > 9 && s <= 14) {
        str = "moderate anxiety";
    } else {
        str = "severe anxiety"
    }

    document.getElementById("r").innerHTML = "Result:\n" + str;
    console.log(s);
}

$(document).ready(function () {
    var controller = new ScrollMagic.Controller();
    var scene0 = new ScrollMagic.Scene({
            triggerElement: "#container2"
        })
        .setClassToggle("#o1", "comeup")
        .addTo(controller);
});