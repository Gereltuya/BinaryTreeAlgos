//Update parent node value with its sum of child nodes

// Recursively

const updateParentNode = (root) => {
  // if the tree is empty then do nothing
  if (root === null) return

  if (root.left !== null || root.right !== null) {
    root.value = root.left.value + root.right.value
  }

  updateParentNode(root.left)
  updateParentNode(root.right)

  return root
}

module.exports = updateParentNode
