import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name || !form.email || !form.message) {
      setError("Merci de remplir tous les champs.");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Merci d’entrer un email valide.");
      return;
    }

    setSuccess("Merci pour votre message ! Je vous répondrai dès que possible.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="space-y-12">
      {/* HERO */}
      <section
        className="
          rounded-3xl 
          border 
          px-6 py-8 md:px-10 md:py-10 
          bg-white border-slate-200 
          shadow-[0_18px_45px_rgba(15,23,42,0.08)]
          dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:border-slate-800
        "
      >
        <div className="grid gap-10 lg:grid-cols-[1.6fr,1.2fr] items-center">
          {/* TEXTE GAUCHE */}
          <div className="space-y-5">
            <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-indigo-600 dark:text-indigo-300">
              Aymen Brahimi · Admin systèmes & réseaux
            </p>

            <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
              Étudiant en{" "}
              <span className="text-indigo-600 dark:text-indigo-300">
                Architecture & Réseau
              </span>{" "}
              à l’ETNA 🎓
            </h1>

            <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 max-w-xl">
              Je conçois, configure et sécurise des infrastructures réseau sous Linux et
              Cisco : VLAN, routage, NAT, DMZ, services (DNS, DHCP, Samba, SMTP/IMAP),
              virtualisation et supervision. Je cherche une alternance en administration
              systèmes & réseaux.
            </p>

            <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 max-w-xl">
              Après plusieurs expériences en business développement et la création de
              SARJEM, je me reconvertis dans l’IT pour travailler au plus près des
              infrastructures et de la sécurité.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/portfolio"
                className="px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm shadow-[0_10px_30px_rgba(79,70,229,0.45)] transition-transform hover:-translate-y-[1px]"
              >
                Voir mes projets techniques
              </Link>

              <Link
                to="/a-propos"
                className="px-5 py-3 rounded-2xl border border-slate-300 text-slate-900 hover:border-slate-500 bg-white text-sm dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100"
              >
                Découvrir mon parcours
              </Link>
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 pt-4">
              {[
                "Linux · Debian",
                "Cisco · GNS3",
                "VLAN & NAT",
                "DNS · DHCP · Samba",
                "Bash · Python",
                "Docker",
                "WordPress",
              ].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs border border-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* CARTE DROITE */}
          <div className="space-y-4">
            <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)] dark:bg-slate-950/80 dark:border-slate-700">
              <p className="text-[10px] tracking-[0.3em] uppercase text-slate-500 text-center mb-4 dark:text-slate-400">
                Infrastructure · Réseau · Linux
              </p>

              <p className="text-sm text-slate-700 text-center max-w-xs mx-auto dark:text-slate-200">
                GNS3 · Debian · VLAN & routage · NAT · DMZ · serveurs mail & fichiers ·
                scripts Bash & Python · Docker · WordPress.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-4 text-center text-xs">
                <div className="rounded-2xl py-3 border border-slate-200 bg-slate-50 dark:bg-slate-900 dark:border-slate-700">
                  <p className="text-[10px] text-slate-500 uppercase dark:text-slate-400">
                    Niveau
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    B3 ETNA
                  </p>
                </div>
                <div className="rounded-2xl py-3 border border-slate-200 bg-slate-50 dark:bg-slate-900 dark:border-slate-700">
                  <p className="text-[10px] text-slate-500 uppercase dark:text-slate-400">
                    Spé
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    Archi & Réseau
                  </p>
                </div>
                <div className="rounded-2xl py-3 border border-slate-200 bg-slate-50 dark:bg-slate-900 dark:border-slate-700">
                  <p className="text-[10px] text-slate-500 uppercase dark:text-slate-400">
                    Objectif
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    Alternance
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-600 flex flex-wrap items-center gap-3 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-sm dark:bg-indigo-500/20 dark:text-indigo-300">
                ⓘ
              </span>
              <p>
                Ouvert aux postes d’
                <span className="font-semibold">
                  administrateur systèmes & réseaux
                </span>{" "}
                junior, support infra ou DevOps junior avec montée en compétences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APERÇU PAGES (À propos / Portfolio) */}
      <section className="grid gap-6 md:grid-cols-2">
        <Link
          to="/a-propos"
          className="group relative overflow-hidden rounded-2xl p-6 border bg-white border-slate-200 hover:border-indigo-500/70 hover:shadow-[0_12px_30px_rgba(15,23,42,0.12)] transition dark:bg-slate-950/80 dark:border-slate-800"
        >
          <h2 className="text-xl font-semibold mb-2 text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-300">
            À propos
          </h2>

          <p className="text-slate-700 text-sm mb-3 dark:text-slate-300">
            Mon parcours, ma reconversion vers l’IT, mes compétences techniques et mes
            objectifs en systèmes & réseaux.
          </p>

          <span className="text-xs text-indigo-600 group-hover:underline inline-flex items-center gap-1 dark:text-indigo-300">
            Explorer <span>→</span>
          </span>
        </Link>

        <Link
          to="/portfolio"
          className="group relative overflow-hidden rounded-2xl p-6 border bg-white border-slate-200 hover:border-indigo-500/70 hover:shadow-[0_12px_30px_rgba(15,23,42,0.12)] transition dark:bg-slate-950/80 dark:border-slate-800"
        >
          <h2 className="text-xl font-semibold mb-2 text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-300">
            Portfolio
          </h2>

          <p className="text-slate-700 text-sm mb-3 dark:text-slate-300">
            Projets réseau, Linux, scripts Bash/Python, Docker, WordPress, réalisés à
            l’ETNA et en autonomie.
          </p>

          <span className="text-xs text-indigo-600 group-hover:underline inline-flex items-center gap-1 dark:text-indigo-300">
            Voir les projets <span>→</span>
          </span>
        </Link>
      </section>

      {/* CONTACT */}
      <section className="mt-4 rounded-3xl border px-6 py-6 md:p-7 bg-white border-slate-200 shadow-[0_14px_32px_rgba(15,23,42,0.10)] dark:bg-slate-950/80 dark:border-slate-800">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-5">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Me contacter
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Une alternance, un projet ou juste envie d’échanger autour des systèmes,
              du réseau ou de la sécurité ? Laisse-moi un message.
            </p>
          </div>

          <div className="text-xs text-slate-500 md:text-right dark:text-slate-400">
            <p>Disponible pour une alternance en administration</p>
            <p> systèmes & réseaux / support infra / DevOps junior.</p>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm mb-1 text-slate-800 dark:text-slate-200">
                Nom
              </label>
              <input
                type="text"
                className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100 dark:placeholder:text-slate-500"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-slate-800 dark:text-slate-200">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100 dark:placeholder:text-slate-500"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1 text-slate-800 dark:text-slate-200">
              Message
            </label>
            <textarea
              className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-2 text-sm h-28 resize-none text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100 dark:placeholder:text-slate-500"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>

          {error && (
            <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
          )}
          {success && (
            <p className="text-sm text-emerald-600 dark:text-emerald-400">
              {success}
            </p>
          )}

          <button
            type="submit"
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-sm font-medium mt-1 text-white"
          >
            Envoyer
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
