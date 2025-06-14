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
        image: 'members/president1.svg',
        title: 'Co-Founder / President',
        name: 'Richie Huang',
      },
      {
        image: 'members/president2.svg',
        title: 'Co-Founder / President',
        name: 'Giang Ta',
      },
      {
        image: 'members/operationsVP.svg',
        title: 'VP of Operations',
        name: 'Katie Castro',
      },
      {
        image: 'members/creativeVP.svg',
        title: 'VP of Creative Directory',
        name: 'Ryan Song',
      },
      {
        image: 'members/education.svg',
        title: 'VP of Education',
        name: 'Nikita Dutt',
      },
      {
        image: 'members/secretary.svg',
        title: 'VP of Secretary',
        name: 'Nicole Kim',
      },
      {
        image: 'members/treasury.svg',
        title: 'VP of Treasury',
        name: 'Trinh Nguyen',
      },
      {
        image: 'members/graphics1.svg',
        title: 'Graphics Chair',
        name: 'Naomi Solnick',
      },
      {
        image: 'members/graphics2.svg',
        title: 'Graphics Chair',
        name: 'Lauren Calderon',
      },
      {
        image: 'members/graphics3.svg',
        title: 'Graphics Chair',
        name: 'Reiley Johnson',
      },
      {
        image: 'members/apparel.svg',
        title: 'Apparel Chair',
        name: 'Essence (Essie) Bailey',
      },
      {
        image: 'members/uiux.svg',
        title: 'UI/UX Design Chair',
        name: 'Emily Kang',
      },
      {
        image: 'members/digital.svg',
        title: 'Digital Chair',
        name: 'Sami Deshatty',
      },
    ],
  },
};
