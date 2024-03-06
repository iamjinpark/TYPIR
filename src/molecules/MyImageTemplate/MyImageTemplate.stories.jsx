import MyImageTemplate from './MyImageTemplate';

/**@type{import('@storybook/react').Meta} */
export default {
  component: MyImageTemplate,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

/**@type{import('@storybook/react').StoryObj} */
export const 기본표시 = {};
