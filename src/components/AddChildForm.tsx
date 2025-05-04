import React from 'react';
import { AddChildFormData } from './types';

interface AddChildFormProps {
  addChildForm: AddChildFormData | null;
  newChildValue: string;
  setNewChildValue: (value: string) => void;
  childSide: 'left' | 'right';
  setChildSide: (side: 'left' | 'right') => void;
  handleAddChildSubmit: () => void;
  handleCloseForm: () => void;
}

const AddChildForm: React.FC<AddChildFormProps> = ({
  addChildForm,
  newChildValue,
  setNewChildValue,
  childSide,
  setChildSide,
  handleAddChildSubmit,
  handleCloseForm,
}) => {
  if (!addChildForm) return null;

  return (
    <div
      className="add-child-form"
      style={{
        position: 'fixed',
        left: `${addChildForm.position.x}px`,
        top: `${addChildForm.position.y}px`,
        backgroundColor: 'white',
        border: '1px solid #ddd',
        padding: '15px',
        borderRadius: '5px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        zIndex: 1000,
      }}
    >
      <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>
        Add Child to Node {addChildForm.nodeValue}
      </div>
      <input
        type="number"
        value={newChildValue}
        onChange={(e) => setNewChildValue(e.target.value)}
        placeholder="Child value"
        style={{
          width: '100%',
          padding: '8px',
          marginBottom: '10px',
        }}
      />
      <select
        value={childSide}
        onChange={(e) => setChildSide(e.target.value as 'left' | 'right')}
        style={{
          width: '100%',
          padding: '8px',
          marginBottom: '15px',
        }}
      >
        <option value="left">Left Child</option>
        <option value="right">Right Child</option>
      </select>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={handleAddChildSubmit}
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '8px 15px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Add
        </button>
        <button
          onClick={handleCloseForm}
          style={{
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            padding: '8px 15px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddChildForm;