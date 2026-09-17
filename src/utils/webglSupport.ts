/**
 * Detects whether the current browser/device reliably supports WebGL
 * and whether the user prefers reduced motion or is on a low-power mobile screen.
 */
export function canRender3DScene(): boolean {
  if (typeof window === 'undefined') return false;

  // Check user motion preferences
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return false;

  // For very narrow/low-tier mobile screens, fall back to lightweight CSS centerpiece
  // to maximize battery life and avoid thermal throttling
  if (window.innerWidth < 640) {
    // We can allow lightweight rendering or graceful fallback
    return false;
  }

  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    return !!gl;
  } catch (e) {
    return false;
  }
}
