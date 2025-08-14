/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number} the product of `num1` and `num2`
 * @returns `NaN` if either argument is not a number
 */
export function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return NaN;
  }
  return num1 * num2;
}

/**
 * @param {number} age
 * @returns {string} "Age not valid." if `age` is not a number
 * @returns {string} "You must be 18 or older to vote." if `age` is less than 18
 * @returns {string} "Who would you like to vote for?" if `age` is 18 or older
 */
export function vote(age) {
  // TODO

  let voteChecker = ""

  if (age !== typeof 'number') {
    voteChecker = "Age not valid."
  }
  if (age >= 18) {
    voteChecker = "Who would you like to vote for?"
  }
  if (age < 18) {
    voteChecker = "You must be 18 or older to vote."
  }

  return voteChecker

}

// console.log(vote(17))
// console.log(vote(19))
// console.log(vote("A"))
// console.log(vote("1"))

/**
 * @param {string} str1
 * @param {string} str2
 * @returns {string} the concatenation of `str1` and `str2`
 * @returns `undefined` if either argument is not a string
 */
export function concatenateStrings(str1, str2) {
  // TODO
  let merge = ""
  if (str1) {
    merge += str1
  }
  if (str2) {
    merge += str2
  }
  return merge
}

// console.log(concatenateStrings("testing", " string"))
// console.log(concatenateStrings("testing", " 001"))