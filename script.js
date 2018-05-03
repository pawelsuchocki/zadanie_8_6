var a = 2,
    b = 4;

var value = (a * a) - (2 * a * b) - (b * b);

if (value < 0) {
	console.log('wynik jest ujemny');
} else if (value > 0) {
	console.log('wynik jest dodatni');
} else {
	console.log('wynik jest zerowy');
}