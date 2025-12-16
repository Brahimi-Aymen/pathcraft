import React from "react";

import aymenPP from "../assets/aymen-pp.jpg";

const About = () => {
  return (
    
    <div className="space-y-10">
      {/* HEADER + PHOTO */}
      <section className="rounded-3xl border px-6 py-8 md:px-10 md:py-10 bg-white border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.08)] dark:bg-slate-950/80 dark:border-slate-800">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* PHOTO */}
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-indigo-500 shadow-xl dark:shadow-md">
              <img
                src={aymenPP}
                alt="Aymen Brahimi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXTE */}
          <div className="space-y-3 text-center md:text-left max-w-2xl">
            <p className="text-xs tracking-[0.35em] uppercase text-indigo-600 dark:text-indigo-300">
              Aymen Brahimi · Admin systèmes & réseaux
            </p>

            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              À propos de moi
            </h1>

            <p className="text-sm md:text-base text-slate-700 dark:text-slate-300">
              Étudiant en <span className="font-semibold">Architecture & Réseau à l’ETNA</span>,
              en reconversion après un parcours en business et ingénierie d’affaires.
              Je conçois et administre des infrastructures sous Linux & Cisco, avec un
              intérêt particulier pour les services réseau, la sécurité et
              l’automatisation.
            </p>

            <p className="text-sm md:text-base text-slate-700 dark:text-slate-300">
              J’ai fondé la société de menuiserie <span className="font-semibold">SARJEM</span>,
              ce qui m’a donné une vraie culture terrain : gestion de clients, suivi de
              projets, organisation et communication. Aujourd’hui, je mets cette
              expérience au service des systèmes & réseaux.
            </p>
          </div>
        </div>
      </section>

      {/* COMPÉTENCES TECHNIQUES */}
      <section className="rounded-3xl border px-6 py-6 md:px-8 md:py-7 bg-white border-slate-200 shadow-sm dark:bg-slate-950/80 dark:border-slate-800">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
          Compétences techniques
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-indigo-600 dark:text-indigo-400">
              Systèmes
            </h3>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
              <li>Linux (Debian, Ubuntu) — administration & services (SSH, DNS, DHCP, Samba, SMTP/IMAP)</li>
              <li>Notions Windows Server</li>
              <li>Supervision & troubleshooting</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-indigo-600 dark:text-indigo-400">
              Réseau
            </h3>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
              <li>Topologies Cisco · VLAN · Routage inter-VLAN</li>
              <li>NAT, PAT, DMZ — conception & sécurisation</li>
              <li>Outils : GNS3, Wireshark</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-indigo-600 dark:text-indigo-400">
              Dev / Scripts
            </h3>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
              <li>Bash scripting — automatisation de tâches</li>
              <li>Python (CLI, JSON) — petits outils & traitement simple</li>
              <li>HTML/CSS, WordPress — déploiement & maintenance</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-indigo-600 dark:text-indigo-400">
              Outils & virtualisation
            </h3>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
              <li>Docker & docker-compose</li>
              <li>VirtualBox, VMware (notions)</li>
              <li>Git, CI/CD (bases)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FORMATIONS */}
      <section className="rounded-3xl border px-6 py-6 md:px-8 md:py-7 bg-white border-slate-200 shadow-sm dark:bg-slate-950/80 dark:border-slate-800">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
          Formations
        </h2>

        <div className="space-y-4">
          <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 dark:bg-slate-900 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Bachelor 3 — Architecture & Réseau
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">ETNA</p>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                2025 – 2026
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              Infrastructures Linux & Cisco, GNS3, services réseau, DMZ, sécurité,
              virtualisation, scripts Bash / Python.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Mastère — Ingénierie d’Affaires
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">PPA</p>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                2021 – 2023
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              Construction d’offres, pilotage de cycles de vente, travail avec des
              équipes techniques.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Bachelor — Marketing
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Groupe Alternance
                </p>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                2020 – 2021
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              Marketing digital, communication, relation client.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  DUT — Techniques de Commercialisation
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  IUT de Meaux
                </p>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                2018 – 2020
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              Base solide en vente, négociation, marketing, gestion.
            </p>
          </div>
        </div>
      </section>

      {/* EXPÉRIENCES */}
      <section className="rounded-3xl border px-6 py-6 md:px-8 md:py-7 bg-white border-slate-200 shadow-sm dark:bg-slate-950/80 dark:border-slate-800">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
          Expériences
        </h2>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-3 h-3 rounded-full bg-indigo-500 mt-1.5" />
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                Fondateur & Gérant — SARJEM
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                2023 – 2025
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Création et gestion d’une société de menuiserie (fenêtres/portes) :
                gestion clients, chantiers, devis/facturation, outils digitaux et
                communication (LinkedIn, Instagram).
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-3 h-3 rounded-full bg-indigo-500 mt-1.5" />
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                Ingénieur d’affaires (alternance) — Data Links
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                2022 – 2023
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Propositions techniques & commerciales, qualification des besoins,
                coordination avec les équipes réseau et cybersécurité.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-3 h-3 rounded-full bg-indigo-500 mt-1.5" />
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                Chargé de développement (alternance) — Réseau GES
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                2021 – 2022
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Prospection, gestion de prospects, campagnes digitales, suivi des
                indicateurs et reporting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
