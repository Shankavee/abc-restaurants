export interface Reservation {
    id: number;
    name: string;
    date: string;
    time: string;
    status: string;
    type: string; 
  }
  
  export interface Query {
    id: number;
    customerName: string;
    queryText: string;
    status: string;
    message: string; 
  }
  