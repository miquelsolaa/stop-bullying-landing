export const GA_MEASUREMENT_ID = 'G-J7RJ6KRMBZ'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag) return
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label: string
  value?: number
}) => {
  if (typeof window === 'undefined' || !window.gtag) return
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}