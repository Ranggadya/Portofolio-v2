interface SocialLinks {
    icon: string,
    label: string,
    url: string,
};

interface SocialLinksProps {
    socialLinks: SocialLinks[];
}

export default function SocialLinks({ socialLinks }: SocialLinksProps) {
    return (
        <div className="hidden sm:flex gap-4">
            {socialLinks.map((socialLink) => (
                <a
                    key={socialLink.label}
                    href={socialLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialLink.label}
                    className="transition hover:text-primary"
                >
                    <button className="group relative p-3">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300" />
                        <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                            <span className="material-symbols-outlined text-[20px] text-white/50 group-hover:text-white transition-colors duration-300">
                                {socialLink.icon}
                            </span>
                        </div>
                    </button>
                </a>
            ))}
        </div>
    );
}