export interface ContactPayload {
  operatorName: string;
  emailAddress: string;
  messageContent: string;
}

export interface ContactResult {
  success: boolean;
  message: string;
}

export async function sendContactMessage(payload: ContactPayload):Promise<ContactResult> {
    const response = await fetch("/api/contact.ts", {
        method: "POST",
        headers: {"Content-type" : "application/json"},
        body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
        return {
            success: false,
            message: data.error ?? "Something went wrong. Please try again.", 
        };
    };

    return { success: true, message: data.message};
}
