import { parseArrayOfStrings } from '@@/form-components/EnvironmentVariablesFieldset/utils';

import { ContainerJSON } from '../../queries/container';

export function getDefaultViewModel() {
  return [
    { name: 'LANG', value: 'C.UTF-8' },
    { name: 'LC_ALL', value: 'C.UTF-8' },
  ];
}

export function toViewModel(container: ContainerJSON) {
  return parseArrayOfStrings(container.Config?.Env);
}
