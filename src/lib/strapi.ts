const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL || 'https://api.lagukaro.id';

let cachedAllSongs: any[] = [];

async function fetchWithRetry(url: string, retries = 3, delay = 1000): Promise<Response> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
      return res;
    } catch (err) {
      if (attempt === retries) throw err;
      await new Promise(resolve => setTimeout(resolve, delay * attempt));
    }
  }
  throw new Error(`Failed to fetch ${url} after ${retries} attempts`);
}

export async function getAllSongs(): Promise<any[]> {
  let data: any[] = [];
  try {
    let page = 1;
    let pageCount = 1;

    do {
      let res = await fetchWithRetry(`${STRAPI_URL}/api/lagus?populate=*&pagination[pageSize]=100&pagination[page]=${page}`);
      if (!res.ok) {
        res = await fetchWithRetry(`${STRAPI_URL}/api/songs?populate=*&pagination[pageSize]=100&pagination[page]=${page}`);
      }
      if (res.ok) {
        const json = await res.json();
        const items = json.data || [];
        data = data.concat(items);
        pageCount = json.meta?.pagination?.pageCount || 1;
        page++;
      } else {
        break;
      }
    } while (page <= pageCount);

    if (data.length > 0) {
      cachedAllSongs = data;
    }
  } catch (error) {
    console.error("Gagal mengambil data lagu dari Strapi:", error);
    if (cachedAllSongs.length > 0) {
      console.warn("Menggunakan cache songs yang tersimpan sebelumnya.");
      data = cachedAllSongs;
    }
  }

  if (data.length === 0 && cachedAllSongs.length > 0) {
    data = cachedAllSongs;
  }

  return data;
}

export async function getSongBySlug(slug: string): Promise<any | null> {
  try {
    let res = await fetchWithRetry(`${STRAPI_URL}/api/lagus?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`);
    if (!res.ok) {
      res = await fetchWithRetry(`${STRAPI_URL}/api/songs?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`);
    }
    if (res.ok) {
      const json = await res.json();
      return json.data?.[0] || null;
    }
  } catch (err) {
    console.error(`Gagal fetch lagu ${slug}:`, err);
  }
  return null;
}
