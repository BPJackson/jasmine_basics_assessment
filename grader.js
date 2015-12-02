module.exports = {
  letterGrader: function (a) {
    if (a <= 100 && a >= 95) {return 'A+'}
    if (a >= 90 && a < 95) {return 'A-'}
    if (a >= 86 && a <= 89) {return 'B+'}
    if (a >= 80 && a < 85) {return 'B-'}
    if (a >= 76 && a <= 79) {return 'C+'}
    if (a >= 70 && a < 75) {return 'C-'}
    if (a >= 66 && a >= 69) {return 'D+'}
    if (a >= 60 && a < 65) {return 'D-'}
    if (a <= 59) {return 'F'}
  },
  averageScore: function (arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
      sum = sum + arr[i]
    }
    return (sum / arr.length)
  },
  medianScore: function (arr) {
    arr.sort(function (a, b) {
      return a - b
      //To compare numbers instead of strings, the compare function can simply subtract b from a. The following function will sort the array ascending:
    })
    var o = Math.floor(arr.length / 2)
    //Gives you a whole number rounded up
    if (arr.length % 2) {
      return arr[o]
    } else {
      return (arr[o - 1] + arr[o]) / 2.0
    }
  },
  modeScore: function mode (arr) {
    var numMap = {}
    var gFreq = 0
    var mode = []
    arr.forEach(function countMode (n) {
      numMap[n] = (numMap[n] || 0) + 1
      if (n === NaN) {
        //skip element and not count it 
      }
      if (gFreq <= numMap[n]) {
        gFreq = numMap[n]
      }
    })
    if (gFreq === 1) {
      return ('no mode')
    }
    for (var prop in numMap) {
      if (numMap[prop] === gFreq) {
        mode.push(prop)
      }
    }
    return mode.join(' ')
  }
}
