import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { OpenRolesListComponent } from './open-roles-list.component';

const meta: Meta<OpenRolesListComponent> = {
  title: 'Components/OpenRolesList',
  component: OpenRolesListComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<OpenRolesListComponent>;

export const Primary: Story = {
  args: {openRoles: [
    {
      "title": "VP of Secretary",
      "link": "https://example.com"
    },
    {
      "title": "VP of Sanju",
      "link": "https://example.com"
    }
  ]},
};

export const NoOpenings: Story = {
  args: {openRoles: []},
};

