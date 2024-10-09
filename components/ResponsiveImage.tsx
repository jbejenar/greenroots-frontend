// // components/ResponsiveImage.tsx
// import Image from 'next/image';

// interface ResponsiveImageProps {
//   src: string;
//   alt: string;
//   width: number;
//   height: number;
// }

// const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ src, alt, width, height }) => (
//   <Image
//     src={src}
//     alt={alt}
//     width={width}
//     height={height}
//     layout="responsive"
//     placeholder="blur"
//     blurDataURL="/images/placeholder.png" // Placeholder image
//   />
// );

// export default ResponsiveImage;

// components/ResponsiveImage.tsx

export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return <img src={src} alt={alt} width={width} height={height} />;
}
