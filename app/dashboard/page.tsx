const kpis = [
  { label: "Conversão", value: "18,4%", delta: "+2,1%" },
  { label: "Ativos", value: "1.248", delta: "+84" },
  { label: "Fila", value: "37", delta: "-12" },
  { label: "SLA", value: "96%", delta: "+1,4%" },
];

const bars = [74, 52, 86, 63, 91, 48, 77, 69];

const activities = [
  "Nova solicitação enviada para revisão manual.",
  "Sincronização concluída com o serviço externo.",
  "Três itens foram marcados como prioritários.",
  "Relatório diário exportado com sucesso.",
];

export default function DashboardPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[36px] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_18px_70px_rgba(15,23,42,0.18)]">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Dashboard operacional</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight">
            Um painel mais denso, com blocos e dados suficientes para testar cliques e leitura visual.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
            Esta tela usa cards, barras e lista lateral para simular um cenário de produto real, ótimo para validar automação de navegação e assertivas numéricas.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {kpis.map((item) => (
              <article key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-300">{item.label}</p>
                <p className="mt-2 text-3xl font-semibold">{item.value}</p>
                <p className="mt-2 text-sm text-emerald-300">{item.delta}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_18px_70px_rgba(15,23,42,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Atividade recente</p>
          <ul className="mt-6 space-y-4">
            {activities.map((activity) => (
              <li key={activity} className="rounded-3xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                {activity}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_18px_70px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight">Tendência semanal</h2>
            <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">Em alta</span>
          </div>

          <div className="mt-8 flex h-64 items-end gap-3 rounded-[28px] bg-slate-50 p-4">
            {bars.map((height, index) => (
              <div key={index} className="flex flex-1 flex-col items-center gap-3">
                <div className="w-full rounded-t-2xl bg-slate-950" style={{ height: `${height}%` }} />
                <span className="text-xs text-slate-500">D{index + 1}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="grid gap-6">
          {[
            ["Fila de aprovação", "12 itens aguardando validação"],
            ["Integrações", "4 conectores com saúde estável"],
            ["Alertas", "2 eventos precisam de atenção"],
          ].map(([title, description]) => (
            <div key={title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_70px_rgba(15,23,42,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{title}</p>
              <p className="mt-2 text-xl font-semibold text-slate-950">{description}</p>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
}