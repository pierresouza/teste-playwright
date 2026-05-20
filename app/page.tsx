export default function Home() {
  const routeCards = [
    {
      title: "Dashboard",
      description: "Painel com métricas, barras e feed de atividade.",
      href: "/dashboard",
    },
    {
      title: "Catálogo",
      description: "Grid de cards com filtros, badge e destaques.",
      href: "/catalogo",
    },
    {
      title: "Formulários",
      description: "Inputs, seleção e resumo lateral.",
      href: "/formularios",
    },
    {
      title: "Timeline",
      description: "Linha do tempo com marcos e destaques.",
      href: "/timeline",
    },
    {
      title: "Suporte",
      description: "FAQ, status e canais de contato.",
      href: "/suporte",
    },
    {
      title: "Home",
      description: "Visão geral com links para as demais páginas.",
      href: "/",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#f8fafc_0%,#eef2ff_36%,#e2e8f0_100%)] text-slate-950">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <section className="rounded-[36px] border border-slate-200 bg-white/85 p-8 shadow-[0_18px_70px_rgba(15,23,42,0.08)] backdrop-blur sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Hub de navegação
              </span>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Base genérica com várias rotas para testar Playwright sem depender do projeto principal.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Use o menu fixo no topo para alternar entre páginas com estruturas diferentes, validar cliques, rolagem, seletores e estados visuais variados.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[340px] lg:grid-cols-1">
              {[
                ["Rotas prontas", "6"],
                ["Layouts distintos", "5+"],
                ["Objetivo", "POC"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{label}</p>
                  <p className="mt-1 text-2xl font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {routeCards.map((card) => (
            <article key={card.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_70px_rgba(15,23,42,0.06)]">
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
              <a className="mt-5 inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800" href={card.href}>
                Abrir página
              </a>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
