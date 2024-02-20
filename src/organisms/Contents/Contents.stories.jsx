import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Contents from './Contents';

/**@type{import('@storybook/react').Meta} */
export default {
  component: Contents,
  decorators: [
    (Story) => {
      return (
        <QueryClientProvider client={new QueryClient()}>
          <Story />
        </QueryClientProvider>
      );
    },
  ],
};

/**@type{import('@storybook/react').StoryObj} */
export const 기본표시 = {};
