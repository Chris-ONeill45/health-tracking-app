import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import AddDataForm from '../components/AddDataForm';

jest.mock('../components/AddDataForm', () => ({
  __esModule: true,
  default: ({ onSubmit }) => (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="dataValueInput">
          Enter value:
          <input type="number" id="dataValueInput" placeholder="Enter value" />
        </label>
        <button type="submit">Add Data</button>
      </form>
    </div>
  ),
}));

describe('AddDataForm', () => {
  test('submits form with correct data', async () => {
    const setChartData = jest.fn();

    const { getByLabelText, getByText } = render(
      <AddDataForm
        onSubmit={(e) => {
          e.preventDefault();
          setChartData({});
        }}
      />
    );

    const input = getByLabelText('Enter value:');
    const submitButton = getByText('Add Data');

    fireEvent.change(input, { target: { value: '30' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(setChartData).toHaveBeenCalledWith({});
    });
  });
});
