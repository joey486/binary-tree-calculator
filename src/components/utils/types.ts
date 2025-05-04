export interface TreeNodeData {
    value: number;
    left?: TreeNodeData | null;
    right?: TreeNodeData | null;
  }
  
  export interface TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
    edges: Edge[]; 
  }
  
  export interface AddChildFormData {
    nodeValue: number;
    position: {
      x: number;
      y: number;
    };
  }

  export interface Edge {
    source: TreeNode | null; // Source node value
    target: TreeNode | null; // Target node value
    type: 'left' | 'right';
  }