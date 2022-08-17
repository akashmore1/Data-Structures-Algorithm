// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself.

// =========================== 1 approach O(1), O(1) =========================== //
// This solution beats 90% in leetcode
var isIsomorphic = function (s, t) {
  const helperObj_S_T = {};
  const helperObj_T_S = {};

  for (let i = 0; i < s.length; i++) {
    if (helperObj_S_T.hasOwnProperty(s[i])) {
      if (helperObj_S_T[s[i]] !== t[i]) {
        return false;
      }
    } else {
      helperObj_S_T[s[i]] = t[i];
    }
    if (helperObj_T_S.hasOwnProperty(t[i])) {
      if (helperObj_T_S[t[i]] !== s[i]) {
        return false;
      }
    } else {
      helperObj_T_S[t[i]] = s[i];
    }
  }
  return true;
};
// ================================================================================== //
