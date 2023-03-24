import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DatePicker, { Date } from '@hrnet-aj/date-picker';
import { clamp } from '@hrnet-aj/utils';

export default {
  title: 'libs/date-picker',
  component: DatePicker,
  parameters: {
    layout: 'padded',
  },
} as ComponentMeta<typeof DatePicker>;

const changedAction = action('changed');

const Template: ComponentStory<typeof DatePicker> = (args) => {
  const [date, setDate] = useState({
    year: 2000,
    month: 0,
    day: 12,
  });

  const handleChange = (date: Date) => {
    changedAction(date);
    setDate(date);
  };

  const validDate = {
    ...date,
    year: clamp(date.year, args.minYear, args.maxYear),
  };

  return (
    <div style={{ display: 'inline-block' }}>
      <DatePicker
        {...args}
        date={validDate}
        onChange={handleChange}
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
Default.storyName = 'date-picker';
