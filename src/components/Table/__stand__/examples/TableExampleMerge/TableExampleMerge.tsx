import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Table, TableColumn } from '../../../Table';

const rows = [
  { id: '1', person: 'Винни Пух', food: 'Мёд' },
  { id: '2', person: 'Пятачок', food: 'Мёд' },
  { id: '3', person: 'Ослик Иа', food: 'Чертополох' },
  { id: '4', person: 'Крошка Ру', food: 'Рыбий жир' },
  { id: '5', person: 'Кристофер Робин', food: 'Мёд' },
];

const columns: TableColumn<typeof rows[number]>[] = [
  {
    title: 'Кто',
    accessor: 'person',
  },
  {
    title: 'Что ест',
    accessor: 'food',
    mergeCells: true,
  },
];

export function TableExampleMerge() {
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <Table
        columns={columns}
        rows={rows}
        borderBetweenRows
        borderBetweenColumns
      />
    </StoryBookExample>
  );
}
