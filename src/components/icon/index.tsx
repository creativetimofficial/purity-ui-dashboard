'use client'

import { forwardRef, CSSProperties } from 'react';
import { Icon } from '@iconify/react';

// Define the properties for the Iconify component
interface IconifyProps {
  icon: string;
  width?: number;
  sx?: CSSProperties;
  className?: string; // Add className property
}

// Create the forwardRef component
const Iconify = forwardRef<HTMLElement, IconifyProps>(
  ({ icon, width = 24, sx, className, ...other }) => (
    // Render the Icon component with the provided properties
    <Icon
      icon={icon}
      fontSize='1.5rem'
      style={{ width, height: width, ...sx }}
      className={className} // Include the className
      {...other}
    />
  )
);

export default Iconify;

