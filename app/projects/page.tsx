// app/projects/page.tsx
import { NextSeo } from 'next-seo';
import Grid from '@mui/material/Grid';
import ProjectCard from '@/components/ProjectCard';
import useFetchData from '@/hooks/useFetchData';
import { Project } from '@/types/index';

export default function ProjectsPage() {
  const { data: projects, loading, error } = useFetchData<Project[]>('projects');

  return (
    <>
      <NextSeo title="Our Projects - GreenRoots" description="Explore our reforestation projects." />
      <main id="main-content">
        <h1>Our Projects</h1>
        {loading && <p>Loading projects...</p>}
        {error && <p>Error loading projects.</p>}
        <Grid container spacing={2}>
          {projects &&
            projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <ProjectCard project={project} />
              </Grid>
            ))}
        </Grid>
      </main>
    </>
  );
}
