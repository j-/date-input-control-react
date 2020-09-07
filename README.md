Date input control React
========================

Uses the [date-input-control](https://github.com/j-/date-input-control) library
under the hood to implement a simple control for capturing dates in any format.

How to use it
-------------

Install the `date-input-control-react` package in your project.

```sh
$ npm install date-input-control-react
```

Import `useDateInputControl` hook and call it within your component. It will
return an array of refs (up to 10) which should be assigned (in order) to your
input elements.

```jsx
import { useDateInputControl } from 'date-input-control-react';

const DateOfBirth = () => {
  const [dd, mm, yyyy] = useDateInputControl();
  return (
    <fieldset role="group">
      <legend>Date of birth</legend>
      <input
        ref={dd}
        type="text"
        maxLength={2}
        inputMode="numeric"
        pattern="[0-9]*"
        defaultValue=""
      />
      <input
        ref={mm}
        type="text"
        maxLength={2}
        inputMode="numeric"
        pattern="[0-9]*"
        defaultValue=""
      />
      <input
        ref={yyyy}
        type="text"
        maxLength={4}
        inputMode="numeric"
        pattern="[0-9]*"
        defaultValue=""
      />
    </fieldset>
  );
};
```

There are two requirements in order for this package to function correctly:

1. Inputs must be of type `text`. You cannot use type `number`.
2. Inputs must have a `maxLength` attribute.

It is recommended that you add `inputMode="numeric"` and `pattern="[0-9*]"` on
each input which will enable the numeric keyboard on mobile devices.
