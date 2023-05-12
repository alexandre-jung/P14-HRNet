import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Select } from '@hrnet-aj/select';

export default {
  title: 'libs/select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
} as ComponentMeta<typeof Select>;

const options = [
  { label: '🎉 initial commit', value: 0 },
  { label: '📦️ feat: add date-picker package', value: 1 },
  { label: '🚚 chore: rename packages', value: 2 },
  { label: '♻️ refactor(date-picker): refactor package', value: 3 },
  { label: '✨ feat(icons): add assets', value: 4 },
  { label: '💄 style(date-picker): style MonthSelect', value: 5 },
];

const Template: ComponentStory<typeof Select> = (args) => {
  return <Select {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  options,
  placeholder: 'Select a commit message',
};
Default.storyName = 'select';
