const backspaceCompare = (s, t) => {
  // go reversed
  return edit(s) === edit(t)

  function edit(str) {
    let result = ''

    let backspaces = 0
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] === '#') {
        backspaces++
      } else if (backspaces > 0) {
        backspaces--
      } else {
        console.log('str[i]', str[i])
        result = str[i] + result
      }
    }

    // console.log("result", result, backspaces)
    return result
  }
}
let s = 'a##c',
  t = '#a#c'

console.log(backspaceCompare(s, t))
