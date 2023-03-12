import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Calendar } from '@hrnet-aj/date-picker';

export default {
  title: 'date-picker/Calendar',
  component: Calendar,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => (
  <Calendar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  year: 1985,
  month: 10,
};
Default.storyName = 'Calendar';
