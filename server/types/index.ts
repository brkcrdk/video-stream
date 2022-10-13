import { Request } from 'express';
import { AccessTokenOptions, VideoGrant } from 'livekit-server-sdk';

export interface CreateTokenProps {
  roomName: string;
  participantName: string;
  accessTokenOpts?: AccessTokenOptions;
  grantOpts?: VideoGrant;
}

export interface GenericRequest<T> extends Request {
  body: T;
}
