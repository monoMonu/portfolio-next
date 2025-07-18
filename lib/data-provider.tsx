'use client'

import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchDataForKey } from "./utils";
import { ProjectType } from "@/components/project-card";
import { ExperienceType } from "@/components/experience-card";
import { IAbout } from "@/components/sections/hero-section";

interface IData {
   about: IAbout[] | null,
   projects: ProjectType[] | null,
   experiences: ExperienceType[] | null,
   skills: [] | null,
   loading: Boolean
}

const DataContext = createContext<IData>({
   about: null,
   projects: null,
   experiences: null,
   skills: null,
   loading: false
});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
   const [loading, setLoading] = useState(false);
   const [data, setData] = useState({
      about: null,
      projects: null,
      experiences: null,
      skills: null,
   })

   useEffect(() => {
      const fetchData = async () => {
         setLoading(true);
         try {
            const promises = await Promise.all(
               Object.keys(data).map(async key => {
               const res = await fetchDataForKey(key);
               return [key, res];
            }))

            const newData = Object.fromEntries(promises);
            setData(newData);
         } catch (error) {
            console.log(error);
            alert(error);
         } finally {
            setLoading(false);
         }
      }

      fetchData();

   }, []);

   return (
      <DataContext.Provider value={{loading, ...data}}>
         {children}
      </DataContext.Provider>
   )
}