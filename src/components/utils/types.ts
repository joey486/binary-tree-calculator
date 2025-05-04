export interface TreeNodeData {
    value: number;
    left?: TreeNodeData | null;
    right?: TreeNodeData | null;
  }
  
  export interface TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
  }
  
  export interface AddChildFormData {
    nodeValue: number;
    position: {
      x: number;
      y: number;
    };
  }