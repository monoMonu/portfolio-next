'use client'

import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchDataForKey } from "./utils";
import { ProjectType } from "@/components/project-card";
import { ExperienceType } from "@/components/experience-card";
import { IAbout } from "@/components/sections/hero-section";
import { ISkills } from "@/components/sections/skill-section";

interface IData {
   about: IAbout[] | null,
   projects: ProjectType[] | null,
   experiences: ExperienceType[] | null,
   skills: ISkills[] | null,
   loading: boolean
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
   const [loading, setLoading] = useState(true);
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
               console.log(res)
               return [key, res.sort((a: any, b: any) => a.id - b.id)];
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