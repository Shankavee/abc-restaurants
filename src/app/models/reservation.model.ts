export interface Reservation {
  id: number;
  name: string;
  email: string;
  phone: string;
  service_type: 'dine-in' | 'delivery';
  guests: number;
  reservation_date: string;
  reservation_time: string;
  special_requests?: string;
}
