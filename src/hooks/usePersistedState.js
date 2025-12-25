import { useEffect, useState } from 'react';

/**
 * Minimal persisted-state hook (localStorage).
 * - Matches the old createPersistedState behavior used by this app.
 * - Safe if localStorage is unavailable (falls back to in-memory state).
 */
export default function usePersistedState(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw != null) return JSON.parse(raw);
    } catch {
      // ignore read/parse errors
    }

    return typeof initialValue === 'function' ? initialValue() : initialValue;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch {
      // ignore write errors (private mode/quota/etc.)
    }
  }, [key, state]);

  return [state, setState];
}

