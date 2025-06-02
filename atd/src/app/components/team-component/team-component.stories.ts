import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TeamComponentComponent } from './team-component.component';

const meta: Meta<TeamComponentComponent> = {
  title: 'Components/TeamComponent',
  component: TeamComponentComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TeamComponentComponent>;

export const Primary: Story = {
  args: {
    members: [
      {
        image: 'images/richie.svg',
        title: 'Co-Founder / President',
        name: 'Richie Huang',
      },
      {
        image: 'images/giang.svg',
        title: 'Co-Founder / President',
        name: 'Giang Ta',
      },
      {
        image: 'images/katie.svg',
        title: 'VP of Operations',
        name: 'Katie Castro',
      },
      {
        image: 'images/ryan.svg',
        title: 'VP of Creative Directory',
        name: 'Ryan Song',
      },
      {
        image: 'images/nikita.svg',
        title: 'VP of Education',
        name: 'Nikita Dutt',
      },
      {
        image: 'images/nicole.svg',
        title: 'VP of Secretary',
        name: 'Nicole Kim',
      },
      {
        image: 'images/trinh.svg',
        title: 'VP of Treasury',
        name: 'Trinh Nguyen',
      },
      {
        image: 'images/naomi.svg',
        title: 'Graphics Chair',
        name: 'Naomi Solnick',
      },
      {
        image: 'images/lauren.svg',
        title: 'Graphics Chair',
        name: 'Lauren Calderon',
      },
      {
        image: 'images/reiley.svg',
        title: 'Graphics Chair',
        name: 'Reiley Johnson',
      },
      {
        image: 'images/essie.svg',
        title: 'Apparel Chair',
        name: 'Essence (Essie) Bailey',
      },
      {
        image: 'images/emily.svg',
        title: 'UI/UX Design Chair',
        name: 'Emily Kang',
      },
      {
        image: 'images/sami.svg',
        title: 'Digital Chair',
        name: 'Sami Deshatty',
      },
    ],
  },
};
