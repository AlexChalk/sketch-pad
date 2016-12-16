$(document).ready(function() {

/* Renders initial outlines. */

    $('body').append('<div class="container-outer"></div>');
    $('.container-outer').append('<div class="container-inner"></div>');
    $('.container-inner').append('<table></table>');

/* Declares table population function */  

    populateTable = function() {
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
    };

/* Declares initial dimensions and populates table. */

    var lineLength = 16;
    var tableDimensions = 640;
    var cellDimensions = 40;
    populateTable();

/* Renders reset button. */

    $('.container-outer').append('<button>Reset the Sketch Pad</button>');

/* Declares sketch-pad cell behaviour on mouse hover. */ 

    $(document).on("mouseenter", "td", function() {
	$(this).css("opacity", "+=0.15");
    });

/* Provides reset sketch pad functionality. */

    $('button').click(function() {

/*Calculates existing cell density of sketch pad and communicates it to user. 
Also prompts user to redefine cell density, ensuring they enter a valid value.*/

	tableDimensions = ($('table').width());  
	cellDimensions = ($('td').width());
	lineLength = tableDimensions / cellDimensions;
	do {var userInput = prompt("You've been using a " + lineLength + "x" + lineLength + " block grid, but you can adjust this now. Enter a number 'X' below, and the new grid will be 'X' blocks high by 'X' blocks wide. (If you don't enter a whole number between 1-100, this command will just repeat.)");
	   } while(!(userInput >= 1 && userInput <= 100 && userInput % 1 === 0));
	lineLength = userInput;
	
/* Ensures cell size is an integer and adjusts table size to neatly accommodate cells */

	while(tableDimensions % lineLength != 0) {
	    sortOutTable = Math.round(tableDimensions / lineLength);
	    tableDimensions = (lineLength * sortOutTable);
	}
	cellDimensions = (tableDimensions / lineLength);

/* Empties existing table and re-renders table in line with new user specifications. */

	$('table').empty();
	populateTable();
    });
});
