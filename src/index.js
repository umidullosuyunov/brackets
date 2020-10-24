module.exports = function check(str, bracketsConfig) {
  // your solution
  const tracker = [];
  const pairs = Object.fromEntries(bracketsConfig)
  str.split``.map((s) => {
    tracker.length && pairs[tracker.slice(-1)[0]] === s
      ? tracker.pop()
      : tracker.push(s);
  });

  return !tracker.length;
}