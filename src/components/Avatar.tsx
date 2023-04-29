import React from "react";

export default function Avatar({ size, url }: { url: string; size: number }) {
  return (
    <div>
      {url ? (
        <img
          src={url}
          alt="Avatar"
          className="rounded"
          style={{ height: size, width: size }}
        />
      ) : (
        <div className="" style={{ height: size, width: size }} />
      )}
    </div>
  );
}
