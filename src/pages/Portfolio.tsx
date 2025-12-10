import React from "react";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string; // propriété pour l'image
};

const PROJECTS: Project[] = [
  {
    title: "Infrastructure GNS3 multi-réseaux",
    subtitle: "Topologie Cisco + Debian",
    description:
      "Architecture complète avec VLAN, routage inter-réseaux, DHCP, DNS et supervision. Objectif : se rapprocher d’une infra de production segmentée.",
    tags: ["Cisco", "GNS3", "Debian", "Réseau"],
    image: "/images/portfolio_image_1.png",
  },
  {
    title: "Services réseau sous Debian",
    subtitle: "DNS, DHCP, Samba, Mail…",
    description:
      "Mise en place de serveurs DNS, DHCP, Samba, Postfix/Dovecot et supervision de base. Focus sur la fiabilité, la sécurité et la documentation.",
    tags: ["Linux", "Debian", "Services réseau"],
    image: "/images/portfolio_image_2.png",
  },
  {
    title: "Scripts Bash d’automatisation",
    subtitle: "Users, sauvegardes, monitoring",
    description:
      "Scripts Bash pour automatiser la création d’utilisateurs, les sauvegardes, la rotation de logs et quelques tâches d’admin système récurrentes.",
    tags: ["Bash", "Automation", "Scripting"],
    image: "/images/portfolio_image_3.png",
  },
  {
    title: "Containerisation avec Docker",
    subtitle: "Apps & Services",
    description:
      "Création d’images Docker, docker-compose, séparation des services (web, base de données, cache). Objectif : rendre le déploiement reproductible.",
    tags: ["Docker", "DevOps", "Containers"],
    image: "/images/portfolio_image_4.png",
  },
  {
    title: "Site vitrine WordPress",
    subtitle: "SARJEM menuiserie",
    description:
      "Création d’un site vitrine professionnel pour une activité de menuiserie : mise en valeur des services, SEO de base et tunnel de contact.",
    tags: ["WordPress", "Web", "SEO"],
    image: "/images/portfolio_image_5.png",
  },
  {
    title: "Outils & lab perso",
    subtitle: "Environnements de tests",
    description:
      "Montage d’un lab perso pour tester des scénarios réseau / infra, faire des POC, et documenter les approches orientées production.",
    tags: ["Lab", "Homelab", "Expérimentation"],
    image: "/images/portfolio_image_6.png",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="bg-slate-50 dark:bg-slate-950 py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        {/* Bloc d’intro */}
        <div className="mb-12 rounded-3xl bg-white/90 dark:bg-slate-900/85 border border-slate-200/70 dark:border-slate-800 px-6 sm:px-10 py-8 sm:py-10 shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 mb-4">
            Portfolio technique
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl">
            Quelques projets réalisés dans le cadre de ma formation à l’ETNA et
            en autonomie. Objectif : construire des bases solides en systèmes,
            réseau et automatisation, avec une approche orientée production.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "Linux & Debian",
              "Cisco • GNS3",
              "Scripts • Automation",
              "Docker",
              "Web / WordPress",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm px-3 py-1 text-slate-700 dark:text-slate-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Grille des projets */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-slate-200/70 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* IMAGE + titre/sous-titre dans l’image */}
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-300"
                />

                <div className="absolute inset-0 bg-slate-900/20 dark:bg-slate-950/50 group-hover:bg-slate-900/10 dark:group-hover:bg-slate-950/40 transition-colors" />

                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-xs uppercase tracking-wide text-slate-200 dark:text-slate-300 mb-1">
                    {project.subtitle}
                  </p>
                  <h3 className="text-lg font-semibold text-white dark:text-slate-50 drop-shadow">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Corps de la carte */}
              <div className="px-6 py-5">
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 text-xs">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-100 px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
