export interface Certificate {
    id: string;
    title: string;
    issuer: string;
    issue_date: string;
    expiry_date: string | null;
    credential_url: string | null;
    image_url: string | null;
    category: string;
    created_at: string;
}

export type CertificateCategory = "All" | string;