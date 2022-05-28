//Update parent node value with its sum of child nodes

// Recursively

const updateParentNode = (root) => {
  if (root === null) return

  if (root.left !== null || root.right !== null) {
    root.value = root.left.value + root.right.value
  }

  if (root.left !== null) {
    updateParentNode(root.left)
  }

  if (root.right !== null) {
    updateParentNode(root.right)
  }

  return root
}

module.exports = updateParentNode; 