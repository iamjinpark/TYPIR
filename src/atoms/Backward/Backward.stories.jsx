import { BrowserRouter as Router } from 'react-router-dom';
import Backward from './Backward';

/**@type{import('@storybook/react').Meta} */
export default {
  component: Backward,
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
export const 기본표시 = (args) => <Backward {...args} />;
