import { projectsData } from '@/utils/data/projects-data';
import SingleProject from '../../components/homepage/projects/single-project'

const ProjectPage = ({ params }) => {
  const { id } = params;
  const project = projectsData.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <SingleProject project={project} />
    </div>
  );
};

export default ProjectPage;
