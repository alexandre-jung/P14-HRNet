import { ComponentMeta, ComponentStory } from '@storybook/react';

import { columns, data, DataTable } from '@hrnet-aj/data-table';

export default {
  title: 'libs/data-table',
  component: DataTable,
  parameters: {
    layout: 'padded',
  },
} as ComponentMeta<typeof DataTable>;

const Template: ComponentStory<typeof DataTable> = (args) => {
  return (
    <DataTable {...args} />
  );
};

export const Default = Template.bind({});
Default.args = {
  data,
  columns,
  defaultSort: '+lastName',
};
Default.storyName = 'DataTable';
