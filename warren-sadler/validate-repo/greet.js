function greet(name) {
  // Trim surrounding whitespace but preserve internal spaces
  if (typeof name === 'string') {
    name = name.trim();
  }

  return `Hello, ${name}!`;
}

module.exports = greet;
