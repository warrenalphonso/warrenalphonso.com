/**
 * Theh global site tage (gtag.js) is a JS tagging framework to send event data
 * to Google Analytics. I set this up by following this:
 * https://stackoverflow.com/a/65081431/13697995
 */
export const GA_TRACKING_ID = "G-C8JJZN2Z3N"

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL): void => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  })
}

type GTagEvent = {
  action: string
  category: string
  label: string
  value: number
}

// If I want to send any specific events.
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent): void => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  })
}
