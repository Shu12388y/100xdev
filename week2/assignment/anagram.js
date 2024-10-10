function anagram(t, s) {
  let count = 0;
  for (let i = 0; i < t.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (t1[i] == t2[j]) {
        count += 1;
      }
    }
  }
  if (count == t1.length) {
    return true;
  } else {
    return false;
  }
}



console.log(anagram('rail safety', 'fairy tales'))

// module.exports = anagram
