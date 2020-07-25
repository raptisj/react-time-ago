![logo-time-ago](./src/logo-time-ago.png)

# React-Time-Ago

This is a reusable component that tells you how much time was passed from a given date..

_This is also part of a tutorial. I document the process for my future self and rookie developers like me._ **Coming soon**

## Example

```jsx
<TimeAgo
  date="Fri Jul 24 2020 20:21:49 GMT+0300 (Eastern European Summer Time)"
  dateFormat="DD MM YY"
  dateWithTime={true}
  label="Created"
  separator="/"
  className="container"
/>
```

## Props

Props you will use:

- `date` - The date of creation. This will usually come from a database.
- `dateFormat` - This sets the what format you want your date to have.(Day with letter, month with letters or numbers, etc..).
- `label` - The name to be displayed before date or time passed. Default is "Created".
- `separator` - The symbol that separates the days/months/year when date is shown. Default is "/".
- `dateWithTime` - Set to true is you want the time to be displayed next to date. Default is false.
- `className` - ClassName for custom styles.

## Future Features

Things I'm currently working on or just playing around with.

- Different language support.
- AM/PM option.
