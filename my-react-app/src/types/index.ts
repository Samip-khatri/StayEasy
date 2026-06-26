export interface User {
  id: string
  full_name: string
  email: string
  phone: string
  role: string
  created_at: string
}

export interface AuthState {
  user: User | null
  token: string | null
  loading: boolean
}

export interface LoginPayload {
  email: string
  password: string
}

export interface SignupPayload {
  full_name: string
  email: string
  phone: string
  password: string
}

export interface SearchFormData {
  destination: string
  checkIn: string
  checkOut: string
  guests: number
}

export interface Destination {
  id: number
  name: string
  country: string
  image: string
  reviews: number
}

export interface Testimonial {
  id: number
  name: string
  location: string
  avatar: string
  rating: number
  quote: string
}
