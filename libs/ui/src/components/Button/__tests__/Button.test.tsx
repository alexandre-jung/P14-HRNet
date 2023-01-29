import { render } from '@testing-library/react';
import Button from '..';

describe('Button', () => {
  it('should work', function () {
    const { container } = render(
      <Button type="error" text="Hello world!" onClick={() => {}} />,
    );

    expect(container).toMatchSnapshot();
  });
});
