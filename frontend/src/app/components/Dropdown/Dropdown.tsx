
import React, { useState } from 'react';
import Avatar from '@/app/components/Avatar/Avatar';
import { HostInterface } from '@/interfaces/Host.interface';
import * as Styled from './Dropdown.styles';

interface DropdownProps {
  options: HostInterface[];
  selectedOption: HostInterface;
  onSelect: (option: HostInterface) => void;
}

const Dropdown = ({ options, selectedOption, onSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: HostInterface) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <Styled.DropdownContainer>
      <Styled.SelectedOption onClick={toggleDropdown}>
        {!!selectedOption.avatar && (<Avatar size="40" path={selectedOption.avatar} />)}
        <Styled.HostName>{selectedOption.name || "Select the Host"}</Styled.HostName>
      </Styled.SelectedOption>
      {isOpen && (
        <Styled.OptionsList>
          {options.map((option: HostInterface) => (
            <Styled.HostItem key={option.id} onClick={() => handleOptionClick(option)}>
              <Avatar size="40" path={option.avatar} />
              <Styled.HostName>{option.name}</Styled.HostName>
            </Styled.HostItem>
          ))}
        </Styled.OptionsList>
      )}
    </Styled.DropdownContainer>
  );
};

export default Dropdown;
