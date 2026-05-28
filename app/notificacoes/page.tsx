const notifications = [
  { title: "Novo comentário", detail: "Seu relatório recebeu um comentário de revisão.", state: "Não lida" },
  { title: "Exportação pronta", detail: "O arquivo CSV já pode ser baixado.", state: "Lida" },
  { title: "Meta alterada", detail: "A meta do trimestre foi atualizada pelo time.", state: "Não lida" },
  { title: "Integração concluída", detail: "A sincronização com o serviço externo terminou.", state: "Lida" },
];

export default function NotificacoesPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <section className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_18px_70px_rgba(15,23,42,0.08)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Notificações</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight">Central de alertas para testar listas, filtros e ações em massa.</h1>
            <p className="mt-4 text-base leading-8 text-slate-600">Página útil para validar contagens, estados lidos/não lidos, botões de ação e leitura sequencial de uma lista mais longa.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["Todas", "Não lidas", "Lidas"].map((filter, index) => (
              <button
                key={filter}
                type="button"
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${index === 0 ? "bg-slate-950 text-white shadow-sm" : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300"}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800" type="button">
            Marcar todas como lidas
          </button>
          <button className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300" type="button">
            Limpar alertas
          </button>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {notifications.map((notification) => (
          <article key={notification.title} className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_18px_70px_rgba(15,23,42,0.06)]">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold tracking-tight">{notification.title}</h2>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${notification.state === "Não lida" ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-500"}`}
              >
                {notification.state}
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">{notification.detail}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <button className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300" type="button">
                Abrir
              </button>
              <button className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300" type="button">
                Arquivar
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
