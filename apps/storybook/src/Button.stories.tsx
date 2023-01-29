import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '@alexandre-jung/hrnet-ui';

export default {
  title: 'ui/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'Hello world!',
  type: 'error',
};
Default.storyName = 'Button';
