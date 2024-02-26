import { BrowserRouter as Router } from 'react-router-dom';
import EditProfile from './EditProfile';

/**@type{import('@storybook/react').Meta} */
export default {
  component: EditProfile,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
};

/**@type{import('@storybook/react').StoryObj} */
export const 기본표시 = (args) => <EditProfile {...args} />;
