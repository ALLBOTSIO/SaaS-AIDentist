type CacheOptions = {
  maxAge?: number;
};

class Cache {
  private cache: Map<string, { value: any; timestamp: number }>;
  private defaultMaxAge: number;

  constructor(defaultMaxAge = 5 * 60 * 1000) { // 5 minutes default
    this.cache = new Map();
    this.defaultMaxAge = defaultMaxAge;
  }

  set(key: string, value: any, options: CacheOptions = {}) {
    const timestamp = Date.now();
    this.cache.set(key, { value, timestamp });
  }

  get(key: string): any | null {
    const item = this.cache.get(key);
    if (!item) return null;

    const age = Date.now() - item.timestamp;
    if (age > this.defaultMaxAge) {
      this.cache.delete(key);
      return null;
    }

    return item.value;
  }

  clear() {
    this.cache.clear();
  }

  remove(key: string) {
    this.cache.delete(key);
  }
}

export const appCache = new Cache();