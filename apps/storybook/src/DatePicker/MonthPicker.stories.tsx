import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MonthPicker } from '@alexandre-jung/date-picker';

export default {
  title: 'date-picker/MonthPicker',
  component: MonthPicker,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
} as ComponentMeta<typeof MonthPicker>;

const Template: ComponentStory<typeof MonthPicker> = (args) => (
  <MonthPicker {...args} />
);

export const Uncontrolled = Template.bind({});
Uncontrolled.args = {
  defaultValue: 0,
};

export const Controlled = Template.bind({});
Controlled.args = {
  value: 0,
};
