import React from 'react';
import AddDataForm from '../components/AddDataForm';

const AddDataPage = ({ selectedDataSet }) => {
  return (
    <div>
      <AddDataForm selectedDataSet={selectedDataSet} />
    </div>
  );
};

export default AddDataPage;
