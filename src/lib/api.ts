export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // http://localhost:3000
export const EXTERNAL_API_URL = import.meta.env.VITE_EXTERNAL_API_URL; // e.g. https://api.yourservice.com

export const API_ENDPOINTS = {
  // --- Internal (localhost:3000) ---
  BASE: API_BASE_URL,
  REGISTER: `${API_BASE_URL}/api/members/register`,
  LOGIN: `${API_BASE_URL}/api/members/login`,
  LOGOUT: `${API_BASE_URL}/api/members/logout`,
  PROFILE: `${API_BASE_URL}/api/members/profile`,
  EVENT: `${API_BASE_URL}/api/events/`,
  REGISTERED_EVENTS: `${API_BASE_URL}/api/events/registeredEvents`,
  USER_EVENTS: `${API_BASE_URL}/api/events/userEvents`,
  EVENT_REGISTRATIONS: `${API_BASE_URL}/api/events/getregistrations`,
  CREATE_EVENT: `${API_BASE_URL}/api/events/createnewevent`,

  // --- External (VITE_EXTERNAL_API_URL) ---
  // Add external endpoints here as needed. Example:
  // UPLOAD_IMAGE: `${EXTERNAL_API_URL}/upload`,
};
