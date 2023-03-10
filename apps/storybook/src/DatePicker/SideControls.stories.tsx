import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SideControls } from '@hrnet-aj/date-picker';

export default {
  title: 'date-picker/SideControls',
  component: SideControls,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    onPrevious: { action: 'previous' },
    onNext: { action: 'next' },
  },
} as ComponentMeta<typeof SideControls>;

const Template: ComponentStory<typeof SideControls> = (args) => (
  <SideControls {...args} />
);

export const Default = Template.bind({});
Default.args = {
};
Default.storyName = 'SideControls';
