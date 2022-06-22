# Binary Tree Algos

Welcome to my weekly solved Binary Tree algo solutions along with th e provided test cases.

In addition to the solutions, I also fill out a sheet which contains the word steps to solve each algo in the google sheet. [Link to the Google Sheet][1].

**NPM Set Up**

```terminal
npm install jest
```

Compatible node version is 17.7.1

Here are the algos that I was able to solve so far, which I will keep adding as I come across a new algo.

**1)** [ Update parent node with its sum of children ][2]
_Recursively_

```javascript

const updateParentNode(root) {
  if(!root) return;

  if(root.left !== null || root.right !== null) {
    root.value = root.left.value + root.right.value;
  }

  updateParentNode(root.left);
  updateParentNode(root.right);

  return root;
}

```

[1]: https://docs.google.com/spreadsheets/d/1dJ78Y-KAOYh6vmhYBLUG5N1TZmBFr6SmvSvaFsWLAjU/edit?usp=sharing
[2]: https://github.com/Gereltuya/BinaryTreeAlgos/tree/main/update-parent-node-with-sum-children
