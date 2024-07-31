import type { SyntheticEvent } from "react";

type PreventBubblingProps = {
  preventDefault?: boolean;
  callback?: (...args: never[]) => unknown;
};

/**
 * Prevents the event from bubbling up the DOM tree.
 */
export function preventBubbling({
  preventDefault,
  callback,
}: PreventBubblingProps = {}) {
  return (e: SyntheticEvent): void => {
    e.stopPropagation();

    if (preventDefault) e.preventDefault();
    if (callback) callback();
  };
}

/**
 * Returns the content without the extension.
 */
export function removeContentExtension(content: string): string {
  return content.replace(/\.mdx$/, "");
}
