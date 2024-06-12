import { forwardRef } from "react";
const Images = forwardRef(({ src, alt, className, props }, ref) => {
  return <img ref={ref} src={src} alt={alt} className={className} {...props} />;
});

export default Images;
