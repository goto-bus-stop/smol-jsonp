/**
 * Load data using JSON-P.
 *
 * @param url The URL to load.
 *
 * @example
 * ```typescript
 * // Loads <script src="http://some-jsonp-url?query=etc&callback={NAME}"></script>
 * const result = await jsonp<unknown>('http://some-jsonp-url?query=etc')
 * // Loads <script src="http://some-jsonp-url?cb={NAME}"></script>
 * const result2 = await jsonp<unknown>('http://some-jsonp-url', { param: 'cb' })
 * ```
 */
declare function jsonp<T>(url: string, opts?: jsonp.JsonpOptions): Promise<T>
declare namespace jsonp {
  export type JsonpOptions = {
    /**
     * The query parameter to use for the callback function name. Most services use 'callback' or 'cb'.
     */
    param?: string
  }
}

export = jsonp
