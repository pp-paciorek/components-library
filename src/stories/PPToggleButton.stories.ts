import type { Meta, StoryObj } from '@storybook/react';
import { PPToggleButton } from '../';

const meta: Meta<typeof PPToggleButton> = {
  component: PPToggleButton,
};

export default meta;
type Story = StoryObj<typeof PPToggleButton>;

export const ToggleButton: Story = {
  args: {
    toggleValues: ['Target', 'Block', 'include', 'exclude'],
    initialValue: 'Target',
  },
};
