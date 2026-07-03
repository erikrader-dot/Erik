// Thin localStorage helpers. Feedback and votes have no backend yet, so
// everything submitted from those tabs is kept in the browser only.
export function loadList(key) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function appendToList(key, entry) {
  const list = loadList(key);
  list.push(entry);
  window.localStorage.setItem(key, JSON.stringify(list));
  return list;
}
