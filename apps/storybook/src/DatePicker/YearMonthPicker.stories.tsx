import { ComponentMeta, ComponentStory } from '@storybook/react';

import { YearMonthPicker } from '@hrnet-aj/date-picker';

export default {
  title: 'date-picker/YearMonthPicker',
  component: YearMonthPicker,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
} as ComponentMeta<typeof YearMonthPicker>;

const Template: ComponentStory<typeof YearMonthPicker> = (args) => (
  <YearMonthPicker {...args} />
);

export const Uncontrolled = Template.bind({});
Uncontrolled.args = {
  defaultValue: {
    year: 1985,
    month: 10,
  },
  startYear: 1900,
  endYear: 2050,
};

export const Controlled = Template.bind({});
Controlled.args = {
  value: {
    year: 1985,
    month: 10,
  },
  startYear: 1900,
  endYear: 2050,
};
