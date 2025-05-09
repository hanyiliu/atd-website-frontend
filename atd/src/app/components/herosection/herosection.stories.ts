import type { Meta, StoryObj } from '@storybook/angular';
import { HerosectionComponent } from './herosection.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<HerosectionComponent> = {
  title: 'Components/Hero Section',
  component: HerosectionComponent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    preTitle: { control: 'text' },
    buttonText: { control: 'text' },
    backgroundImage: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<HerosectionComponent>;

// Default Hero Section Story
export const Default: Story = {
  args: {
    title: 'All Things Design',
    preTitle: 'We Are,',
    buttonText: 'Learn More',
    backgroundImage: 'assets/images/hero.svg', // Updated path
  },
};

// Hero Section with Custom Text
export const CustomText: Story = {
  args: {
    title: 'Custom Hero Title',
    preTitle: 'A catchy subtitle for the hero section.',
    buttonText: 'Explore Now',
    backgroundImage: 'assets/images/hero.svg', // Updated path
  },
};

// Hero Section with Different Image
export const WithImage: Story = {
  args: {
    title: 'Stunning Visuals Await',
    preTitle: 'Experience the difference with our platform.',
    buttonText: 'Learn More',
    backgroundImage: 'assets/images/another-hero.svg', // Updated path
  },
};
