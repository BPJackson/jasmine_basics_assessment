var grader = require('./../grader.js')
describe('Find the letter grade of a number grade', function () {
  it('passing', function () {
    expect(grader.letterGrader(98)).toEqual('A+')
    expect(grader.letterGrader(90)).toEqual('A-')
    expect(grader.letterGrader(89)).toEqual('B+')
    expect(grader.letterGrader(79)).toEqual('C+')
    expect(grader.letterGrader(69)).toEqual('D+')
    expect(grader.letterGrader(-2)).toEqual("F")
  })
})
describe('Find the average of an array', function () {
  it('passing', function () {
    expect(grader.averageScore([90, 95, 87, 60])).toEqual(83)
    expect(grader.averageScore([1, 2, 3, 4])).toEqual(2.5)
    expect(grader.averageScore([10, 20, 30, 0])).toEqual(15)
  })
})
describe('Find the median of an array', function () {
  it('passing', function () {
    expect(grader.medianScore([52, 80, 80, 86, 94])).toEqual(80)
    expect(grader.medianScore([52, 80, 81, 86])).toEqual(80.5)
    expect(grader.medianScore([1, 1, 2, 2, 3])).toEqual(2)
  })
})
describe('Find the mode of an array', function () {
  it('passing', function () {
    expect(grader.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual('92')
    expect(grader.modeScore([0, null, null, 1, 1])).toEqual(1);

  })})
