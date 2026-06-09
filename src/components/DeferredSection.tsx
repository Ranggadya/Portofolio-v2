import {
  type ComponentType,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";

interface DeferredSectionProps {
  id: string;
  component: ComponentType;
  minHeight?: string;
}

export default function DeferredSection({
  id,
  component: Component,
  minHeight = "75vh",
}: DeferredSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || shouldRender) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setShouldRender(true);
        observer.disconnect();
      },
      { rootMargin: "800px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [shouldRender]);

  return (
    <div
      ref={containerRef}
      id={id}
      style={shouldRender ? undefined : { minHeight }}
    >
      {shouldRender ? (
        <Suspense fallback={null}>
          <Component />
        </Suspense>
      ) : null}
    </div>
  );
}
