import { BrowserRouter as Router } from 'react-router-dom';
import SelectPostImage from './SelectPostImage';

/**@type{import('@storybook/react').Meta} */
export default {
  component: SelectPostImage,
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
export const 기본표시 = (args) => <SelectPostImage {...args} />;
