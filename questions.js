var currentTab = 0;
showTab(currentTab);

function showTab(n) {
    var x = document.getElementsByClassName('test_container');
    document.getElementById('warn').innerHTML = ''
    x[n].style.display = 'flex';
    if (n == (x.length - 1)) {
        document.getElementById('button').innerHTML = 'Submit'
        resultHandler();
    }
}

function nextQuestion() {
    var x = document.getElementsByClassName("test_container");
    if (!validateForm()) {
        return false;
    }
    x[currentTab].style.display = 'none';
    currentTab += 1;
    if (currentTab >= x.length) {
        return false;
    }
    console.log(currentTab)
    showTab(currentTab);
}

function validateForm() {
    var x, y, i, valid = true;
    x = document.getElementsByClassName('test_container')
    y = x[currentTab].getElementsByTagName('textarea');
    for (i = 0; i < y.length; i++) {
        if (y[i].value == '') {
            document.getElementById('warn').innerHTML = 'Answer all the questions to continue';
            valid = false
        }
    }
    return valid
}

function resultHandler() {
    console.log("asfkas");
    var result = document.getElementById('result');
    var x = document.getElementsByClassName('test_container');
    for (var i = 0; i < x.length; i++) {
        var y = x[i].getElementsByTagName('textarea');
        for (var j = 0; j < y.length; j++) {
            var p = document.createElement('p');
            p.innerHTML = y[j].value;
            result.appendChild(p);
        }
    }
    result.style.display = 'block';
}