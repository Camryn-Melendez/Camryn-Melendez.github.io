//Scrolls to a specific position based on the div ID given.
function scrollToSection( ID ) {
    var posToScrollTo = $( ID ).position();
    window.scrollTo( 0, posToScrollTo.top + 150 );
}

document.getElementById( 'languages-button' ).onclick = function() { scrollToSection( '#languages-section' ) } ;

document.getElementById( 'vcs-button' ).onclick = function() { scrollToSection( '#vcs-section' ) } ;

document.getElementById( 'coursework-button' ).onclick = function() { scrollToSection( '#coursework-section' ) } ;


