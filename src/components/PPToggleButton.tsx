import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { ButtonItem, ButtonToggle } from '@looker/components';
import { COLORS } from './theme/colors';

const PPToggleButton: FC<{
  toggleValues: string[];
  onToggleChange: (toggleValue: string) => {};
  initialValue: string;
}> = ({ toggleValues, onToggleChange, initialValue }) => {
  const [toggle, setToggle] = useState<string | undefined>(initialValue);

  const handleToggleChange = (toggleValue: string) => {
    setToggle(toggleValue);
    onToggleChange(toggleValue);
  };

  return (
    <StyledButtonToggle value={toggle} onChange={handleToggleChange}>
      {toggleValues.map((value, idx) => (
        <StyledButtonItem key={`${value}-${idx}`}>{value}</StyledButtonItem>
      ))}
    </StyledButtonToggle>
  );
};

export default PPToggleButton;

export const StyledButtonItem = styled(ButtonItem)`
  flex: 1;
  text-transform: capitalize;
  border: ${COLORS.border};
  height: ${COLORS.height};
  flex-shrink: 0;
  &:focus,
  &:active {
    background-color: ${COLORS.activeBackground};
    border: ${COLORS.activeBorder};
  }
  &[aria-pressed='true'] {
    background: ${COLORS.activeBackground};
    border: ${COLORS.activeBorder};
  }
`;
export const StyledButtonToggle = styled(ButtonToggle)`
  display: flex;
  border-style: none;
  //   height: ${COLORS.height};
`;
