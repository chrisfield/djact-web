import React from 'react';
import { Trans } from '@lingui/macro';

import useAuthentification from '../auth/use-authentication';

const User: React.FC = () => {
  const { user } = useAuthentification();
  return (
    <div>
      <h1><Trans>User Profile</Trans></h1>
      <div>
        Username: {user?.username}
      </div>
    </div>
  );
};

export default User;
