import React from "react";

export default function Footer() {
  return (
    <footer className="mb-6 px-4 text-center text-gray-500">
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, Vercel hosting.
      </p>
      <p>
        <span className="text-xs">Powered by ByteGrad</span>
      </p>
    </footer>
  );
}
