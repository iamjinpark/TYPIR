import { BrowserRouter as Router } from 'react-router-dom';
import DetailImage from './DetailImage';

/**@type{import('@storybook/react').Meta} */
export default {
  component: DetailImage,
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
export const 기본표시 = (args) => <DetailImage {...args} />;
