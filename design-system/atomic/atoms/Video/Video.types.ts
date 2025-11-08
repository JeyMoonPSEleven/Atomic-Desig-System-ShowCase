// src/design-system/atomic/atoms/Video/Video.types.ts
import React from 'react';

export interface VideoProps extends Omit<React.VideoHTMLAttributes<HTMLVideoElement>, 'onPlay' | 'onPause' | 'onEnded'> {
    src: string;
    poster?: string;
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
    controls?: boolean;
    onPlay?: () => void;
    onPause?: () => void;
    onEnded?: () => void;
    className?: string;
}
