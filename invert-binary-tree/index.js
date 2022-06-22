const invertTree = (root) => {
  if (!root) return root

  if (root.left !== null || root.right !== null) {
    ;[root.left, root.right] = [root.right, root.left]
  }

  invertTree(root.left)
  invertTree(root.right)

  return root
}

module.exports = invertTree
