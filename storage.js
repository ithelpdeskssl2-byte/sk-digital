// storage.js - SK Digital database API (secure, no password here)
const DB_KEY = "sk-digital-content";
export const StorageAPI = {
  get: () => { try { const raw = localStorage.getItem(DB_KEY); return raw ? JSON.parse(raw) : null; } catch(e){ return null; } },
  set: (data) => { try { localStorage.setItem(DB_KEY, JSON.stringify(data)); return true; } catch(e){ return false; } }
};
window.storage = {
  get: async (k) => { const v = localStorage.getItem(k); return v ? {value: v} : null; },
  set: async (k, v) => { localStorage.setItem(k, v); return true; }
};
