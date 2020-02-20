//Scroll the window to the appropriate section when a link in the sidebar is pressed
var languages = $('languages-button');
$('window').animate({scrollTop: languages.position().top});

var vcs = $('vcs-button');
$('window').animate({scrollTop: vcs.position().top});

document.getElementById('languages-button').onclick = function() {
    var div = $('accordionExample');
    $('window').animate({scrollTop: div.position().top});
}