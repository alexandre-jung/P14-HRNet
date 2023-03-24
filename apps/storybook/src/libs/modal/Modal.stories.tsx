import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal } from '@hrnet-aj/modal';

export default {
  title: 'libs/modal',
  component: Modal,
  parameters: {
    layout: 'padded',
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  return <Modal {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  show: true,
};
Default.storyName = 'modal';
