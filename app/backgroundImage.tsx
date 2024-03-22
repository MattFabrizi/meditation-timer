import Image from "next/image";
import backgroundImage from "../public/bg_temp.jpg";

export function Background() {
  return (
    <Image
      alt="background-image"
      src={backgroundImage}
      fill
      sizes="100vw"
      style={{ objectFit: "cover", zIndex: -1 }}
    />
  );
}
