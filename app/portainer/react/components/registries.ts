import angular from 'angular';

import { r2a } from '@/react-tools/react2angular';
import { withReactQuery } from '@/react-tools/withReactQuery';
import { DefaultRegistryName } from '@/react/portainer/registries/ListView/RegistriesDatatable/columns/DefaultRegistryName';
import { DefaultRegistryAction } from '@/react/portainer/registries/ListView/RegistriesDatatable/columns/DefaultRegistryAction';
import { DefaultRegistryDomain } from '@/react/portainer/registries/ListView/RegistriesDatatable/columns/DefaultRegistryDomain';

export const registriesModule = angular
  .module('portainer.app.react.components.registries', [])
  .component(
    'defaultRegistryName',
    r2a(withReactQuery(DefaultRegistryName), [])
  )
  .component(
    'defaultRegistryAction',
    r2a(withReactQuery(DefaultRegistryAction), [])
  )
  .component(
    'defaultRegistryDomain',
    r2a(withReactQuery(DefaultRegistryDomain), [])
  ).name;
