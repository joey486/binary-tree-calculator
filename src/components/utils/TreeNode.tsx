// components/TreeNode.tsx
import React from 'react';

interface TreeNodeData {
  value: number;
  left?: TreeNodeData | null;
  right?: TreeNodeData | null;
}

interface TreeNodeProps {
  node: TreeNodeData;
  onNodeClick: (nodeValue: number, event: React.MouseEvent) => void;
}

const TreeNode: React.FC<TreeNodeProps> = ({ node, onNodeClick }) => {
  return (
    <div 
      className="tree-node"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '10px',
        position: 'relative',
        minWidth: '60px'
      }}
    >
      <div 
        className="node-value"
        onClick={(e) => onNodeClick(node.value, e)}
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          margin: '10px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}
      >
        {node.value}
      </div>

      {(node.left || node.right) && (
        <div 
          className="node-children"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginTop: '20px',
            gap: '10px'
          }}
        >
          {node.left && (
            <TreeNode 
              node={node.left} 
              onNodeClick={onNodeClick}
            />
          )}
          {node.right && (
            <TreeNode 
              node={node.right} 
              onNodeClick={onNodeClick}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default TreeNode;