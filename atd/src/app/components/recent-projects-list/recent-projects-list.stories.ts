import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { RecentProjectsListComponent } from './recent-projects-list.component';

const meta: Meta<RecentProjectsListComponent> = {
  title: 'Components/RecentProjectsList',
  component: RecentProjectsListComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<RecentProjectsListComponent>;

export const Primary: Story = {
  args: {projects: [
    { image: 'images/projects/project-neighborhood-market.svg', alt: 'Neighborhood Market'},
    { image: 'images/projects/project-neighborhood-market.svg', alt: 'Neighborhood Market'},
    { image: 'images/projects/project-sanju-market.svg', alt: 'Sanju Market'},
  ]},
};

export const NoProjects: Story = {
  args: {},
};
