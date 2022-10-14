import { StageProps } from '@livekit/react-components';

function StageRenderer({ roomState }: StageProps) {
  console.log(roomState);
  const { isConnecting, error, room } = roomState;

  if (isConnecting) {
    return <h1>Connecting...</h1>;
  }
  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  if (!room) {
    return <h1>Room closed</h1>;
  }
  return <div>StageRenderer is here</div>;
}
export default StageRenderer;
