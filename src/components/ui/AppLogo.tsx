'use client';

import React, { memo, useMemo } from 'react';
import AppIcon from './AppIcon';
import AppImage from './AppImage';

interface AppLogoProps {
  src?: string;
  iconName?: string;
  /** Legacy square size (width & height) */
  size?: number;
  /** Preferred: fixed height, auto width — keeps logo aspect ratio */
  height?: number;
  width?: number;
  className?: string;
  onClick?: () => void;
  priority?: boolean;
}

const AppLogo = memo(function AppLogo({
  src = '/assets/images/app_logo.png',
  iconName = 'SparklesIcon',
  size,
  height,
  width,
  className = '',
  onClick,
  priority = true,
}: AppLogoProps) {
  const containerClassName = useMemo(() => {
    const classes = ['flex items-center shrink-0'];
    if (onClick) classes.push('cursor-pointer hover:opacity-90 transition-opacity');
    if (className) classes.push(className);
    return classes.join(' ');
  }, [onClick, className]);

  const imgHeight = height ?? size ?? 48;
  const imgWidth = width ?? (size ? size : undefined);

  return (
    <div className={containerClassName} onClick={onClick}>
      {src ? (
        <AppImage
          src={src}
          alt="CosmoTrace"
          width={imgWidth ?? Math.round(imgHeight * 2.2)}
          height={imgHeight}
          className="h-auto w-auto max-h-full object-contain object-left"
          priority={priority}
          unoptimized={src.endsWith('.svg')}
        />
      ) : (
        <AppIcon name={iconName} size={imgHeight} className="flex-shrink-0" />
      )}
    </div>
  );
});

AppLogo.displayName = 'AppLogo';

export default AppLogo;
