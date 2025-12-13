/**
 * Path utility functions for handling base URL
 */

/**
 * Gets the base URL, ensuring it ends with a slash
 * Useful for template string concatenation
 */
export function getBaseUrl(): string {
    const base = import.meta.env.BASE_URL || '/'
    return base.endsWith('/') ? base : `${base}/`
}

/**
 * Prepends the base URL to a path
 * @param path - The path to prepend base URL to
 * @returns The path with base URL prepended
 */
export function withBase(path: string): string {
    const base = import.meta.env.BASE_URL || '/'

    // Ensure base doesn't end with / and path starts with /
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base
    const cleanPath = path.startsWith('/') ? path : `/${path}`

    return `${cleanBase}${cleanPath}`
}
