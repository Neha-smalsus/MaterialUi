import * as React from 'react';
import { ILmsProps } from './ILmsProps';
import Dashboard from './Employee/Dashboard';

export default class Lms extends React.Component<ILmsProps, {}> {
  public render(): React.ReactElement<ILmsProps> {
    

    return (
      <section >
      <Dashboard/>
      </section>
    );
  }
}
