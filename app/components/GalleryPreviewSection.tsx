'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
        {GALLERY_PREVIEW_IMAGES.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setOpenId(item.id)}
            className="group text-left rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-[#056385]/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#056385] focus-visible:ring-offset-2"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                unoptimized={item.src.startsWith('http')}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `linear-gradient(to top, ${BRAND_COLORS.primary}cc 0%, transparent 45%)`,
                }}
              />
              <span className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow">
                Click to enlarge
              </span>
            </div>
            <div className="p-4 border-t border-slate-100">
              <p className="text-sm font-semibold text-slate-800">{item.caption || item.alt}</p>
              {item.caption ? (
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{item.alt}</p>
              ) : null}
            </div>
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
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-xl overflow-hidden shadow-2xl bg-black max-h-[75vh] flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element -- lightbox: arbitrary aspect ratios */}
              <img
                src={openItem.src}
                alt={openItem.alt}
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain"
              />
            </div>
            {(openItem.caption || openItem.alt) && (
              <p className="text-center text-white text-base sm:text-lg font-medium max-w-2xl px-4">
                {openItem.caption || openItem.alt}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};
