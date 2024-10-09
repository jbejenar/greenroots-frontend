// components/ProjectCard.tsx
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ProjectCardProps {
  project?: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  if (!project) {
    return (
      <Card>
        <Skeleton variant="rectangular" width="100%" height={140} />
        <CardContent>
          <Skeleton width="60%" />
          <Skeleton width="80%" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardMedia component="img" image={project.image} alt={project.title} />
      <CardContent>
        <Typography variant="h5">{project.title}</Typography>
        <Typography variant="body2">{project.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
