const transpose = require("./matrix_transposition");

const wordSearch = (letters, word) => {
  if (isFound(letters, word, "forward")) {
    return true;
  }

  let thisArray = transpose(letters);
  if (isFound(thisArray, word, "forward")) {
    return true;
  }

  if (isFound(letters, word, "backward")) {
    return true;
  }

  if (isFound(letters, word, "backward")) {
    return true;
  }

  return false;
};

const isFound = function (letters, word, direction) {
  if (direction === "forward") {
    const horizontalJoin = letters.map((ls) => ls.join(""));
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
  }
  if (direction === "backward") {
    const horizontalJoin = letters.map((ls) => ls.reverse().join(""));

    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
  }
  return false;
};

module.exports = wordSearch;