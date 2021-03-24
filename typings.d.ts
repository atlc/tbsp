export = Sizing;


declare namespace Sizing {
    export type sizes = {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
    }

    export type screens = {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
    }

    /**
     * Returns an object of strings of Tailwind's breakpoint sizes.
     * 
     * ```
     * {
     *   sm: '640px',
     *   md: '768px',
     *   lg: '1024px',
     *   xl: '1280px',
     *   xxl: '1536px'
     * }
     * ```
     */
    export function size(): sizes;

    /**
     * Returns an object of strings of the minimum width css property according to Tailwind's breakpoint sizes.
     * 
     * ```
     * {
     *   sm: `(min-width: ${size.sm})`,
     *   md: `(min-width: ${size.md})`,
     *   lg: `(min-width: ${size.lg})`, 
     *   xl: `(min-width: ${size.xl})`,
     *   xxl: `(min-width: ${size.xxl})`
     * }
     * ```
     */
     export function screen(): screens;
    
}
