export function disableContextMenuByDefault(
  allowSelector = "[data-allow-contextmenu]"
) {
  const handler = (e: MouseEvent) => {
    const target = e.target as Element | null;
    if (target && target.closest(allowSelector)) return; // allow in this subtree
    e.preventDefault(); // block the browser context menu
  };

  // capture = true so this runs early and reliably
  document.addEventListener("contextmenu", handler, true);

  // optional cleanup
  return () => document.removeEventListener("contextmenu", handler, true);
}
