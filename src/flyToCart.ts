// Clones the add-to-cart source image and animates it into the header cart
// icon along an arced path, purely with the Web Animations API — the
// component library has no primitive for choreographing motion between two
// arbitrary elements.
export function flyToCart(sourceEl: HTMLElement | null, targetEl: HTMLElement | null): void {
  if (!sourceEl || !targetEl) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const srcRect = sourceEl.getBoundingClientRect();
  const dstRect = targetEl.getBoundingClientRect();
  if (srcRect.width === 0 || srcRect.height === 0) return;

  const clone = sourceEl.cloneNode(true) as HTMLElement;
  Object.assign(clone.style, {
    position: 'fixed',
    left: `${srcRect.left}px`,
    top: `${srcRect.top}px`,
    width: `${srcRect.width}px`,
    height: `${srcRect.height}px`,
    margin: 0,
    borderRadius: '16px',
    objectFit: 'cover',
    pointerEvents: 'none',
    zIndex: 2000,
    willChange: 'transform, opacity',
  });
  document.body.appendChild(clone);

  const startCenter = { x: srcRect.left + srcRect.width / 2, y: srcRect.top + srcRect.height / 2 };
  const endCenter = { x: dstRect.left + dstRect.width / 2, y: dstRect.top + dstRect.height / 2 };
  const dx = endCenter.x - startCenter.x;
  const dy = endCenter.y - startCenter.y;
  const arc = -Math.min(160, Math.abs(dx) * 0.4 + 40);

  const steps = 12;
  const keyframes: Keyframe[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = dx * t;
    const y = 2 * (1 - t) * t * (dy / 2 + arc) + t * t * dy;
    const scale = 1 - 0.82 * t;
    const opacity = t < 0.75 ? 1 : 1 - (t - 0.75) / 0.25;
    keyframes.push({ transform: `translate(${x}px, ${y}px) scale(${scale}) rotate(${t * 12}deg)`, opacity });
  }

  const animation = clone.animate(keyframes, {
    duration: 700,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    fill: 'forwards',
  });

  animation.onfinish = () => {
    clone.remove();
    targetEl.animate(
      [{ transform: 'scale(1)' }, { transform: 'scale(1.3)' }, { transform: 'scale(1)' }],
      { duration: 320, easing: 'ease-out' },
    );
  };
}
