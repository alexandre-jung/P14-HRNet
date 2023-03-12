import { ComponentMeta, ComponentStory } from '@storybook/react';

import { YearPicker } from '@hrnet-aj/date-picker';

export default {
  title: 'date-picker/YearPicker',
  component: YearPicker,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
} as ComponentMeta<typeof YearPicker>;

const Template: ComponentStory<typeof YearPicker> = (args) => (
  <YearPicker {...args} />
);

export const Uncontrolled = Template.bind({});
Uncontrolled.args = {
  defaultValue: 1985,
  startYear: 1900,
  endYear: 2050,
};

export const Controlled = Template.bind({});
Controlled.args = {
  value: 1985,
  startYear: 1900,
  endYear: 2050,
};
