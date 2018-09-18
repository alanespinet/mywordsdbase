import React from 'react';
import AddButton from './AddButton';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

const ActionButtons = () => (
  <div className="action-buttons">
    <EditButton />
    <DeleteButton />
    <AddButton />
  </div>
);

export default ActionButtons;
