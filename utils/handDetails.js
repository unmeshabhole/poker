function getHandDetails(cards) {
  const facesOriginal = cards.map((a) => a[0]);
  // //Replace T with 10, J with 11, Q with 12, K with 13 and A with 14
  const facesReplaced = facesOriginal.map((x) => {
    if (x === "T") {
      return 10;
    } else if (x === "J") {
      return 11;
    } else if (x === "Q") {
      return 12;
    } else if (x === "K") {
      return 13;
    } else if (x === "A") {
      return 14;
    } else {
      return x;
    }
  });

  var faces = facesReplaced.map(function (item) {
    return parseInt(item);
  });
  faces = faces.sort(function (a, b) {
    return a - b;
  });

  const suits = cards.map((a) => a[1]).sort();
  const counts = faces.reduce(count, {});
  const duplicates = Object.values(counts).reduce(count, {});
  const flush = suits[0] === suits[4];
  const first = faces[0];
  const straight = faces.every((f, index) => f - first === index);
  let rank =
    (flush && straight && 1) ||
    (duplicates[4] && 2) ||
    (duplicates[3] && duplicates[2] && 3) ||
    (flush && 4) ||
    (straight && 5) ||
    (duplicates[3] && 6) ||
    (duplicates[2] > 1 && 7) ||
    (duplicates[2] && 8) ||
    9;

  return { rank, value: faces.sort(byCountFirst).join("") };

  function byCountFirst(a, b) {
    //Counts are in reverse order - bigger is better
    const countDiff = counts[b] - counts[a];
    if (countDiff) return countDiff; // If counts don't match return
    return b > a ? -1 : b === a ? 0 : 1;
  }

  // This function helps to find number of duplicates for each number in cards
  function count(c, a) {
    c[a] = (c[a] || 0) + 1;
    return c;
  }
}

module.exports = { getHandDetails };
