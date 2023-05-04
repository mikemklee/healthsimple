import Image from "next/image";
import React from "react";

export default function Avatar({
  size,
  url,
}: {
  url: string | null;
  size: number;
}) {
  return (
    <div>
      {url ? (
        <Image
          src={url}
          width={size}
          height={size}
          alt="Avatar"
          className="rounded"
        />
      ) : (
        <div className="" style={{ height: size, width: size }} />
      )}
    </div>
  );
}
