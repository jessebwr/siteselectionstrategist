import { FunctionComponent } from 'react';

const SetupVideo: FunctionComponent = () => {
  return (
    <div css={{ height: 0, zIndex: -1 }}>
      <div css={{ height: 850, filter: 'brightness(0.5)' }}>
        <video
          src="/assets/videos/prep-video.mp4"
          autoPlay
          height="100%"
          loop
          muted
        />
      </div>
    </div>
  );
};

export default SetupVideo;
