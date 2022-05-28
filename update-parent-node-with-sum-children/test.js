const TreeNode = require('./treeNode')
const updateParentNode = require('./index')

test('Parents Node Updated for Node 1, 0, 2', () => {
  const treeNode = new TreeNode(1, new TreeNode(0), new TreeNode(2))
  const resultRoot = updateParentNode(treeNode)
  expect(resultRoot.value).toEqual(2)
  expect(resultRoot.left.value).toEqual(0)
  expect(resultRoot.right.value).toEqual(2)
})

test('Parent Node Updated for Node 1, 0, 2, 3, 4, 0', () => {
  const treeNode = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(0)
  )
  const resultRoot = updateParentNode(treeNode)

  expect(resultRoot.value).toEqual(2)
  expect(resultRoot.left.value).toEqual(7)
  expect(resultRoot.right.value).toEqual(0)
})
