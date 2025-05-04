import React from 'react';
import { TreeNodeData } from './utils/types';
import styles from '../styles/TreeInputForm.module.css'; // Changed to CSS module import

interface TreeInputFormProps {
  treeInput: string;
  setTreeInput: (value: string) => void;
  error: string;
  rootNode: TreeNodeData | null;
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
    <div className={styles.treeInputContainer}>
      <textarea
        className={styles.treeInputTextarea}
        value={treeInput}
        onChange={(e) => setTreeInput(e.target.value)}
        placeholder="Enter tree in format: 10(5(3,7),15(12,18))"
        aria-label="Tree structure input"
      />
      
      {error && (
        <div className={styles.treeInputError} role="alert">
          {error}
        </div>
      )}
      
      <div className={styles.treeInputButtons}>
        <button 
          className={`${styles.btn} ${styles.btnPrimary}`}
          onClick={handleCreateTree}
          disabled={!treeInput.trim()}
        >
          Create Tree
        </button>
        
        {rootNode && (
          <button 
            className={`${styles.btn} ${styles.btnDanger}`}
            onClick={handleClearTree}
          >
            Clear Tree
          </button>
        )}
      </div>
      
      <div className={styles.treeInputHelp}>
        <details>
          <summary>Input Format Help</summary>
          <ul>
            <li><code>10</code> - Creates a root node with value 10</li>
            <li><code>10(5,15)</code> - Root node 10 with left child 5 and right child 15</li>
            <li><code>10(5(3,7),15)</code> - Nested structure with additional children</li>
          </ul>
        </details>
      </div>
    </div>
  );
};

export default TreeInputForm;