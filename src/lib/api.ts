export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_ENDPOINTS = {
  BASE: API_BASE_URL,
  REGISTER: `${API_BASE_URL}/api/members/register`,
  LOGIN: `${API_BASE_URL}/api/members/login`,
  PROFILE: `${API_BASE_URL}/api/members/profile`,
  EVENT: `${API_BASE_URL}/api/events/`,
  REGISTERED_EVENTS: `${API_BASE_URL}/api/events/registeredEvents`,
  USER_EVENTS: `${API_BASE_URL}/api/events/userEvents`,
  EVENT_REGISTRATIONS: `${API_BASE_URL}/api/events/getregistrations`,
  CREATE_EVENT: `${API_BASE_URL}/api/events/createnewevent`,
};
