import { AccessToken } from 'livekit-server-sdk';

import { CretateTokenProps } from 'types';

const createToken = ({
  roomName,
  participantName,
  accessTokenOpts,
  grantOpts
}: CretateTokenProps) => {
  const at = new AccessToken(process.env.API_KEY, process.env.SECRET_KEY, {
    identity: participantName,
    ...accessTokenOpts
  });
  at.addGrant({ roomJoin: true, room: roomName, ...grantOpts });

  const token = at.toJwt();
  return token;
};

export default createToken;
