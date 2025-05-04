import { useState } from 'react';
import { TreeNodeData, AddChildFormData } from './types';
import { parseTreeFromInput, addChildToNode } from './utils';

export const useTreeState = () => {
  const [rootNode, setRootNode] = useState<TreeNodeData | null>(null);
  const [treeInput, setTreeInput] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [addChildForm, setAddChildForm] = useState<AddChildFormData | null>(null);
  const [newChildValue, setNewChildValue] = useState<string>('');
  const [childSide, setChildSide] = useState<'left' | 'right'>('left');

  const handleCreateTree = () => {
    setError('');
    const parsedTree = parseTreeFromInput(treeInput);
    if (parsedTree) {
      setRootNode(parsedTree);
    } else {
      setError('Failed to parse tree');
    }
  };

  const handleClearTree = () => {
    setRootNode(null);
    setError('');
    setAddChildForm(null);
  };

  const handleNodeClick = (nodeValue: number, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setAddChildForm({
      nodeValue,
      position: {
        x: rect.left + window.scrollX,
        y: rect.bottom + window.scrollY,
      },
    });
  };

  const handleAddChildSubmit = () => {
    if (!addChildForm || !rootNode) return;
    const value = parseInt(newChildValue, 10);
    if (!isNaN(value)) {
      const newTree = { ...rootNode };
      const updatedTree = addChildToNode(newTree, addChildForm.nodeValue, value, childSide);
      setRootNode(updatedTree);
      setAddChildForm(null);
      setNewChildValue('');
    }
  };

  const handleCloseForm = () => {
    setAddChildForm(null);
    setNewChildValue('');
  };

  return {
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
  };
};