import { useEffect } from "react";

type KeyMap = Partial<Record<string, () => void>>;

export function useKeyboard(keymap: KeyMap, isActive: boolean): void {
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const handler = keymap[e.key];
      if (handler) handler();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isActive, keymap]);
}
