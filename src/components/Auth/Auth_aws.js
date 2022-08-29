import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export default function Auth_aws() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          <h1>Hello  {user.username} you are authenticated</h1>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}