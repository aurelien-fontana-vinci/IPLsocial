export function mailCheck(email: string): boolean {
    if (!email.includes("@") || email.includes(" ") || email.startsWith("@")) {
        return false;
    }

    if (!isValidDomain(email)) {
        return false;
    }

    return true;
}

function isValidDomain(domain: string): boolean {
    const parts = domain.split("@");
    if (!parts[1].includes(".")) {
        return false;
    }
    if (parts[1].endsWith(".")) {
        return false;
    }
    return true;
}