import type { Meta, StoryObj } from '@storybook/react';
import { PPHorizontalDivider } from '../';

const meta: Meta<typeof PPHorizontalDivider> = {
  component: PPHorizontalDivider,
};

export default meta;
type Story = StoryObj<typeof PPHorizontalDivider>;

export const HorizontalDivider: Story = {
  args: {},
};
