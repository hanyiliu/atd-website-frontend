import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { InfoSectionComponent } from './info-section.component';

const meta: Meta<InfoSectionComponent> = {
  title: 'Components/InfoSection',
  component: InfoSectionComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<InfoSectionComponent>;

export const Primary: Story = {
  args: {},
};
