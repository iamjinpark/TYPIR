import { BrowserRouter as Router } from 'react-router-dom';
import MyDetailImage from './MyDetailImage';

/**@type{import('@storybook/react').Meta} */
export default {
  component: MyDetailImage,
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
export const 기본표시 = (args) => <MyDetailImage {...args} />;
