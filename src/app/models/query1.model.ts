export interface Query {
  id: number;
  name: string;
  message: string;
  responseMessage?: string; // Optional if used
  customerName?: string; // Ensure this matches your service and component
}
