import { withAuthenticator } from '@aws-amplify/ui-react';

function forum() {
    return <h1>the forum page</h1>

}

export default withAuthenticator(forum)