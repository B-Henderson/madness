import { RouterProps } from '@reach/router';
import React from 'react';

export interface Props{
  component: React.FC<RouterProps>;
  location?: Location;
  path?: string;
}
