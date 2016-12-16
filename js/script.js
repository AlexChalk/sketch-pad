$(document).ready(function() {
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
    $('td').on('mouseenter', (function() {
	$(this).css('opacity', '+=0.15');
    }));
    $('button').click(function() {
	var $tableDim = ($('table').width())  
	var $dim = $tableDim / ($('td').width());
	var lineLength = 16;
	do {var lineLength = prompt("You've been using a " + $dim + "x" + $dim + " block grid, but you can adjust this now. Enter a number 'X' below, and the new grid will be 'X' blocks high by 'X' blocks wide. (If you don't enter a whole number between 1-100, this command will just repeat.)");
	   } while(!(lineLength >= 1 && lineLength <= 100 && lineLength % 1 === 0));
	while($tableDim % lineLength != 0) {
	    var sortOutTable = Math.round($tableDim / lineLength);
	    var $tableDim = (lineLength * sortOutTable);
	}
	var tdDim = ($tableDim / lineLength);
	$('table').empty();
	for (var i=1; i<=lineLength ; i++) {
	    $('table').append('<tr></tr>');
	    for (var j=1; j<=lineLength; j++) {
		$('table tr:nth-last-child(1)').append('<td></td>');
	    }
	}
	$('table').height($tableDim + "px");
	$('table').width($tableDim + "px");
	$('td').height(tdDim + "px");
	$('td').width(tdDim + "px");
	$('td').on('mouseenter', (function() {
	    $(this).css('opacity', '+=0.15');
	}));
    });
});
