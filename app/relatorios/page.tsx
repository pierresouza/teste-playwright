const reports = [
  { name: "Receita", value: "R$ 42.380", trend: "+8,2%" },
  { name: "Conversão", value: "18,9%", trend: "+1,1%" },
  { name: "Retenção", value: "76%", trend: "+4,8%" },
  { name: "Tickets", value: "24", trend: "-6" },
];

const rows = [
  ["Campanha Alpha", "Ativa", "Alta", "R$ 12.480"],
  ["Campanha Beta", "Pausada", "Média", "R$ 8.160"],
  ["Campanha Gamma", "Ativa", "Baixa", "R$ 5.300"],
  ["Campanha Delta", "Em revisão", "Alta", "R$ 16.440"],
];

const tabs = ["Resumo", "Detalhado", "Exportação"];

export default function RelatoriosPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <section className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_18px_70px_rgba(15,23,42,0.08)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Relatórios</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight">Visão analítica para testar filtros, abas e tabelas.</h1>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Esta tela combina cards de resumo, botões de período e uma tabela simples, boa para testar leitura estrutural e navegação por componentes repetidos.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                type="button"
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${index === 0 ? "bg-slate-950 text-white shadow-sm" : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {reports.map((report) => (
            <article key={report.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{report.name}</p>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{report.value}</p>
              <p className="mt-2 text-sm font-medium text-emerald-700">{report.trend}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_18px_70px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight">Campanhas monitoradas</h2>
            <button className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800" type="button">
              Exportar CSV
            </button>
          </div>

          <div className="mt-6 overflow-hidden rounded-[28px] border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-semibold">Campanha</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">Prioridade</th>
                  <th className="px-4 py-3 font-semibold">Receita</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row[0]} className="border-t border-slate-200 bg-white">
                    <td className="px-4 py-3 font-medium text-slate-950">{row[0]}</td>
                    <td className="px-4 py-3 text-slate-600">{row[1]}</td>
                    <td className="px-4 py-3 text-slate-600">{row[2]}</td>
                    <td className="px-4 py-3 text-slate-600">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <aside className="grid gap-6">
          <section className="rounded-[36px] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_18px_70px_rgba(15,23,42,0.18)]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Período</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {["7 dias", "30 dias", "90 dias", "12 meses"].map((range, index) => (
                <button
                  key={range}
                  type="button"
                  className={`rounded-3xl px-4 py-3 text-sm font-semibold transition ${index === 0 ? "bg-white text-slate-950" : "border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"}`}
                >
                  {range}
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_18px_70px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Próximas ações</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
              <li className="rounded-2xl bg-slate-50 px-4 py-3">Ajustar campanhas com baixo desempenho.</li>
              <li className="rounded-2xl bg-slate-50 px-4 py-3">Revisar orçamento das campanhas em revisão.</li>
              <li className="rounded-2xl bg-slate-50 px-4 py-3">Exportar a visão detalhada para auditoria.</li>
            </ul>
          </section>
        </aside>
      </section>
    </main>
  );
}
