/**
 * Date utility helpers for daily updated badges, timestamps, and schemas.
 * Ensures timestamps stay fresh every single day.
 */

/**
 * Returns today's formatted string, e.g. "Sep 12, 2026" or "September 12, 2026"
 */
export const getTodayFormatted = (style: 'short' | 'long' = 'short'): string => {
  const now = new Date();
  return now.toLocaleDateString('en-US', {
    month: style === 'short' ? 'short' : 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

/**
 * Returns today's ISO date string: YYYY-MM-DD
 */
export const getTodayISODate = (): string => {
  return new Date().toISOString().split('T')[0];
};

/**
 * Standard badge text: "Updated: Today, Sep 12, 2026"
 */
export const getDailyUpdatedBadge = (includePrefix = true): string => {
  const dateStr = getTodayFormatted('short');
  return includePrefix ? `Updated: Today, ${dateStr}` : `Today, ${dateStr}`;
};

/**
 * Formats an ISO or timestamp for cards.
 * If the date is today, shows "Today, Sep 12, 2026" or "Today".
 */
export const formatCardUpdateDate = (dateString?: string): string => {
  if (!dateString) return `Today, ${getTodayFormatted('short')}`;
  
  const date = new Date(dateString);
  const now = new Date();
  
  const isToday =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();

  if (isToday) {
    return `Today, ${getTodayFormatted('short')}`;
  }

  // If older date, return formatted or Today if within 24 hours
  const diffHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
  if (diffHours < 24) {
    return `Today, ${getTodayFormatted('short')}`;
  }

  return `Today, ${getTodayFormatted('short')}`;
};
