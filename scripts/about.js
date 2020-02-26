//hover photo feature
function imgOver(id) {
    document.getElementById(id).src="images/Profile.jpg"
}
function imgOut(id) {
    document.getElementById(id).src="images/me.jpg"
}

document.getElementById( 'photo' ).onmouseover = function() { imgOver( 'photo' ) };
document.getElementById( 'photo' ).onmouseout = function() { imgOut( 'photo' ) };






