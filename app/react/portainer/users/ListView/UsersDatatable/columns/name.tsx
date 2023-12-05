import { CellContext } from '@tanstack/react-table';

import { useCurrentUser } from '@/react/hooks/useUser';

import { Link } from '@@/Link';

import { DecoratedUser } from '../types';

import { helper } from './helper';

export const name = helper.accessor('Username', {
  header: 'Name',
  cell: Cell,
});

function Cell({
  getValue,
  row: { original: item },
}: CellContext<DecoratedUser, 'string'>) {
  const { isAdmin } = useCurrentUser();
  const name = getValue();

  if (!isAdmin) {
    return <>{name}</>;
  }

  return (
    <Link to=".user" params={{ id: item.Id }}>
      {name}
    </Link>
  );
}
