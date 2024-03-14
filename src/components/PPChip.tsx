import { Chip, Space } from '@looker/components';
import { FC, useState } from 'react';
import styled from 'styled-components';
import { COLORS } from './theme/colors';

const PPChip: FC<{
  chipValues: string[];
  onChipDelete: (chipValue: string) => {};
}> = ({ chipValues, onChipDelete }) => {
  const [values, setValues] = useState<string[] | undefined>(chipValues);

  const handleChipDelete = (chipValue: string) => {
    const newValues = values?.filter((value) => value !== chipValue);
    setValues(newValues);
    onChipDelete(chipValue);
  };

  return (
    <Space>
      {values?.map((value, idx) => (
        <StyledChip
          key={`${value}-${idx}`}
          maxWidth={150}
          onDelete={() => handleChipDelete(value)}
          iconLabel="remove filter"
        >
          {value}
        </StyledChip>
      ))}
    </Space>
  );
};

export { PPChip };

export const StyledChip = styled(Chip)`
  height: ${COLORS.height};
  flex-shrink: 0;
  border-radius: ${COLORS.borderRadius};
  background: ${COLORS.chipBackground};
  color: ${COLORS.textColor};
  font-size: ${COLORS.fontSize};
  font-style: ${COLORS.fontStyle};
  font-weight: ${COLORS.fontWeight};
`;
