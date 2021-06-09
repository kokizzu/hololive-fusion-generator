function factorial(number) {
	if (!Number.isInteger(number))
		throw new Error("number must be an integer");
	if (number < 0)
		throw new Error("number must be positive");
	if (number === 0)
		return 1;
	return number * factorial(number - 1);
}

function calculateVariations(totalElements, elementsToChoose) {
	// order important, no repetitions
	return Math.round(factorial(totalElements) / factorial(totalElements - elementsToChoose));
}

function getObjectLength(obj) {
	return Object.keys(obj).length;
}

function getRandomInt(maxExclusive) {
	return Math.floor(maxExclusive * Math.random());
}

function getRandomIntUnique(maxExclusive, restricted) {
	if (typeof restricted === "number")
		restricted = [restricted];
	let newRandomInt = restricted[0];
	while (restricted.includes(newRandomInt)) {
		newRandomInt = getRandomInt(maxExclusive);
	}
	return newRandomInt;
}

function mod(x, m) {
	return (x % m + m) % m;
}

module.exports = {
	calculateVariations,
	getObjectLength,
	getRandomInt,
	getRandomIntUnique,
	mod
};
