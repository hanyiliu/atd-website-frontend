import type { Meta, StoryObj } from '@storybook/angular';
import { DefinitionBoxComponent } from './definition-box.component';

const meta: Meta<DefinitionBoxComponent> = {
  title: 'Components/DefinitionBox',
  component: DefinitionBoxComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DefinitionBoxComponent>;

export const Primary: Story = {
  args: {},
};
