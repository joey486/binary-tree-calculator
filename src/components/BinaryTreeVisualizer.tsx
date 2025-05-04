import React from 'react';
import { useTreeState } from './useTreeState';
import TreeInputForm from './TreeInputForm';
import TreeDisplay from './TreeDisplay';
import AddChildForm from './AddChildForm';

const BinaryTreeVisualizer: React.FC = () => {
  const {
    rootNode,
    treeInput,
    setTreeInput,
    error,
    addChildForm,
    newChildValue,
    setNewChildValue,
    childSide,
    setChildSide,
    handleCreateTree,
    handleClearTree,
    handleNodeClick,
    handleAddChildSubmit,
    handleCloseForm,
  } = useTreeState();

  return (
    <div
      className="binary-tree-visualizer"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        width: '99%',
        height: '100%',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      <h2>Binary Tree Visualization</h2>
      <TreeInputForm
        treeInput={treeInput}
        setTreeInput={setTreeInput}
        error={error}
        rootNode={rootNode}
        handleCreateTree={handleCreateTree}
        handleClearTree={handleClearTree}
      />
      <TreeDisplay rootNode={rootNode} handleNodeClick={handleNodeClick} />
      <AddChildForm
        addChildForm={addChildForm}
        newChildValue={newChildValue}
        setNewChildValue={setNewChildValue}
        childSide={childSide}
        setChildSide={setChildSide}
        handleAddChildSubmit={handleAddChildSubmit}
        handleCloseForm={handleCloseForm}
      />
    </div>
  );
};

export default BinaryTreeVisualizer;