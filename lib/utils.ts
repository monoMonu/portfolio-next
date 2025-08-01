import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs))
}

export const fetchDataForKey = async (key: string) => {
   try {
      const res = await fetch(`/api/${key}`, {
         method: 'GET',
      });

      if (!res.ok) {
         throw new Error(`Failed to fetch ${key}: ${res.statusText}`);
      }

      const data = await res.json();

      return data.data;
   } catch (error) {
      console.error('Error fetching data:', error);
      return error;
   }
};

export type ContactFormPayload = {
   userEmail: string;
   userName: string;
   subject: string;
   message: string;
};

export const sendEmail = async (data: ContactFormPayload) => {
   try {
      const response = await fetch('/api/email', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
         throw new Error(result.error || 'Failed to send message.');
      }

      return {
         success: true,
         data: result.data,
      };
   } catch (error: unknown) {
      console.error('Email sending failed:', error);
      return {
         success: false,
         error: error instanceof Error ? error.message : 'Something went wrong.',
      };
   }
};

