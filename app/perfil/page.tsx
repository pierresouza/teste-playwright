const preferences = [
  ["Receber e-mails", true],
  ["Notificações push", false],
  ["Resumo semanal", true],
  ["Atualizações beta", false],
];

export default function PerfilPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_18px_70px_rgba(15,23,42,0.08)]">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950 text-xl font-semibold text-white">PS</div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Perfil</p>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight">Pierres Souza</h1>
            </div>
          </div>

          <p className="mt-5 text-base leading-8 text-slate-600">Tela com foco em validação de dados pessoais, preferências e ações de conta. Boa para testar inputs, toggles e botões de decisão.</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["Projetos", "12"],
              ["Testes", "48"],
              ["Alertas", "3"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{label}</p>
                <p className="mt-1 text-2xl font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </aside>

        <section className="grid gap-6">
          <article className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_18px_70px_rgba(15,23,42,0.08)]">
            <h2 className="text-2xl font-semibold tracking-tight">Dados da conta</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Nome
                <input className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400" type="text" defaultValue="Pierres Souza" />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                E-mail
                <input className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400" type="email" defaultValue="pierres@teste.com" />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 md:col-span-2">
                Cargo
                <input className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400" type="text" defaultValue="QA Lead" />
              </label>
            </div>
          </article>

          <article className="rounded-[36px] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_18px_70px_rgba(15,23,42,0.18)]">
            <h2 className="text-2xl font-semibold tracking-tight">Preferências</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {preferences.map(([label, active]) => (
                <label key={label} className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200">
                  <span>{label}</span>
                  <input className="h-4 w-4" type="checkbox" defaultChecked={active} />
                </label>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100" type="button">
                Salvar alterações
              </button>
              <button className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10" type="button">
                Redefinir
              </button>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
