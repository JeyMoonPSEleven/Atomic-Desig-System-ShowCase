// src/design-system/atomic/atoms/MediaGallery/MediaGallery.tsx
import React, { useState } from 'react';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { Text } from '../Text';
import { cn } from '../../../utils/cn';

export interface MediaItem {
    id: string;
    type: 'image' | 'video' | 'audio' | 'document';
    src: string;
    title: string;
    description?: string;
    thumbnail?: string;
    duration?: string;
    size?: string;
}

export interface MediaGalleryProps {
    items: MediaItem[];
    columns?: 2 | 3 | 4 | 6;
    showInfo?: boolean;
    showActions?: boolean;
    className?: string;
}

export const MediaGallery = React.memo<MediaGalleryProps>(({
    items,
    columns = 3,
    showInfo = true,
    showActions = true,
    className
}) => {
    const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

    const getMediaIcon = (type: MediaItem['type']) => {
        switch (type) {
            case 'image': return 'Image';
            case 'video': return 'Play';
            case 'audio': return 'Music';
            case 'document': return 'FileText';
            default: return 'File';
        }
    };

    const handleItemClick = (item: MediaItem) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    const gridCols = {
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        6: 'grid-cols-6',
    };

    return (
        <div className={cn('w-full', className)}>
            <div className={cn('grid gap-4', gridCols[columns])}>
                {items.map((item) => (
                    <div key={item.id} className="relative">
                        <div
                            className="relative overflow-hidden rounded-lg cursor-pointer group"
                            onClick={() => handleItemClick(item)}
                        >
                            {item.type === 'image' ? (
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : item.type === 'video' ? (
                                <div className="relative">
                                    <video
                                        src={item.src}
                                        className="w-full h-full object-cover"
                                        poster={item.thumbnail}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                        <Icon name="Play" size="large" className="text-white" />
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg">
                                    <Icon name={getMediaIcon(item.type)} size="large" />
                                    <div className="mt-4 text-center">
                                        <Text variant="small" weight="bold">{item.title}</Text>
                                        {item.size && (
                                            <Text variant="caption" color="muted">{item.size}</Text>
                                        )}
                                    </div>
                                </div>
                            )}

                            {item.type === 'video' && item.duration && (
                                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                    {item.duration}
                                </div>
                            )}
                        </div>

                        {showInfo && (
                            <div className="mt-2">
                                <Text variant="small" weight="bold">
                                    {item.title}
                                </Text>
                                {item.description && (
                                    <Text variant="caption" color="muted">
                                        {item.description}
                                    </Text>
                                )}
                            </div>
                        )}

                        {showActions && (
                            <div className="flex gap-2 mt-2">
                                <Button
                                    variant="secondary"
                                    size="small"
                                    onClick={() => handleItemClick(item)}
                                >
                                    <Icon name="Eye" size="small" />
                                </Button>
                                <Button
                                    variant="secondary"
                                    size="small"
                                    onClick={() => window.open(item.src, '_blank')}
                                >
                                    <Icon name="Download" size="small" />
                                </Button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Modal para vista ampliada */}
            {selectedItem && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-4xl w-full bg-white rounded-lg p-6 mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <Text variant="large" weight="bold">{selectedItem.title}</Text>
                            <Button
                                variant="secondary"
                                size="small"
                                onClick={closeModal}
                            >
                                <Icon name="X" size="small" />
                            </Button>
                        </div>

                        <div className="w-full">
                            {selectedItem.type === 'image' ? (
                                <img
                                    src={selectedItem.src}
                                    alt={selectedItem.title}
                                    className="w-full h-auto rounded-lg"
                                />
                            ) : selectedItem.type === 'video' ? (
                                <video
                                    src={selectedItem.src}
                                    className="w-full h-auto rounded-lg"
                                    controls
                                    autoPlay
                                />
                            ) : (
                                <div className="flex flex-col items-center justify-center p-12">
                                    <Icon name={getMediaIcon(selectedItem.type)} size="large" />
                                    <Text variant="large" weight="bold" className="mt-4">{selectedItem.title}</Text>
                                    {selectedItem.description && (
                                        <Text variant="small" color="muted">{selectedItem.description}</Text>
                                    )}
                                </div>
                            )}
                        </div>

                        {selectedItem.description && (
                            <div className="mt-4">
                                <Text variant="small" color="muted">{selectedItem.description}</Text>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
});

MediaGallery.displayName = 'MediaGallery';
