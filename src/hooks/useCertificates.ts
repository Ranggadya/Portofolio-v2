import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import type { Certificate } from "../types/certificate";

interface UseCertificatesReturn {
    certificates: Certificate[];
    isLoading: boolean;
    errorMessage: string | null;
    refetch: () => void;
}

export function useCertificates(): UseCertificatesReturn {
    const [certificates, setCertificates] = useState<Certificate[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [fetchTrigger, setFetchTrigger] = useState<number>(0);

    useEffect(() => {
        async function fetchCertificates() {
            setIsLoading(true);
            setErrorMessage(null);

            const { data, error } = await supabase
                .from("certifikat")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) {
                setErrorMessage(error.message);
                setCertificates([]);
            } else {
                setCertificates(data ?? []);
            }

            setIsLoading(false);
        }

        fetchCertificates();
    }, [fetchTrigger]);

    function refetch() {
        setFetchTrigger((previous) => previous + 1);
    }

    return { certificates, isLoading, errorMessage, refetch };
}