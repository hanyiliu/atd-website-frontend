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
  args: {
    title: 'All Things Design',
    bracket1: '[',
    noun: 'noun.',
    bracket2: ']',
    definition:
      '"A student-led creative agency at UC Davis, specializing in multi-disciplinary design."',
  },
};
