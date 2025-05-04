import React from 'react';
import TreeNode from './utils/TreeNode'; // Adjust path based on your structure
import { TreeNodeData } from './utils/types';

interface TreeDisplayProps {
  rootNode: TreeNodeData | null;
  handleNodeClick: (nodeValue: number, event: React.MouseEvent) => void;
}

const TreeDisplay: React.FC<TreeDisplayProps> = ({ rootNode, handleNodeClick }) => {
  return (
    <>
      {rootNode && (
        <div
          className="tree-container"
          style={{
            display: 'flex',
            justifyContent: 'center',
            maxWidth: '100%',
            overflowX: 'scroll',
            padding: '20px 0',
            width: '50%',
            height: '50%',
          }}
        >
          <TreeNode node={rootNode} onNodeClick={handleNodeClick} />
        </div>
      )}
    </>
  );
};

export default TreeDisplay;