import { FC } from 'react';

export interface IBasicRoute {
  path: string;
  component: FC;
  key?: string;
  children?: FC;
}
