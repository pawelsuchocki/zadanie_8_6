var a = 2;
var b = 4;
var value = (a * a) - (2 * a * b) - (b * b);
var value = value < 0 ? 'wynik ujemny' : 'wynik dodatni';
console.log(value);
if (value == 0) {
	console.log('wynik jest zerowy');
}