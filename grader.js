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
    medianScore: function (x) {
      x.sort(function (a, b) {
        return a - b
      })
      var o = Math.floor(x.length / 2)
      if (x.length % 2) {
        return x[o]
      } else {
        return (x[o - 1] + x[o]) / 2.0
      }
    },
    modeScore: function mode (arr) {
      var numMap = {}
      var greatestFreq = 0
      var mode
      arr.forEach(function countMode (n) {
        numMap[n] = (numMap[n] || 0) + 1
        if (greatestFreq <= numMap[n]) {
          greatestFreq = numMap[n]
          mode = n
        }
      })
      return +mode
    }
}
