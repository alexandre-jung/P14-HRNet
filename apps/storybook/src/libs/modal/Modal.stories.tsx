import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Layer, Modal } from '@hrnet-aj/modal';

// TODO log action on close

export default {
  title: 'libs/modal',
  component: Modal,
  parameters: {
    layout: 'padded',
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  return (
    <Layer id="modal-layer">
      <Modal {...args}>
        <Modal.Header closeButton>
          Example modal
        </Modal.Header>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequatur cumque eum illo odit. Deserunt in
        magnam nihil quas rem repellat similique sit voluptatum. Dicta dolores facere iure maxime praesentium provident
        reiciendis repellendus reprehenderit sed temporibus. Adipisci aperiam dolor ea, esse eveniet explicabo labore
        qui quia repellendus sapiente ut voluptatibus?
      </Modal>
    </Layer>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: 'modal-1',
  show: true,
};
Default.storyName = 'modal';
