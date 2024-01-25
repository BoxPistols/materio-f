// React Imports
import React from 'react';

// MUI Imports
import Avatar from '@mui/material/Avatar';

// Custom Components Imports
import CustomBadge from '@docComponents/mui/Badge';

// Image Imports
// You don't need to import the image as below. You can directly use the path instead of the image variable.
// We had to import the images because we are using them in the Documentation.
import avatar1 from '../../../../docs/assets/images/avatars/1.png'

const BadgesTonal = () => {
  return (
    <div className='flex gap-4'>
      <CustomBadge color='primary' badgeContent={4} tonal='true'>
        <Avatar src={avatar1} alt='User Avatar' />
      </CustomBadge>
      <CustomBadge color='secondary' badgeContent={4} tonal='true'>
        <Avatar src={avatar1} alt='User Avatar' />
      </CustomBadge>
      <CustomBadge color='success' badgeContent={4} tonal='true'>
        <Avatar src={avatar1} alt='User Avatar' />
      </CustomBadge>
      <CustomBadge color='error' badgeContent={4} tonal='true'>
        <Avatar src={avatar1} alt='User Avatar' />
      </CustomBadge>
      <CustomBadge color='warning' badgeContent={4} tonal='true'>
        <Avatar src={avatar1} alt='User Avatar' />
      </CustomBadge>
      <CustomBadge color='info' badgeContent={4} tonal='true'>
        <Avatar src={avatar1} alt='User Avatar' />
      </CustomBadge>
    </div>
  );
};

export default BadgesTonal;
