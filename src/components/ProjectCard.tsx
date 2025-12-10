import type { Project } from "../types/project";

type Props = {
  project: Project;
  onClick?: () => void;
};

const ProjectCard = ({ project, onClick }: Props) => {
  return (
    <article
      className="group border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/60 hover:bg-slate-900/90 hover:border-indigo-500/80 hover:-translate-y-1 transition cursor-pointer dark:bg-white dark:border-slate-200 dark:hover:border-indigo-500 dark:hover:bg-slate-50 dark:shadow-sm"
      onClick={onClick}
    >
      <div className="aspect-video bg-slate-800 flex items-center justify-center text-sm text-slate-400 dark:bg-slate-100 dark:text-slate-500">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <span>Aperçu projet</span>
        )}
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold group-hover:text-indigo-400 dark:text-slate-900 dark:group-hover:text-indigo-600">{project.title}</h3>

        <p className="text-sm text-slate-300 dark:text-slate-700">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-slate-200 dark:bg-slate-100 dark:text-slate-800 dark:border dark:border-slate-200">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
