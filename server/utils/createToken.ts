import {
  AccessToken,
  AccessTokenOptions,
  VideoGrant
} from 'livekit-server-sdk';

interface Props {
  roomName: string;
  participantName: string;
  accessTokenOpts?: AccessTokenOptions;
  grantOpts?: VideoGrant;
}

const createToken = ({
  roomName,
  participantName,
  accessTokenOpts,
  grantOpts
}: Props) => {
  const at = new AccessToken(process.env.API_KEY, process.env.SECRET_KEY, {
    identity: participantName,
    ...accessTokenOpts
  });
  at.addGrant({ roomJoin: true, room: roomName, ...grantOpts });

  const token = at.toJwt();
  return token;
};

export default createToken;
