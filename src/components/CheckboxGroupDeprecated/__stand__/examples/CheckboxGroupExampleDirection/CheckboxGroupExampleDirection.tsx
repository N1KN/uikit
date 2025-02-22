import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Item, items } from '../../../__mocks__/data.mock';
import { CheckboxGroup } from '../../../CheckboxGroupDeprecated';

export function CheckboxGroupExampleRow() {
  const [value, setValue] = React.useState<Item[] | null>(null);

  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <CheckboxGroup
        value={value}
        items={items}
        getLabel={(item) => item.name}
        getDisabled={(item) => item.disabled}
        onChange={({ value }) => setValue(value)}
        direction="row"
      />
    </StoryBookExample>
  );
}

export function CheckboxGroupExampleColumn() {
  const [value, setValue] = React.useState<Item[] | null>(null);

  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <CheckboxGroup
        value={value}
        items={items}
        getLabel={(item) => item.name}
        getDisabled={(item) => item.disabled}
        onChange={({ value }) => setValue(value)}
        direction="column"
      />
    </StoryBookExample>
  );
}
