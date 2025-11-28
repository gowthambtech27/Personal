export interface Experience {
  id?: string; // Optional for when reading/deleting by ID
  title: string;
  company: string;
  location: string;
  startDate: string; // Using string for simple date input
  endDate: string;   // Can be 'Present' or a date string
  description: string[]; // Array of bullet points
}