import Image from 'next/image';
import React from 'react'

export default function Logo() {
  return (
    <div className=' flex gap-2 items-center'>
      <Image
        src="/logo/mainLogo.png"
        alt="logo Rocher Renove"
        width={50}
        height={50}
      />
      <h1>ROCHER RENOVE</h1>
    </div>
  );
}
