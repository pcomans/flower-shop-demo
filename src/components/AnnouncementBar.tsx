'use client';

import { useEffect, useRef, useState } from 'react';
import { IconButton, MaterialSymbol } from 'react-material-expressive';

const PROMOS = [
  'Free same-day delivery on orders over $50!',
  'Wedding season is here — book a free consultation!',
  'Join our loyalty club and get 10% off your first bouquet!',
];

const DISMISS_KEY = 'announcementBarDismissed';
const ROTATE_MS = 5000;

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const [promoIndex, setPromoIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  ).current;

  // Read the persisted dismissal after mount to stay SSR-safe (no sessionStorage
  // access during render, which would differ between server and client).
  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY) === 'true') {
      setDismissed(true);
    }
  }, []);

  useEffect(() => {
    if (dismissed || paused || reducedMotion) return undefined;
    const timer = setInterval(() => {
      setPromoIndex((index) => (index + 1) % PROMOS.length);
    }, ROTATE_MS);
    return () => clearInterval(timer);
  }, [dismissed, paused, reducedMotion]);

  if (dismissed) return null;

  const handleDismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, 'true');
    setDismissed(true);
  };

  return (
    <div
      className="announcement-bar"
      role="region"
      aria-label="Promotions"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <span className="announcement-bar__text" aria-live="polite">
        {PROMOS[promoIndex]}
      </span>
      <IconButton
        className="announcement-bar__dismiss"
        aria-label="Dismiss announcement"
        variant="standard"
        size="s"
        icon={<MaterialSymbol name="close" size={18} />}
        onClick={handleDismiss}
      />
    </div>
  );
}
