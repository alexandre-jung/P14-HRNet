# hrnet-aj/select

1. [Installation](#installation)
2. [Basic usage](#basic-usage)
    - [Uncontrolled mode](#uncontrolled-mode)
    - [Controlled mode](#controlled-mode)
3. [Styling](#styling)
4. [Extra options](#extra-options)
5. [FAQ](#faq)

## Installation

```shell
npm i -D @hrnet-aj/select
pnpm add -D @hrnet-aj/select
```

## Basic usage

Start by creating an array with your desired options.

```typescript
export const options = [
  { label: '🎉 initial commit', value: 'initialCommit' },
  { label: '📦️ feat: add date-picker package', value: 'addDatePicker' },
  { label: '🚚 chore: rename packages', value: 'renamePackages' },
  { label: '♻️ refactor(date-picker): refactor package', value: 'refactorDatePickerPackage' },
  { label: '✨ feat(icons): add assets', value: 'addAssets' },
  { label: '💄 style(date-picker): style MonthSelect', value: 'styleMonthSelect' },
];
```

Then just send in your options through the `options` prop, and you're ready to go!

```typescript jsx
import { Select } from '@hrnet-aj/select';

<Select options={options} />
```

### Uncontrolled mode

By default, the Select component is uncontrolled.\
You can use the `defaultValue` prop to give it an initial value.

```typescript jsx
<Select
  // ...
  defaultValue="addAssets"
/>
```

To make that work with a form, you can use the `name` prop.\
This works the same as with a standard HTML `<select />`.

```typescript jsx
<Select
  // ...
  name="mySelect"
/>
```

This way, the form data will contain an entry where the key is this `name`,\
and the value is the `value` property of your corresponding option.

### Controlled mode

To control the Select, create a state holding a string.\
This state will hold the `value` property of the selected option.\
Then use the standard `value` and `onChange` props.

```typescript jsx
const [value, setValue] = useState('');

const handleChange = (nextValue: string) => {
  // ...
  setValue(nextValue);
};

<Select
  // ...
  value={value}
  onChange={handleChange}
/>
```

> TIP\
> If you don't need to do extra work on value changes,\
> you can simply set `onChange={setValue}`

## Extra options

You can display some extra information to the user.\
This works the same as with the native `<select />`

```typescript jsx
<Select
  // ...
  placeholder="Select a commit message"
  label="Commit message"
  required
/>
```

## Styling

If you need custom styles, you can either pass in a `className` or `inputStyle`.

- `className` is sent to the root element of the component.
- `inputStyle` is the equivalent of the standard `style` prop, and is redirected to the input.

```typescript jsx
<Select
  // ...
  className="mySelect"
  inputStyle={{ backgroundColor: 'white' }}
/>
```

If you need more styling options, please read the [FAQ](#faq).

## FAQ

<details>
   <summary>
      Can I reset the Select?
   </summary>
   <p>
      For now, resetting the Select is not supported in uncontrolled mode.<br />
      If you need to reset it,
      please use the controlled mode and set the state to an empty string.
   </p>
</details>

<details>
   <summary>
      How far can I customize the component ?
   </summary>
   <p>
      For now, the styling options are pretty limited.<br />
      You can try to set a <code>className</code> to the root element,
      and target the child elements in your CSS,<br />
      but there is no guarantee that it will work in every case.<br />
      We intend to improve this later.
   </p>
</details>
