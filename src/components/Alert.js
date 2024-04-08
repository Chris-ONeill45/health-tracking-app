import React from 'react';
import AddDataForm from './AddDataForm';

const Alert = ({ selectedDataSet, onClose }) => {
  return (
    <div className="alert">
      <button type="button" onClick={onClose}>
        Close
      </button>
      <AddDataForm selectedDataSet={selectedDataSet} />
    </div>
  );
};

export default Alert;
