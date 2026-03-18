'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { GALLERY_PREVIEW_IMAGES, BRAND_COLORS } from '../constants';

export const GalleryPreviewSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const openItem = GALLERY_PREVIEW_IMAGES.find((p) => p.id === openId) ?? null;

  const close = useCallback(() => setOpenId(null), []);

  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openId, close]);

  if (GALLERY_PREVIEW_IMAGES.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center text-slate-500">
        <p className="font-medium">No photos yet.</p>
        <p className="mt-2 text-sm">
          Add images in <code className="rounded bg-white px-1.5 py-0.5 text-xs">public/images/gallery/</code> and list them in{' '}
          <code className="rounded bg-white px-1.5 py-0.5 text-xs">GALLERY_PREVIEW_IMAGES</code> in constants.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Masonry-style columns: each image keeps its natural aspect ratio */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 md:gap-6 lg:gap-8 [column-fill:_balance]">
        {GALLERY_PREVIEW_IMAGES.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setOpenId(item.id)}
            className="group relative mb-5 md:mb-6 lg:mb-8 w-full break-inside-avoid overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#056385]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#056385] focus-visible:ring-offset-2 block p-0 text-left"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- natural dimensions per photo */}
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-auto align-middle object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: `linear-gradient(to top, ${BRAND_COLORS.primary}66 0%, transparent 55%)`,
              }}
            />
          </button>
        ))}
      </div>

      {openItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 z-[101] rounded-full bg-white/10 hover:bg-white/20 text-white p-2.5 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-w-[min(100vw-2rem,1200px)] max-h-[90vh] w-auto flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-xl overflow-hidden shadow-2xl bg-black/90 flex items-center justify-center max-h-[90vh]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={openItem.src}
                alt={openItem.alt}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
