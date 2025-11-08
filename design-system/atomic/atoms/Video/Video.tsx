// src/design-system/atomic/atoms/Video/Video.tsx
import React, { useState, useRef } from 'react';
import { VideoProps } from './Video.types';
import { cn } from '../../../utils/cn';

export const Video: React.FC<VideoProps> = ({
    src,
    poster,
    autoplay = false,
    loop = false,
    muted = false,
    controls = true,
    onPlay,
    onPause,
    onEnded,
    className,
    ...props
}) => {
    const [videoState, setVideoState] = useState<'loading' | 'loaded' | 'error'>('loading');
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleLoadStart = () => {
        setVideoState('loading');
    };

    const handleCanPlay = () => {
        setVideoState('loaded');
    };

    const handleError = () => {
        setVideoState('error');
    };

    const handlePlay = () => {
        onPlay?.();
    };

    const handlePause = () => {
        onPause?.();
    };

    const handleEnded = () => {
        onEnded?.();
    };

    return (
        <div className={cn(styles.videoContainer, className)}>
            {videoState === 'loading' && (
                <div className={styles.loading}>
                    <span className={styles.loadingText}>Cargando video...</span>
                </div>
            )}

            {videoState === 'error' && (
                <div className={styles.error}>
                    <span className={styles.errorText}>Error al cargar video</span>
                </div>
            )}

            <video
                ref={videoRef}
                src={src}
                poster={poster}
                autoPlay={autoplay}
                loop={loop}
                muted={muted}
                controls={controls}
                className={cn(
                    styles.video,
                    videoState !== 'loaded' && 'hidden'
                )}
                onLoadStart={handleLoadStart}
                onCanPlay={handleCanPlay}
                onError={handleError}
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handleEnded}
                style={{ display: videoState === 'loaded' ? 'block' : 'none' }}
                {...props}
            />
        </div>
    );
};
