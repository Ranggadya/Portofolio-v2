import { useState } from "react";
import {
    CheckCircle2,
    Loader2,
    Send
} from "lucide-react";
import {
    GithubIcon,
    LinkedinIcon,
    XIcon,
    InstagramIcon
} from "../components/BrandIcons";
import { sendContactMessage } from "../lib/contactService";

interface ContactFormData {
    operatorName: string;
    emailAddress: string;
    messageContent: string;
}

interface ContactFormErrors {
    operatorName?: string;
    emailAddress?: string;
    messageContent?: string;
}

interface AlternativeChannel {
    icon: React.ElementType;
    label: string;
    url: string;
}

const ALTERNATIVE_CHANNELS: AlternativeChannel[] = [
    { icon: GithubIcon, label: "GitHub", url: "https://github.com/" },
    { icon: LinkedinIcon, label: "LinkedIn", url: "https://linkedin.com/" },
    { icon: XIcon, label: "Twitter", url: "https://twitter.com/" },
    { icon: InstagramIcon, label: "Instagram", url: "https://instagram.com/" },
];

const INITIAL_FORM_DATA: ContactFormData = {
    operatorName: "",
    emailAddress: "",
    messageContent: "",
};

function validateFormData(formData: ContactFormData): ContactFormErrors {
    const errors: ContactFormErrors = {};

    if (!formData.operatorName.trim()) {
        errors.operatorName = "Name is required";
    }

    if (!formData.emailAddress.trim()) {
        errors.emailAddress = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
        errors.emailAddress = "Please enter a valid email address";
    }

    if (!formData.messageContent.trim()) {
        errors.messageContent = "Message is required";
    } else if (formData.messageContent.trim().length < 10) {
        errors.messageContent = "Message must be at least 10 characters";
    }

    return errors;
}

interface FormInputProps {
    label: string;
    inputId: string;
    type?: string;
    placeholder: string;
    value: string;
    errorMessage?: string;
    onChange: (value: string) => void;
}

function FormInput({
    label,
    inputId,
    type = "text",
    placeholder,
    value,
    errorMessage,
    onChange,
}: FormInputProps) {
    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor={inputId}
                className="font-jetbrains text-[11px] tracking-widest text-cyan-400 uppercase"
            >
                &gt; {label}
            </label>
            <input
                id={inputId}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(changeEvent) => onChange(changeEvent.target.value)}
                className={`bg-black/40 border rounded-md px-4 py-3 font-jetbrains text-[13px] text-cyan-400 placeholder:text-white/20 focus:outline-none transition-all duration-300 ${errorMessage
                    ? "border-red-400/50 focus:border-red-400 focus:shadow-[0_0_0_1px_rgba(248,113,113,0.3)]"
                    : "border-cyan-400/20 focus:border-cyan-400 focus:bg-black/60 focus:shadow-[0_0_0_1px_rgba(34,211,238,0.3)]"
                    }`}
            />
            {errorMessage && (
                <span className="font-jetbrains text-[10px] tracking-widest text-red-400">
                    {errorMessage}
                </span>
            )}
        </div>
    );
}

interface FormTextareaProps {
    label: string;
    inputId: string;
    placeholder: string;
    value: string;
    errorMessage?: string;
    onChange: (value: string) => void;
}

function FormTextarea({
    label,
    inputId,
    placeholder,
    value,
    errorMessage,
    onChange,
}: FormTextareaProps) {
    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor={inputId}
                className="font-jetbrains text-[11px] tracking-widest text-cyan-400 uppercase"
            >
                &gt; {label}
            </label>
            <textarea
                id={inputId}
                placeholder={placeholder}
                value={value}
                rows={5}
                onChange={(changeEvent) => onChange(changeEvent.target.value)}
                className={`bg-black/40 border rounded-md px-4 py-3 font-jetbrains text-[13px] text-cyan-400 placeholder:text-white/20 focus:outline-none transition-all duration-300 resize-none ${errorMessage
                    ? "border-red-400/50 focus:border-red-400 focus:shadow-[0_0_0_1px_rgba(248,113,113,0.3)]"
                    : "border-cyan-400/20 focus:border-cyan-400 focus:bg-black/60 focus:shadow-[0_0_0_1px_rgba(34,211,238,0.3)]"
                    }`}
            />
            {errorMessage && (
                <span className="font-jetbrains text-[10px] tracking-widest text-red-400">
                    {errorMessage}
                </span>
            )}
        </div>
    );
}

export default function Contact() {
    const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
    const [formErrors, setFormErrors] = useState<ContactFormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isSubmitSuccess, setIsSubmitSuccess] = useState<boolean>(false);
    const [serverError, setServerError] = useState<string | null>(null);

    function handleFieldChange(
        fieldName: keyof ContactFormData,
        value: string
    ) {
        setFormData((previousFormData) => ({
            ...previousFormData,
            [fieldName]: value,
        }));

        // Clear error on change
        if (formErrors[fieldName]) {
            setFormErrors((previousErrors) => ({
                ...previousErrors,
                [fieldName]: undefined,
            }));
        }
    }

    async function handleFormSubmit() {
        const validationErrors = validateFormData(formData);

        if (Object.keys(validationErrors).length > 0) {
            setFormErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        setServerError(null);

        const result = await sendContactMessage(formData);

        setIsSubmitting(false);

        if (result.success) {
            setIsSubmitSuccess(true);
            setFormData(INITIAL_FORM_DATA);
            setTimeout(() => setIsSubmitSuccess(false), 4000);
        } else {
            setServerError(result.message);
        }
    }

    return (
        <section
            className="min-h-screen w-full px-[5%] lg:px-[10%] py-24"
        >

            {/* Section Header */}
            <div className="mb-16 text-center">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="font-jetbrains text-[11px] tracking-widest text-white/40 uppercase">
                        Get In Touch
                    </span>
                </div>
                <h2 className="font-grotesk font-bold text-[42px] md:text-[56px] lg:text-[64px] text-white leading-tight tracking-tight mb-4">
                    Let&apos;s{" "}
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Connect.
                    </span>
                </h2>
                <p className="font-geist text-[16px] md:text-[18px] text-white/40 max-w-2xl mx-auto leading-relaxed">
                    Have a project in mind or just want to say hello? My inbox is always
                    open.
                </p>
            </div>

            {/* Contact Form Card */}
            <div className="max-w-5xl mx-auto">
                <div className="glass-panel rounded-xl p-8 md:p-12 relative overflow-hidden">

                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-purple-600 opacity-60" />

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-xl" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-400/30 rounded-br-xl" />

                    {/* Form Header */}
                    <div className="text-center mb-10">
                        <h3 className="font-grotesk font-bold text-[28px] md:text-[32px] text-white mb-2">
                            INITIATE_CONTACT
                        </h3>
                        <p className="font-geist text-[14px] text-white/40">
                            Secure transmission protocol ready. Input coordinates below to
                            establish connection.
                        </p>
                    </div>

                    {/* Server Error Message */}
                    {serverError && (
                        <div className="mb-6 px-4 py-3 rounded-lg bg-red-400/10 border border-red-400/30 flex items-center gap-3">
                            <span className="font-jetbrains text-[12px] tracking-widest text-red-400">
                                ⚠ TRANSMISSION FAILED — {serverError}
                            </span>
                        </div>
                    )}

                    {/* Success Message */}
                    {isSubmitSuccess && (
                        <div className="mb-6 px-4 py-3 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center gap-3">
                            <CheckCircle2 className="text-cyan-400 w-5 h-5" />
                            <span className="font-jetbrains text-[12px] tracking-widest text-cyan-400">
                                TRANSMISSION SUCCESSFUL — I&apos;ll get back to you soon!
                            </span>
                        </div>
                    )}

                    {/* Form Fields */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormInput
                                label="Operator Name"
                                inputId="operatorName"
                                placeholder="Enter your name"
                                value={formData.operatorName}
                                errorMessage={formErrors.operatorName}
                                onChange={(value) => handleFieldChange("operatorName", value)}
                            />
                            <FormInput
                                label="Comm Link (Email)"
                                inputId="emailAddress"
                                type="email"
                                placeholder="Enter your email"
                                value={formData.emailAddress}
                                errorMessage={formErrors.emailAddress}
                                onChange={(value) => handleFieldChange("emailAddress", value)}
                            />
                        </div>

                        <FormTextarea
                            label="Encrypted Payload (Message)"
                            inputId="messageContent"
                            placeholder="Type your message here..."
                            value={formData.messageContent}
                            errorMessage={formErrors.messageContent}
                            onChange={(value) => handleFieldChange("messageContent", value)}
                        />

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <button
                                onClick={handleFormSubmit}
                                disabled={isSubmitting}
                                className="group relative"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg opacity-50 blur-md group-hover:opacity-90 transition-all duration-700 disabled:opacity-20" />
                                <div className="relative flex items-center gap-3 bg-[#0b1120] border border-white/10 font-jetbrains text-[11px] tracking-widest text-white px-8 py-4 rounded-lg overflow-hidden">
                                    <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-cyan-400/20 to-purple-600/20" />
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-[18px] h-[18px] animate-spin relative z-10" />
                                            <span className="relative z-10">TRANSMITTING...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="relative z-10">TRANSMIT</span>
                                            <Send className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                                        </>
                                    )}
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Alternative Channels */}
                    <div className="mt-10 pt-8 border-t border-white/10">
                        <p className="font-jetbrains text-[11px] tracking-widest text-white/30 text-center mb-6 uppercase">
                            Alternative Channels
                        </p>
                        <div className="flex justify-center gap-4">
                            {ALTERNATIVE_CHANNELS.map((channel) => (
                                <a
                                    key={channel.label}
                                    href={channel.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={channel.label}
                                    className="group relative p-3"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300" />
                                    <div className="relative rounded-xl bg-white/5 p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                                        <channel.icon className="w-[22px] h-[22px] text-white/30 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </section >
    );
}
