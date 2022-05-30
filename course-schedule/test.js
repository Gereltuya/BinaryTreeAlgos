const canFinish = require('./index')

test('Test 1 for 5 [[1,4],[2,4],[3,1],[3,2]]', () => {
  const numCourses = 5
  const prerequisites = [
    [1, 4],
    [2, 4],
    [3, 1],
    [3, 2],
  ]

  const result = canFinish(numCourses, prerequisites)

  expect(result).toEqual(true)
})
