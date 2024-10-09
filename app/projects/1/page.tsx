// app/projects/[id]/page.tsx
import { NextSeo } from 'next-seo';
import { Project } from '@/types';
import { fetchData } from '@/utils/api';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project: Project | null = await fetchData<Project>(`projects/${params.id}`);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <>
      <NextSeo title={`${project.title} - GreenRoots`} description={project.description} />
      <main id="main-content">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </main>
    </>
  );
}
