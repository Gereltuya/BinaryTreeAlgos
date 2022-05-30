/*

207. LeetCode  https://leetcode.com/problems/course-schedule/
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.
*/

const canFinish = (numCourses, prerequisites) => {
  const depMap = new Map()
  for (let [course, dependency] of prerequisites) {
    if (depMap.has(course)) {
      depMap.get(course).push(dependency)
    } else {
      depMap.set(course, [dependency])
    }
  }
  let seen = new Set()
  const checker = (course) => {
    // if(depMap[course] == null) return true;
    if (seen.has(course)) return false
    if (!depMap.has(course) || depMap.get(course).length === 0) return true

    seen.add(course)

    for (const dep of depMap.get(course)) {
      if (!checker(dep)) return false
    }
    seen.delete(course)
    depMap.set(course, []) // set it to empty list, no need to re-run dfs search
    return true
  }

  for (let course = 1; course <= numCourses; course++) {
    if (!checker(course)) return false
  }

  return true
}

module.exports = canFinish
