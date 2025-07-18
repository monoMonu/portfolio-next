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
