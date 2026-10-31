import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// jsdom lacks PointerEvent; Base UI controls construct one on click.
if (typeof window !== "undefined" && typeof window.PointerEvent === "undefined") {
  class PointerEventPolyfill extends MouseEvent {
    pointerId: number;
    pointerType: string;
    isPrimary: boolean;
    constructor(type: string, params: MouseEventInit & PointerEventInit = {}) {
      super(type, params);
      this.pointerId = params.pointerId ?? 1;
      this.pointerType = params.pointerType ?? "mouse";
      this.isPrimary = params.isPrimary ?? true;
    }
  }
  const g = globalThis as unknown as Record<string, unknown>;
  g.PointerEvent = PointerEventPolyfill;
}

// jsdom lacks matchMedia (embla-carousel).
if (typeof window !== "undefined" && !window.matchMedia) {
  (window as unknown as Record<string, unknown>).matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

// jsdom lacks ResizeObserver (cmdk, Base UI).
if (typeof globalThis !== "undefined" && typeof globalThis.ResizeObserver === "undefined") {
  (globalThis as unknown as Record<string, unknown>).ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}

// jsdom lacks MutationObserver (popup-positioning code paths); Semi's own test
// setup ships the same stub.
if (typeof globalThis !== "undefined" && typeof globalThis.MutationObserver === "undefined") {
  (globalThis as unknown as Record<string, unknown>).MutationObserver = class {
    observe() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  };
}

// jsdom lacks IntersectionObserver (embla-carousel).
if (typeof globalThis !== "undefined" && typeof globalThis.IntersectionObserver === "undefined") {
  (globalThis as unknown as Record<string, unknown>).IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  };
}

// jsdom lacks scrollIntoView (cmdk).
if (typeof window !== "undefined" && !window.Element.prototype.scrollIntoView) {
  (window.Element.prototype as unknown as Record<string, unknown>).scrollIntoView =
    function scrollIntoView() {};
}

afterEach(() => {
  cleanup();
});
