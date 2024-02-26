import { BrowserRouter as Router } from 'react-router-dom';
import AccountManagement from './AccountManagement';

/**@type{import('@storybook/react').Meta} */
export default {
  component: AccountManagement,
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
export const 기본표시 = (args) => <AccountManagement {...args} />;
