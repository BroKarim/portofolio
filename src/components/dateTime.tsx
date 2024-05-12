'use client';

import React, { useState, useEffect } from 'react';

export const DateTime = () => {
  var [date, setDate] = useState(new Date());

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    setHydrated(true); // Setelah komponen di-mount dan di-render pertama kali di sisi klien, kita set hydrated menjadi true.

    return () => clearInterval(timer);
  }, []);

  if (!hydrated) {
    // Render null saat proses hydrating belum selesai.
    return null;
  }

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <p>
          {hours}:{minutes < 10 ? '0' : ''}
          {minutes}:{seconds < 10 ? '0' : ''}
          {seconds}
        </p>

        <p>{date.toLocaleDateString()}</p>
      </div>
    </>
  );
};

export default DateTime;
