import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Select } from '@hrnet-aj/select';

export default {
  title: 'libs/select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = () => {
  return <Select />;
};

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'select';
