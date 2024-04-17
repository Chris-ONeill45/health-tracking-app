import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ChooseChartType from '../components/ChooseChartType';

describe('ChooseChartType', () => {
  test('renders ChooseChartType component with select options', () => {
    const setChartType = jest.fn();

    const { getByRole } = render(
      <ChooseChartType setChartType={setChartType} />
    );

    const selectElement = getByRole('combobox');

    fireEvent.change(selectElement, { target: { value: 'bar' } });

    expect(setChartType).toHaveBeenCalledWith('bar');
  });
});
