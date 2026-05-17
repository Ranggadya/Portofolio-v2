import { useState, useMemo, memo } from "react";
import { useCertificates } from "../hooks/useCertificates";
import type { Certificate } from "../types/certificate";

// ============================================================
// HELPERS
// ============================================================

function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
    });
}

function isExpired(expiryDate: string | null): boolean {
    if (!expiryDate) return false;
    return new Date(expiryDate) < new Date();
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

interface CategoryFilterProps {
    categories: string[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

const CategoryFilter = memo(function CategoryFilter({
    categories,
    activeCategory,
    onCategoryChange,
}: CategoryFilterProps) {
    return (
        <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`font-jetbrains text-[11px] tracking-widest px-4 py-2 rounded-full border transition-all duration-200 ${activeCategory === category
                            ? "bg-cyan-400/20 border-cyan-400/50 text-cyan-400"
                            : "bg-white/5 border-white/10 text-white/40 hover:bg-white/10 hover:text-white/60"
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
});

interface CertificateCardProps {
    certificate: Certificate;
}

const CertificateCard = memo(function CertificateCard({
    certificate,
}: CertificateCardProps) {
    const certificateIsExpired = isExpired(certificate.expiry_date);

    return (
        <article className="group glass-panel rounded-xl overflow-hidden hover:border-white/15 transition-all duration-300">

            {/* Certificate Image */}
            <div className="relative h-48 bg-gradient-to-br from-white/5 to-white/0 overflow-hidden">
                {certificate.image_url ? (
                    <img
                        src={certificate.image_url}
                        alt={`${certificate.title} certificate`}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-[64px] text-white/10">
                            workspace_premium
                        </span>
                    </div>
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                    <span className="font-jetbrains text-[10px] tracking-widest px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white/60">
                        {certificate.category}
                    </span>
                </div>

                {/* Expiry badge */}
                {certificate.expiry_date && (
                    <div className="absolute top-4 right-4">
                        <span
                            className={`font-jetbrains text-[10px] tracking-widest px-3 py-1 rounded-full backdrop-blur-sm border ${certificateIsExpired
                                    ? "bg-red-400/20 border-red-400/30 text-red-400"
                                    : "bg-cyan-400/20 border-cyan-400/30 text-cyan-400"
                                }`}
                        >
                            {certificateIsExpired ? "EXPIRED" : "ACTIVE"}
                        </span>
                    </div>
                )}
            </div>

            {/* Certificate Info */}
            <div className="p-6">

                {/* Issuer */}
                <p className="font-jetbrains text-[11px] tracking-widest text-cyan-400 mb-2">
                    {certificate.issuer}
                </p>

                {/* Title */}
                <h3 className="font-grotesk font-semibold text-[17px] text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {certificate.title}
                </h3>

                {/* Dates */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col gap-1">
                        <span className="font-jetbrains text-[10px] tracking-widest text-white/30">
                            ISSUED
                        </span>
                        <span className="font-jetbrains text-[12px] text-white/60">
                            {formatDate(certificate.issue_date)}
                        </span>
                    </div>

                    {certificate.expiry_date && (
                        <div className="flex flex-col gap-1 text-right">
                            <span className="font-jetbrains text-[10px] tracking-widest text-white/30">
                                EXPIRES
                            </span>
                            <span
                                className={`font-jetbrains text-[12px] ${certificateIsExpired ? "text-red-400" : "text-white/60"
                                    }`}
                            >
                                {formatDate(certificate.expiry_date)}
                            </span>
                        </div>
                    )}
                </div>

                {/* Credential Link */}
                {certificate.credential_url && (
                    <a
                        href={certificate.credential_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-jetbrains text-[11px] tracking-widest text-white/30 hover:text-cyan-400 transition-colors duration-200 border border-white/10 hover:border-cyan-400/30 px-4 py-2 rounded-lg w-full justify-center group/link"
                    >
                <span className="material-symbols-outlined text-[15px] group-hover/link:rotate-45 transition-transform duration-300">
                    open_in_new
                </span>
                VIEW CREDENTIAL
            </a>
        )}

        </div>
    </article >
  );
});

interface LoadingSkeletonProps {
    count: number;
}

function LoadingSkeleton({ count }: LoadingSkeletonProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className="glass-panel rounded-xl overflow-hidden animate-pulse"
                >
                    <div className="h-48 bg-white/5" />
                    <div className="p-6 flex flex-col gap-3">
                        <div className="h-3 bg-white/5 rounded w-1/3" />
                        <div className="h-5 bg-white/5 rounded w-3/4" />
                        <div className="h-3 bg-white/5 rounded w-1/2" />
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

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function Certificates() {
    const { certificates, isLoading, errorMessage, refetch } = useCertificates();
    const [activeCategory, setActiveCategory] = useState<string>("All");

    const availableCategories = useMemo(() => {
        const uniqueCategories = Array.from(
            new Set(certificates.map((certificate) => certificate.category))
        ).sort();
        return ["All", ...uniqueCategories];
    }, [certificates]);

    const filteredCertificates = useMemo(() => {
        if (activeCategory === "All") return certificates;
        return certificates.filter(
            (certificate) => certificate.category === activeCategory
        );
    }, [certificates, activeCategory]);

    return (
        <section
            id="certificates"
            className="min-h-screen w-full px-[5%] lg:px-[10%] py-24"
        >
            <SectionHeader />

            {isLoading && <LoadingSkeleton count={6} />}

            {!isLoading && errorMessage && (
                <ErrorState errorMessage={errorMessage} onRetry={refetch} />
            )}

            {!isLoading && !errorMessage && certificates.length === 0 && (
                <EmptyState />
            )}

            {!isLoading && !errorMessage && certificates.length > 0 && (
                <>
                    <CategoryFilter
                        categories={availableCategories}
                        activeCategory={activeCategory}
                        onCategoryChange={setActiveCategory}
                    />

                    {/* Certificate Count */}
                    <p className="font-jetbrains text-[11px] tracking-widest text-white/30 mb-6">
                        SHOWING {filteredCertificates.length} OF {certificates.length} CERTIFICATES
                    </p>

                    {filteredCertificates.length === 0 ? (
                        <EmptyState />
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCertificates.map((certificate) => (
                                <CertificateCard
                                    key={certificate.id}
                                    certificate={certificate}
                                />
                            ))}
                        </div>
                    )}
                </>
            )}

        </section>
    );
}