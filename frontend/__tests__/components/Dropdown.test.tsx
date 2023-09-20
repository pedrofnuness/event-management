import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from '@/app/components/Dropdown/Dropdown';
import { HostInterface } from '@/interfaces/Host.interface';

const options: HostInterface[] = [
  {
    id: '1',
    name: 'Host 1',
    avatar: '/host1.jpg',
    description: ""
  },
  {
    id: '2',
    name: 'Host 2',
    avatar: '/host2.jpg',
    description: ""
  },
];

const selectedOption = options[0];

test('Dropdown component renders correctly', () => {
  const onSelect = jest.fn();

  const { getByText, getByTestId } = render(
    <Dropdown options={options} selectedOption={selectedOption} onSelect={onSelect} />
  );

  const selectedOptionElement = getByText(selectedOption.name);
  expect(selectedOptionElement).toBeInTheDocument();

  const optionsList = getByTestId('options-list');
  expect(optionsList).not.toBeVisible();

  fireEvent.click(selectedOptionElement);

  expect(optionsList).toBeVisible();

  const optionToSelect = options[1];
  const optionToSelectElement = getByText(optionToSelect.name);
  fireEvent.click(optionToSelectElement);

  expect(onSelect).toHaveBeenCalledWith(optionToSelect);

  expect(optionsList).not.toBeVisible();
});