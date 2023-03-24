import React, { CSSProperties } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import * as icons from '@hrnet-aj/icons';
import { Calendar } from '@hrnet-aj/icons';

export default {
  title: 'libs/icons',
  component: Object.values(icons)[0],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    color: {
      control: {
        type: 'color',
        presetColors: ['red', 'green', 'blue', 'slateblue'],
      },
      defaultValue: '#1EA7FD',
    },
  },
} as ComponentMeta<typeof Calendar>;

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
} satisfies CSSProperties;

const itemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
} satisfies CSSProperties;

const Template: ComponentStory<typeof Calendar> = ({ color, ...args }) => (
  <div style={{ color, ...containerStyle }}>
    {Object.entries(icons).map(([name, Icon]) => {
      return (
        <div style={itemStyle} key={name}>
          <Icon {...args} />
          <span>{name}</span>
        </div>
      );
    })}
  </div>
);

export const Default = Template.bind({});
Default.args = {
  width: 24,
  height: 24,
};
Default.storyName = 'icons';
