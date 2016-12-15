$(document).ready(function() {
    $('body').append('<div class="container"></div>');
    $('.container').append('<table></table>');
    for (var i=1; i<=16; i++) {
        $('table').append('<tr></tr>');
        for (var j=1; j<=16; j++) {
            $('table tr:nth-last-child(1)').append('<td></td>');
        }
    }
    $('.container').append('<button>Reset the Sketch Pad</button>');
    $('td').on('mouseenter', (function() {
	$(this).css('opacity', '+=0.15');
    }));
    $('button').click(function() {
	var $dim = 640 / ($('td').width());
	var newSize = prompt("You've been using a " + $dim + "x" + $dim + " block grid, but you can adjust this now. Enter a number 'X' below, and the new grid will be 'X' blocks high by 'X' blocks wide.", 64);
	var newDim = 640 / newSize;
	$('table').empty();
	for (var i=1; i<=newSize; i++) {
	    $('table').append('<tr></tr>');
	    for (var j=1; j<=newSize; j++) {
		$('table tr:nth-last-child(1)').append('<td></td>');
	    }
	}
	$('td').height(newDim + "px");
	$('td').width(newDim + "px");
	$('td').on('mouseenter', (function() {
	    $(this).css('opacity', '+=0.15');
	}));
    });
});
