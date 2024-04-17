import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

describe('Dashboard', () => {
  test('renders DisplayChart, ChooseChartType, and Add Data button', () => {
    // Mock props
    const mockChartData = {
      labels: ['Label 1', 'Label 2'],
      datasets: [{ data: [10, 20] }],
    };
    const mockHandleSelectChartType = jest.fn();
    const mockSelectedDataSet = 'Mock Selected Data Set';
    const mockSetChartData = jest.fn();

    // Render Dashboard component
    const { getByText } = render(
      <Dashboard
        chartType="line"
        handleSelectChartType={mockHandleSelectChartType}
        selectedDataSet={mockSelectedDataSet}
        chartData={mockChartData}
        setChartData={mockSetChartData}
      />
    );

    // Check if DisplayChart, ChooseChartType, and Add Data button are rendered
    expect(getByText('DisplayChart')).toBeInTheDocument();
    expect(getByText('ChooseChartType')).toBeInTheDocument();
    expect(getByText('Add Data')).toBeInTheDocument();
  });
});
