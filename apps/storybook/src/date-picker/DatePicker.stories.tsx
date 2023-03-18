import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DatePicker } from '@hrnet-aj/date-picker';
import { clamp } from '@hrnet-aj/utils';

export default {
  title: 'date-picker/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => {
  const [date, setDate] = useState({
    year: 2000,
    month: 0,
    day: 12,
  });

  const validDate = {
    ...date,
    year: clamp(date.year, args.minYear, args.maxYear),
  };

  return (
    <div style={{ display: 'inline-block' }}>
      <DatePicker
        {...args}
        date={validDate}
        onChange={setDate}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 15,
          }}
        >
          <DatePicker.Today />

          <DatePicker.MonthControls>
            <DatePicker.MonthSelect />
          </DatePicker.MonthControls>

          <DatePicker.YearControls>
            <DatePicker.YearSelect />
          </DatePicker.YearControls>
        </div>

        <DatePicker.Calendar />

      </DatePicker>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  minYear: 1980,
  maxYear: 2030,
};
Default.storyName = 'DatePicker';
