import { memo, useRef, useState, useCallback, useEffect } from "react";
import { Award, ExternalLink } from "lucide-react";
import { useCertificates } from "../hooks/useCertificates";
import type { Certificate } from "../types/certificate";

// ============================================================
// HELPERS
// ============================================================

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// ============================================================
// SUB COMPONENTS
// ============================================================

const SectionHeader = memo(function SectionHeader() {
  return (
    <div className="mb-16">
      <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="font-jetbrains text-[11px] tracking-widest text-white/40 uppercase">
          Credentials
        </span>
      </div>
      <h2 className="font-grotesk font-bold text-[42px] md:text-[56px] lg:text-[64px] text-white leading-tight tracking-tight mb-4">
        My{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Certificates.
        </span>
      </h2>
      <p className="font-geist text-[16px] md:text-[18px] text-white/40 max-w-2xl leading-relaxed">
        A collection of certifications and credentials I have earned throughout
        my learning journey.
      </p>
    </div>
  );
});

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard = memo(function CertificateCard({
  certificate,
}: CertificateCardProps) {
  return (
    <div className="group relative h-full flex-shrink-0 w-full sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
      <div className="relative glass-panel rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl h-full flex flex-col">
        <div className="relative overflow-hidden aspect-[4/3] bg-[#0b1120]/50 flex items-center justify-center p-4">
          <img 
            src={certificate.img || 'https://images.unsplash.com/photo-1586380879823-b0dc8c8c7d5e?w=600&h=400&fit=crop'} 
            alt={certificate.title}
            width="600"
            height="400"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1586380879823-b0dc8c8c7d5e?w=600&h=400&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-4 right-4 bg-white/5 backdrop-blur-xl rounded-full p-2 border border-white/20 group-hover:bg-white/10 transition-all duration-300">
            <Award className="w-5 h-5 text-cyan-400" />
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div className="min-h-[56px] mb-2 flex items-start">
              <h3 className="text-xl font-grotesk font-bold bg-gradient-to-r from-white via-cyan-100 to-purple-200 bg-clip-text text-transparent leading-tight line-clamp-2">
                {certificate.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-white/30 mb-6">
              <span className="material-symbols-outlined text-[15px]">
                calendar_today
              </span>
              <span className="font-jetbrains text-[11px] tracking-widest">
                {formatDate(certificate.created_at)}
              </span>
            </div>
          </div>
          {certificate.link ? (
            <a 
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-block w-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg opacity-30 blur-sm group-hover/btn:opacity-60 transition-all duration-300"></div>
              <div className="relative bg-[#1d1233] backdrop-blur-xl rounded-lg border border-purple-500/30 px-4 py-3 flex items-center justify-center gap-2 hover:border-purple-400/60 transition-all duration-300">
                <span className="bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent font-medium text-sm font-jetbrains tracking-widest uppercase">
                  Lihat Sertifikat
                </span>
                <ExternalLink size={16} className="text-purple-300 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </div>
            </a>
          ) : (
            <div className="relative bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 px-4 py-3 flex items-center justify-center gap-2 cursor-not-allowed">
              <span className="font-jetbrains tracking-widest text-white/30 font-medium text-[11px] uppercase">
                Tidak Ada Link
              </span>
              <span className="material-symbols-outlined text-[16px] text-white/30">lock</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

interface LoadingSkeletonProps {
  count: number;
}

function LoadingSkeleton({ count }: LoadingSkeletonProps) {
  return (
    <div className="flex gap-6 overflow-hidden">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="glass-panel rounded-xl overflow-hidden animate-pulse flex-shrink-0 w-full sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
        >
          <div className="aspect-[4/3] bg-white/5" />
          <div className="p-6 flex flex-col gap-3">
            <div className="h-5 bg-white/5 rounded w-3/4" />
            <div className="h-3 bg-white/5 rounded w-1/3" />
            <div className="h-10 bg-white/5 rounded mt-2" />
          </div>
        </div>
      ))}
    </div>
  );
}

interface ErrorStateProps {
  errorMessage: string;
  onRetry: () => void;
}

function ErrorState({ errorMessage, onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4">
      <span className="material-symbols-outlined text-[48px] text-red-400/50">
        error
      </span>
      <p className="font-jetbrains text-[12px] tracking-widest text-red-400/70 text-center">
        FAILED TO LOAD CERTIFICATES
      </p>
      <p className="font-geist text-[14px] text-white/30 text-center max-w-sm">
        {errorMessage}
      </p>
      <button
        onClick={onRetry}
        className="font-jetbrains text-[11px] tracking-widest text-cyan-400 border border-cyan-400/30 px-6 py-2 rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
      >
        RETRY
      </button>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4">
      <span className="material-symbols-outlined text-[48px] text-white/10">
        workspace_premium
      </span>
      <p className="font-jetbrains text-[12px] tracking-widest text-white/30 text-center">
        NO CERTIFICATES FOUND
      </p>
    </div>
  );
}

interface CarouselNavigationProps {
  activeDotIndex: number;
  totalDots: number;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

function CarouselNavigation({
  activeDotIndex,
  totalDots,
  isPreviousDisabled,
  isNextDisabled,
  onPrevious,
  onNext,
}: CarouselNavigationProps) {
  return (
    <div className="flex items-center justify-between mt-8">

      {/* Dot Indicators */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalDots }).map((_, index) => (
          <div
            key={index}
            className={`rounded-full transition-all duration-300 ${
              index === activeDotIndex
                ? "w-6 h-2 bg-cyan-400"
                : "w-2 h-2 bg-white/20"
            }`}
          />
        ))}
      </div>

      {/* Arrow Buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={onPrevious}
          disabled={isPreviousDisabled}
          aria-label="Previous certificate"
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
            isPreviousDisabled
              ? "border-white/5 text-white/15 cursor-not-allowed"
              : "border-white/10 text-white/50 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/10"
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">
            arrow_back
          </span>
        </button>

        <button
          onClick={onNext}
          disabled={isNextDisabled}
          aria-label="Next certificate"
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
            isNextDisabled
              ? "border-white/5 text-white/15 cursor-not-allowed"
              : "border-white/10 text-white/50 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/10"
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">
            arrow_forward
          </span>
        </button>
      </div>

    </div>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function Certificates() {
  const { certificates, isLoading, errorMessage, refetch } = useCertificates();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);
  const [scrollStartLeft, setScrollStartLeft] = useState<number>(0);

  const [cardsPerPage, setCardsPerPage] = useState<number>(3);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, certificates.length - cardsPerPage);

  const scrollToIndex = useCallback((index: number) => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const firstCard = scrollContainer.firstElementChild as HTMLElement;
    const cardWidth = firstCard ? firstCard.offsetWidth : 320;
    const scrollAmount = cardWidth + 24; // 24px is gap-6

    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clampedIndex);

    scrollContainer.scrollTo({
      left: clampedIndex * scrollAmount,
      behavior: "smooth",
    });
  }, [maxIndex]);

  function handleScrollToPrevious() {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    const firstCard = scrollContainer.firstElementChild as HTMLElement;
    const cardWidth = firstCard ? firstCard.offsetWidth : 320;
    const scrollAmount = cardWidth + 24;
    const cardsPerPage = Math.round(scrollContainer.clientWidth / scrollAmount) || 1;
    
    scrollToIndex(currentIndex - cardsPerPage);
  }

  function handleScrollToNext() {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    const firstCard = scrollContainer.firstElementChild as HTMLElement;
    const cardWidth = firstCard ? firstCard.offsetWidth : 320;
    const scrollAmount = cardWidth + 24;
    const cardsPerPage = Math.round(scrollContainer.clientWidth / scrollAmount) || 1;
    
    scrollToIndex(currentIndex + cardsPerPage);
  }

  // Mouse drag handlers
  function handleMouseDown(mouseEvent: React.MouseEvent) {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    setIsDragging(true);
    setDragStartX(mouseEvent.pageX - scrollContainer.offsetLeft);
    setScrollStartLeft(scrollContainer.scrollLeft);
  }

  function handleMouseMove(mouseEvent: React.MouseEvent) {
    if (!isDragging) return;
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    mouseEvent.preventDefault();
    const currentX = mouseEvent.pageX - scrollContainer.offsetLeft;
    const dragDistance = currentX - dragStartX;
    scrollContainer.scrollLeft = scrollStartLeft - dragDistance;
  }

  function handleMouseUpOrLeave() {
    if (!isDragging) return;
    setIsDragging(false);

    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const firstCard = scrollContainer.firstElementChild as HTMLElement;
    const cardWidth = firstCard ? firstCard.offsetWidth : 320;
    const scrollAmount = cardWidth + 24;

    // Snap to nearest card after drag
    const nearestIndex = Math.round(
      scrollContainer.scrollLeft / scrollAmount
    );
    scrollToIndex(nearestIndex);
  }

  // Touch drag handlers
  function handleTouchStart(touchEvent: React.TouchEvent) {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    setDragStartX(
      touchEvent.touches[0].pageX - scrollContainer.offsetLeft
    );
    setScrollStartLeft(scrollContainer.scrollLeft);
  }

  function handleTouchMove(touchEvent: React.TouchEvent) {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const currentX =
      touchEvent.touches[0].pageX - scrollContainer.offsetLeft;
    const dragDistance = currentX - dragStartX;
    scrollContainer.scrollLeft = scrollStartLeft - dragDistance;
  }

  // Handle touch end to snap to nearest card
  function handleTouchEnd() {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const firstCard = scrollContainer.firstElementChild as HTMLElement;
    const cardWidth = firstCard ? firstCard.offsetWidth : 320;
    const scrollAmount = cardWidth + 24;

    // Snap to nearest card after touch
    const nearestIndex = Math.round(
      scrollContainer.scrollLeft / scrollAmount
    );
    scrollToIndex(nearestIndex);
  }

  // Handle scroll to sync index
  const handleScroll = useCallback(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const firstCard = scrollContainer.firstElementChild as HTMLElement;
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const scrollAmount = cardWidth + 24;

    const newIndex = Math.round(scrollContainer.scrollLeft / scrollAmount);
    const clampedIndex = Math.max(0, Math.min(newIndex, maxIndex));

    setCurrentIndex((prev) => (clampedIndex !== prev ? clampedIndex : prev));
  }, [maxIndex]);

  return (
    <section
      className="w-full px-[5%] lg:px-[10%] py-24"
    >
      <SectionHeader />

      {isLoading && <LoadingSkeleton count={4} />}

      {!isLoading && errorMessage && (
        <ErrorState errorMessage={errorMessage} onRetry={refetch} />
      )}

      {!isLoading && !errorMessage && certificates.length === 0 && (
        <EmptyState />
      )}

      {!isLoading && !errorMessage && certificates.length > 0 && (
        <>

          {/* Fade edges */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0b1120] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0b1120] to-transparent z-10 pointer-events-none" />

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className={`flex gap-6 overflow-x-auto pb-4 scrollbar-hide select-none ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onScroll={handleScroll}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {certificates.map((certificate) => (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                />
              ))}
            </div>
          </div>

          {/* Navigation */}
          <CarouselNavigation
            activeDotIndex={Math.max(0, Math.min(Math.round(currentIndex / cardsPerPage), Math.ceil(certificates.length / cardsPerPage) - 1))}
            totalDots={Math.ceil(certificates.length / cardsPerPage)}
            isPreviousDisabled={currentIndex === 0}
            isNextDisabled={currentIndex >= maxIndex}
            onPrevious={handleScrollToPrevious}
            onNext={handleScrollToNext}
          />
        </>
      )}

    </section>
  );
}
