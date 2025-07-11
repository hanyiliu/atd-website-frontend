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
    { image: 'projects/project-neighborhood-market.svg', alt: 'Neighborhood Market', link: 'https://example.com/neighborhood-market' },
    { image: 'projects/project-neighborhood-market.svg', alt: 'Neighborhood Market', link: 'https://example.com/neighborhood-market' },
    { image: 'projects/project-sanju-market.svg', alt: 'Sanju Market', link: 'https://example.com/sanju-market' },
  ]},
};

export const NoProjects: Story = {
  args: {},
};
