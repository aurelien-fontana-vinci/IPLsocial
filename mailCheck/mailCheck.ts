export function mailCheck(email: string): boolean {
    if (!email.includes("@") || email.includes(" ")) {
        return false;
    }

    const parts = email.split("@");
    if (!parts[1].includes(".")) {
        return false;
    }
    if (parts[1].endsWith(".")) {
        return false;
    }
    
    return true;
}