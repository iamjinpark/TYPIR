import { BrowserRouter as Router } from 'react-router-dom';
import SelectPageModal from './SelectPageModal';

/**@type{import('@storybook/react').Meta} */
export default {
  component: SelectPageModal,
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
export const 기본표시 = (args) => <SelectPageModal {...args} />;
