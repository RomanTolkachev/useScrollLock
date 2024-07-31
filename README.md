1) Add this CSS styles: 
    .stop-scrolling {
        overflow: hidden !important;
        height: 100svh !important;
    }
    .add-scroll-bar {
        overflow-y: scroll;
    }
   
3) Add file useScrollLock to your project files, for example in directory /hooks

4) inport useScrollLock hook to your component then destructure functions lockScroll and unlockScroll like this:
   const { lockScroll, unlockScroll } = useScrollLock();

5) just invoke "lockScroll" and "unlockScroll" when needed.
