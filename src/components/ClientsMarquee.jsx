import { useRef, useState, useEffect } from 'react';

export default function ClientsMarquee({ clients = [], items = [] }) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [scrollStartPos, setScrollStartPos] = useState(0);

  const displayList = clients.length > 0 ? clients : items;

  // We repeat the client items 4 times to ensure seamless infinite looping in both directions
  const repeatedClients = [
    ...displayList,
    ...displayList,
    ...displayList,
    ...displayList,
  ];

  // Set initial scroll position to middle on mount so user can drag left or right immediately
  useEffect(() => {
    const container = containerRef.current;
    if (container && displayList.length > 0) {
      // Start in the second quadrant for smooth bi-directional scrolling
      const singleSetWidth = container.scrollWidth / 4;
      container.scrollLeft = singleSetWidth;
    }
  }, [displayList]);

  // Handle continuous auto-scroll loop
  useEffect(() => {
    let animId;
    const scrollStep = () => {
      const container = containerRef.current;
      if (container && !isHovered && !isDragging && displayList.length > 0) {
        const singleSetWidth = container.scrollWidth / 4;

        // Auto-scroll left-to-right (content moves to the right)
        container.scrollLeft -= 0.75;

        // Wrap-around boundaries
        if (container.scrollLeft <= 0) {
          container.scrollLeft += singleSetWidth * 2;
        } else if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        }
      }
      animId = requestAnimationFrame(scrollStep);
    };

    animId = requestAnimationFrame(scrollStep);
    return () => {
      if (animId) {
        cancelAnimationFrame(animId);
      }
    };
  }, [isHovered, isDragging, displayList]);

  // Pointer Drag Handlers (works seamlessly for mouse, trackpad, and touch)
  const handlePointerDown = (e) => {
    const container = containerRef.current;
    if (!container) return;

    setIsDragging(true);
    setDragStartX(e.clientX);
    setScrollStartPos(container.scrollLeft);

    // Prevent image drag ghosting
    e.preventDefault();
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const container = containerRef.current;
    if (!container) return;

    const deltaX = (e.clientX - dragStartX) * 1.2;
    const singleSetWidth = container.scrollWidth / 4;

    let targetScroll = scrollStartPos - deltaX;

    // Boundary wrap during manual dragging
    if (targetScroll <= 0) {
      targetScroll += singleSetWidth * 2;
      setDragStartX(e.clientX);
      setScrollStartPos(targetScroll);
    } else if (targetScroll >= singleSetWidth * 2) {
      targetScroll -= singleSetWidth;
      setDragStartX(e.clientX);
      setScrollStartPos(targetScroll);
    }

    container.scrollLeft = targetScroll;
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerCancel = () => {
    setIsDragging(false);
  };

  if (!displayList || displayList.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden py-4 select-none">
      {/* Left fade gradient mask */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 md:w-48 z-10 bg-gradient-to-r from-[#fbfdfe] via-[#fbfdfe]/80 to-transparent" />

      {/* Right fade gradient mask */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 md:w-48 z-10 bg-gradient-to-l from-[#fbfdfe] via-[#fbfdfe]/80 to-transparent" />

      {/* Interactive Draggable Scroll Container */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsDragging(false);
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        className={`flex gap-6 overflow-x-hidden no-scrollbar py-2 px-4 transition-cursor ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{
          touchAction: 'pan-y',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {repeatedClients.map((client, idx) => (
          <div
            key={idx}
            className="w-64 sm:w-72 h-36 sm:h-40 shrink-0 rounded-2xl bg-white border border-slate-200/80 p-5 shadow-xs hover:shadow-xl hover:border-[#005b94]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-2 group pointer-events-auto"
          >
            <div className="w-full h-20 sm:h-22 flex items-center justify-center overflow-hidden pointer-events-none">
              <img
                src={client.logo}
                alt={client.name}
                draggable="false"
                className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="text-center w-full px-1 pointer-events-none">
              <p className="text-xs font-bold text-slate-800 truncate group-hover:text-[#005b94] transition-colors">
                {client.name}
              </p>
              {client.subtitle && (
                <p className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
                  {client.subtitle}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
