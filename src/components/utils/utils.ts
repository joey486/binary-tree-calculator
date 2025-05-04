import { TreeNodeData, TreeNode, Edge } from "./types";

export const parseTreeFromInput = (input: string): TreeNodeData | null => {
  if (!input) return null;

  const parseNode = (str: string): TreeNode | null => {
    if (!str) return null;

    // Find the value (everything before the first parenthesis)
    const valueMatch = str.match(/^(-?\d+)/);
    if (!valueMatch) return null;

    const node: TreeNode = {
      value: parseInt(valueMatch[1]),
      left: null,
      right: null,
      edges: [], // Initialize edges as an empty array
    };

    // Find content between parentheses
    const parenthesesMatch = str.match(/\((.*)\)/);
    if (!parenthesesMatch) return node;

    const content = parenthesesMatch[1];
    if (!content) return node;

    // Split content into left and right parts at the top-level comma
    let depth = 0;
    let splitIndex = -1;

    for (let i = 0; i < content.length; i++) {
      if (content[i] === "(") depth++;
      if (content[i] === ")") depth--;
      if (depth === 0 && content[i] === ",") {
        splitIndex = i;
        break;
      }
    }

    if (splitIndex !== -1) {
      const leftStr = content.slice(0, splitIndex).trim();
      const rightStr = content.slice(splitIndex + 1).trim();

      node.left = parseNode(leftStr);
      node.right = parseNode(rightStr);

      const edge1 : Edge = {
        source: node,
        target: node.left ,
        type: "left",
      };
      const edge2 : Edge = {
        source: node,
        target: node.right ,
        type: "right",
      };
      node.edges.push(edge1, edge2); 
    }
    else{
      node.left = parseNode(content.trim());
      const edge1 : Edge = {
        source: node,
        target: node.left ,
        type: "left",
      };
      node.edges.push(edge1);
    }

    return node;
  };

  return parseNode(input);
};

export const addChildToNode = (
  currentNode: TreeNodeData,
  targetValue: number,
  childValue: number,
  side: "left" | "right"
): TreeNodeData => {
  if (currentNode.value === targetValue) {
    if (side === "left") {
      currentNode.left = { value: childValue };
    } else {
      currentNode.right = { value: childValue };
    }
    return currentNode;
  }

  if (currentNode.left) {
    currentNode.left = addChildToNode(
      currentNode.left,
      targetValue,
      childValue,
      side
    );
  }

  if (currentNode.right) {
    currentNode.right = addChildToNode(
      currentNode.right,
      targetValue,
      childValue,
      side
    );
  }

  return currentNode;
};
