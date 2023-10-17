// React Imports
import React from 'react';

// MUI Imports
import Avatar from '@mui/material/Avatar';

// Custom Components Imports
import CustomBadge from '@docComponents/mui/Badge';

const BadgesLight = () => {
  return (
    <div className='flex gap-4'>
      <CustomBadge badgeContent={4} tonal>
        <Avatar src='/images/avatars/1.png' alt='User Avatar' />
      </CustomBadge>
      <CustomBadge color='secondary' badgeContent={4} tonal>
        <Avatar src='/images/avatars/1.png' alt='User Avatar' />
      </CustomBadge>
      <CustomBadge color='success' badgeContent={4} tonal>
        <Avatar src='/images/avatars/1.png' alt='User Avatar' />
      </CustomBadge>
      <CustomBadge color='error' badgeContent={4} tonal>
        <Avatar src='/images/avatars/1.png' alt='User Avatar' />
      </CustomBadge>
      <CustomBadge color='warning' badgeContent={4} tonal>
        <Avatar src='/images/avatars/1.png' alt='User Avatar' />
      </CustomBadge>
      <CustomBadge color='info' badgeContent={4} tonal>
        <Avatar src='/images/avatars/1.png' alt='User Avatar' />
      </CustomBadge>
    </div>
  );
};

export default BadgesLight;
