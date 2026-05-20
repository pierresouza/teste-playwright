const faqs = [
  ["Como começar?", "Use o menu fixo e percorra as telas para validar navegação e seletores."],
  ["O Playwright foi instalado?", "Não. Esta base é só para preparar a POC e o desenho do teste."],
  ["Posso adaptar para o projeto principal?", "Sim, o layout é genérico e pode virar referência estrutural."],
];

export default function SuportePage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <section className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
        <article className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_18px_70px_rgba(15,23,42,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Suporte</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">Uma área com FAQ, status e cartões de contato para testar uma terceira linguagem visual.</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            A ideia aqui é variar ainda mais o layout: uma página com leitura em blocos, perguntas frequentes e canais de ajuda, útil para testar se a automação lida bem com conteúdo sem muita repetição de padrões.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Tempo médio", "8 min"],
              ["Satisfação", "94%"],
              ["Chamados", "17 abertos"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[28px] border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{label}</p>
                <p className="mt-2 text-3xl font-semibold text-slate-950">{value}</p>
              </div>
            ))}
          </div>
        </article>

        <aside className="grid gap-6">
          <section className="rounded-4xl border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_18px_70px_rgba(15,23,42,0.18)]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Status</p>
            <div className="mt-6 space-y-4">
              {[
                ["Chat", "Ativo"],
                ["Base de conhecimento", "Atualizada"],
                ["Tempo de resposta", "Baixo"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-4 py-3">
                  <span className="text-sm text-slate-300">{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-4xl border border-slate-200 bg-white p-8 shadow-[0_18px_70px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Contato</p>
            <div className="mt-5 space-y-3">
              {faqs.map(([question, answer]) => (
                <details key={question} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-slate-950">{question}</summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{answer}</p>
                </details>
              ))}
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}