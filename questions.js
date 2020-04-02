function expand(num) {
    var idName = "hide" + num;
    var iconName = "icon" + num;
    if (document.getElementById(idName).style.display === '' || document.getElementById(idName).style.display === 'none') {
        console.log("AS");
        document.getElementById(idName).style.display = 'block';
        document.getElementById(iconName).classList.add('plusI');
    } else {
        console.log("As");
        document.getElementById(idName).style.display = 'none';
        document.getElementById(iconName).classList.remove('plusI');
    }
}