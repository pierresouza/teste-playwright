const milestones = [
  ["Descoberta", "Mapeamento inicial da interface e principais fluxos."],
  ["Prototipação", "Criação do layout com blocos de navegação e dados."],
  ["Cobertura", "Definição dos cenários automatizados prioritários."],
  ["Escala", "Expansão de testes para novas áreas do produto."],
];

export default function TimelinePage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <section className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_18px_70px_rgba(15,23,42,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Timeline</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Linha do tempo vertical, ideal para rolagem e leitura sequencial.</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          Esta página é propositalmente diferente das demais: ela favorece scroll, rastreamento de etapas e assertivas por ordem, o que ajuda bastante em testes automatizados mais longos.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.75fr]">
        <div className="rounded-[36px] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_18px_70px_rgba(15,23,42,0.18)]">
          <div className="space-y-6">
            {milestones.map(([title, description], index) => (
              <article key={title} className="flex gap-5 rounded-[28px] border border-white/10 bg-white/5 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-slate-950">
                  0{index + 1}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="grid gap-6">
          <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_18px_70px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Meta</p>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">Validar que o fluxo suporta navegação extensa e leitura de etapas.</p>
          </section>

          <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_18px_70px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Sinais</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
              <li className="rounded-2xl bg-slate-50 px-4 py-3">Marcos visíveis por ordem.</li>
              <li className="rounded-2xl bg-slate-50 px-4 py-3">Blocos alternando importância visual.</li>
              <li className="rounded-2xl bg-slate-50 px-4 py-3">Estrutura boa para validação de scroll.</li>
            </ul>
          </section>
        </aside>
      </section>
    </main>
  );
}