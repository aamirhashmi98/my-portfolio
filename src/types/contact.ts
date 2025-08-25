import { ReactNode } from "react";

export interface ContactInfo {
  medium: string;
  icon: ReactNode;
  data: string;
}

export interface Contact {
  contactInfo: ContactInfo[];
}
