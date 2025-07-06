import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { NavbarComponent } from './navbar.component';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

const meta: Meta<NavbarComponent> = {
  title: 'Components/Navbar',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, ButtonComponent],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<NavbarComponent>;

export const Primary: Story = {
  args: {
    isAboutUsActive: false,
    isOurWorksActive: false,
  },
  argTypes: {
    isAboutUsActive: { control: 'boolean' },
    isOurWorksActive: { control: 'boolean' },
  },
};

export const AboutUsActive: Story = {
  args: {
    isAboutUsActive: true,
    isOurWorksActive: false,
    isJoinUsActive: false,
  },
};

export const OurWorksActive: Story = {
  args: {
    isAboutUsActive: false,
    isOurWorksActive: true,
    isJoinUsActive: false,
  },
};

export const JoinUsActive: Story = {
  args: {
    isAboutUsActive: false,
    isOurWorksActive: false,
    isJoinUsActive: true,
  },
};
