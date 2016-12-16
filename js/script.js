$(document).ready(function() {

/* Renders initial sketch pad. */

    $('body').append('<div class="container-outer"></div>');
    $('.container-outer').append('<div class="container-inner"></div>');
    $('.container-inner').append('<table></table>');
    for (var i=1; i<=16; i++) {
        $('table').append('<tr></tr>');
        for (var j=1; j<=16; j++) {
            $('table tr:nth-last-child(1)').append('<td></td>');
        }
    }
    $('.container-outer').append('<button>Reset the Sketch Pad</button>');

/* Controls sketch-pad cell behaviour on mouse hover. */ 

    $('td').on('mouseenter', (function() {
	$(this).css('opacity', '+=0.15');
    }));

/* Provides reset sketch pad functionality. */

    $('button').click(function() {

/*Calculates existing cell density of sketch pad and communicates it to user. 
Also prompts user to redefine cell density, ensuring they enter a valid value.*/

	var tableDimensions = ($('table').width());  
	var cellDimensions = ($('td').width());
	var lineLength = tableDimensions / cellDimensions;
	do {var userInput = prompt("You've been using a " + lineLength + "x" + lineLength + " block grid, but you can adjust this now. Enter a number 'X' below, and the new grid will be 'X' blocks high by 'X' blocks wide. (If you don't enter a whole number between 1-100, this command will just repeat.)");
	   } while(!(userInput >= 1 && userInput <= 100 && userInput % 1 === 0));
	var lineLength = userInput;
	
/* Ensures cells fit neatly within table */

	while(tableDimensions % lineLength != 0) {
	    var sortOutTable = Math.round(tableDimensions / lineLength);
	    var tableDimensions = (lineLength * sortOutTable);
	}
	var cellDimensions = (tableDimensions / lineLength);

/* Empties existing table */

	$('table').empty();

/* Re-renders table in line with new user specifications. */

	for (var i=1; i<=lineLength ; i++) {
	    $('table').append('<tr></tr>');
	    for (var j=1; j<=lineLength; j++) {
		$('table tr:nth-last-child(1)').append('<td></td>');
	    }
	}
	$('table').height(tableDimensions + "px");
	$('table').width(tableDimensions + "px");
	$('td').height(cellDimensions + "px");
	$('td').width(cellDimensions + "px");

/* Re-implements sketch-pad cell behaviour on mouse hover. */
	
	$('td').on('mouseenter', (function() {
	    $(this).css('opacity', '+=0.15');
	}));
    });
});
