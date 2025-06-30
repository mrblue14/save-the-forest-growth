
import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  width,
  height
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  // Optimize image URLs for mobile
  const optimizedSrc = src.includes('unsplash.com') 
    ? `${src}&auto=format&fit=crop&q=75&w=${width || 600}`
    : src;

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
      )}
      
      {hasError ? (
        <div className="bg-gray-100 flex items-center justify-center rounded-lg min-h-[200px]">
          <span className="text-gray-600">Image not available</span>
        </div>
      ) : (
        <img
          src={optimizedSrc}
          alt={alt}
          className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          loading={loading}
          width={width}
          height={height}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
