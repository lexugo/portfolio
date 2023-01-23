// https://editor.p5js.org/laquerre.hugo/sketches/mjB5WwDWT

var w = 500;
var h = 500;

var peaks = 10

function setup() {
	createCanvas(w, h);
	background(0)
	stroke(255)

	// Distances between each peak
	var sum = randomGaussian(w * 0.1)
	var distances = [sum]
	while ((sum += ndistance()) < w * 0.95) {
		distances.push(sum);
	}

	// Height of each peak
	var peaks = [{ x: 0, y: h }]
	for (n = 0; n < distances.length; n++) {
		peaks.push({ x: distances[n], y: npeak(distances[n]) })
	}
	peaks.push({ x: w, y: h })

	// Draw
	for (n = 0; n < peaks.length - 1; n++) {
		var from = peaks[n]
		var to = peaks[n + 1]

		line(from.x, from.y, to.x, to.y)
	}
}

function ndistance() {
	var mean = w / peaks
	return constrain(randomGaussian(mean, 42), mean * 0.1, mean * 2)
}

function npeak(seed) {
	return abs(noise(seed * 1000)) * -300 + h
}
