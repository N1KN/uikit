import React, { useState } from 'react';

import { AutoComplete } from '##/components/AutoCompleteCanary/AutoCompleteCanary';
import { cnDocsDecorator } from '##/uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '##/uiKit/components/StoryBookExample/StoryBookExample';

type Item = {
  label: string;
  id: number;
};

const items: Item[] = [
  {
    label: 'Первый',
    id: 1,
  },
  {
    label: 'Второй',
    id: 2,
  },
  {
    label: 'Третий',
    id: 3,
  },
];
export const AutoCompleteExampleView = () => {
  const [value, setValue] = useState<string | null>(null);
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <AutoComplete
        type="text"
        value={value}
        view="default"
        items={items}
        onChange={({ value }) => setValue(value)}
      />
      <AutoComplete
        type="text"
        value={value}
        items={items}
        view="clear"
        onChange={({ value }) => setValue(value)}
      />
    </StoryBookExample>
  );
};
