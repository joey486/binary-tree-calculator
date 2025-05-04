import React from 'react';
import { TreeNodeData } from './types';

interface TreeInputFormProps {
  treeInput: string;
  setTreeInput: (value: string) => void;
  error: string;
  rootNode: TreeNodeData | null; // TreeNodeData | null (avoid import cycle or specify minimal type)
  handleCreateTree: () => void;
  handleClearTree: () => void;
}

const TreeInputForm: React.FC<TreeInputFormProps> = ({
  treeInput,
  setTreeInput,
  error,
  rootNode,
  handleCreateTree,
  handleClearTree,
}) => {
  return (
    <div
      className="tree-input"
      style={{
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '500px',
      }}
    >
      <textarea
        value={treeInput}
        onChange={(e) => setTreeInput(e.target.value) }
        placeholder="Enter tree in format: 10(5(3,7),15(12,18))"
        style={{
          width: '100%',
          marginBottom: '10px',
          padding: '10px',
          minHeight: '100px',
        }}
      />
      {error && (
        <div
          style={{
            color: 'red',
            marginBottom: '10px',
          }}
        >
          {error}
        </div>
      )}
      <div
        className="button-container"
        style={{
          display: 'flex',
          gap: '10px',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <button
          onClick={handleCreateTree}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Create Tree
        </button>
        {rootNode && (
          <button
            onClick={handleClearTree}
            style={{
              padding: '10px 20px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Clear Tree
          </button>
        )}
      </div>
    </div>
  );
};

export default TreeInputForm;