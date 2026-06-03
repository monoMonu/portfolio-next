import db from "./db";

export async function getAbout() {
  const { rows: data } = await db.query(`
            SELECT * FROM about ORDER BY id ASC;
         `)
  return data;
}

export async function getProjects() {
  const { rows: data } = await db.query(`
            SELECT * FROM projects ORDER BY id ASC;
         `)
  return data.sort(
    (a: { id: number }, b: { id: number }) => a.id - b.id
  );;
}

export async function getExperiences() {
  const { rows: data } = await db.query(`
            SELECT * FROM experiences ORDER BY id ASC;
         `)
  return data;
}

export async function getSkills() {
  const { rows: data } = await db.query(`
            SELECT * FROM skills ORDER BY id ASC;
         `)
  return data;
}

export async function getPortfolioData() {
  const [about, projects, experiences, skills] =
    await Promise.all([
      getAbout(),
      getProjects(),
      getExperiences(),
      getSkills(),
    ]);

  return {
    about,
    projects,
    experiences,
    skills,
  };
}