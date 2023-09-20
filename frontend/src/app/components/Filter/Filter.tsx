'use client'

import React from 'react';
import * as Styled from './FilterStyles'
import { EVENT_STATUS } from '@/app/common/eventStatus';

interface FilterProps {
  selectedStatus: string;
  onSelectStatus: React.Dispatch<string>;
}

export default function Filter({selectedStatus, onSelectStatus}: FilterProps) {
  return (
    <Styled.FilterContainer>
      <Styled.Option 
        isSelected={selectedStatus === EVENT_STATUS.DRAFT} 
        onClick={() => onSelectStatus(EVENT_STATUS.DRAFT)}>Draft</Styled.Option>
      <Styled.Option
        isSelected={selectedStatus === EVENT_STATUS.UPCOMING} 
        onClick={() => onSelectStatus(EVENT_STATUS.UPCOMING)}>Upcoming</Styled.Option>
      <Styled.Option 
        isSelected={selectedStatus === EVENT_STATUS.PAST} 
        onClick={() => onSelectStatus(EVENT_STATUS.PAST)}>Past</Styled.Option>
    </Styled.FilterContainer>
  );
}