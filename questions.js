function expand(num) {
    var idName = "hide" + num;
    var iconName = "icon" + num;
    if (document.getElementById(idName).style.display === '' || document.getElementById(idName).style.display === 'none') {
        document.getElementById(idName).style.display = 'block';
        document.getElementById(iconName).classList.add('plusI');
    } else {
        document.getElementById(idName).style.display = 'none';
        document.getElementById(iconName).classList.remove('plusI');
    }
}