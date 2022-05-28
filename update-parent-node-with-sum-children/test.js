const TreeNode = require('./treeNode')
const updateParentNode = require('./index')

test('Parents Node Updated with value for 2, 2, 0', () => {
  const treeNode = new TreeNode(1, new TreeNode(0), new TreeNode(2))
  const resultRoot = updateParentNode(treeNode)
  expect(resultRoot.value).toEqual(2)
  expect(resultRoot.left.value).toEqual(0)
  expect(resultRoot.right.value).toEqual(2)
})
