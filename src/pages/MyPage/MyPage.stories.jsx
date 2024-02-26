import { BrowserRouter as Router } from 'react-router-dom';
import MyPage from './MyPage';

/**@type{import('@storybook/react').Meta} */
export default {
  component: MyPage,
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
export const 기본표시 = (args) => <MyPage {...args} />;
