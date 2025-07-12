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
        image: 'members/president1.png',
        title: 'Co-Founder / President',
        name: 'Richie Huang',
      },
      {
        image: 'members/president2.png',
        title: 'Co-Founder / President',
        name: 'Giang Ta',
      },
      {
        image: 'members/operationsVP.png',
        title: 'VP of Operations',
        name: 'Katie Castro',
      },
      {
        image: 'members/creativeVP.png',
        title: 'VP of Creative Directory',
        name: 'Ryan Song',
      },
      {
        image: 'members/education.png',
        title: 'VP of Education',
        name: 'Nikita Dutt',
      },
      {
        image: 'members/secretary.png',
        title: 'VP of Secretary',
        name: 'Nicole Kim',
      },
      {
        image: 'members/treasury.png',
        title: 'VP of Treasury',
        name: 'Trinh Nguyen',
      },
      {
        image: 'members/graphics1.png',
        title: 'Graphics Chair',
        name: 'Naomi Solnick',
      },
      {
        image: 'members/graphics2.png',
        title: 'Graphics Chair',
        name: 'Lauren Calderon',
      },
      {
        image: 'members/graphics3.png',
        title: 'Graphics Chair',
        name: 'Reiley Johnson',
      },
      {
        image: 'members/apparel.png',
        title: 'Apparel Chair',
        name: 'Essence (Essie) Bailey',
      },
      {
        image: 'members/uiux.png',
        title: 'UI/UX Design Chair',
        name: 'Emily Kang',
      },
      {
        image: 'members/digital.png',
        title: 'Digital Chair',
        name: 'Sami Deshatty',
      },
    ],
  },
};
