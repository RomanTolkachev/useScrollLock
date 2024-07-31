import React from "react";

interface IUseScrollLock {
  lockScroll: () => void;
  unlockScroll: () => void;
}

export const useScrollLock = (): IUseScrollLock => {
  console.log("вытащили useScrollLock");
  const firstRender: React.MutableRefObject<boolean> = React.useRef(true);
  const scrollPosition: React.MutableRefObject<number> = React.useRef(0);
  const lockScroll = React.useCallback(() => {
    scrollPosition.current = window.scrollY;
    document.body.classList.add("stop-scrolling");
    document.body.scroll(0, scrollPosition.current);
  }, []);

  const unlockScroll = React.useCallback(() => {
    if (!firstRender.current) {
      document.body.classList.remove("stop-scrolling");
      document.documentElement.scroll(0, scrollPosition.current);
    }
  }, []);

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    }
  }, []);

  return { lockScroll, unlockScroll };
};