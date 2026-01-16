export function mailCheck(email: string): boolean {
    if (!email.includes("@")) {
        return false;
    }
    return true;
}