const products = [
  { name: "Kit Alpha", price: "R$ 129", tag: "Novo" },
  { name: "Kit Beta", price: "R$ 189", tag: "Mais vendido" },
  { name: "Kit Gamma", price: "R$ 219", tag: "Pro" },
  { name: "Kit Delta", price: "R$ 89", tag: "Essencial" },
  { name: "Kit Omega", price: "R$ 249", tag: "Premium" },
  { name: "Kit Sigma", price: "R$ 149", tag: "Recomendado" },
];

const filters = ["Todos", "Novos", "Mais vendidos", "Premium", "Em estoque"];

export default function CatalogoPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <section className="grid gap-6 xl:grid-cols-[0.75fr_1.25fr]">
        <aside className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_18px_70px_rgba(15,23,42,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Catálogo</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">Cards, filtros e destaque visual para automação de navegação.</h1>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Essa página mistura colunas, chips e grid de produtos para você testar listas, contagens, ordenação e seleção de itens em uma interface mais comercial.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {filters.map((filter, index) => (
              <button
                key={filter}
                className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold leading-none transition ${index === 0 ? "bg-slate-950 text-white shadow-sm" : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300"}`}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
        </aside>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <article key={product.name} className={`rounded-[32px] border p-6 shadow-[0_18px_70px_rgba(15,23,42,0.06)] ${index === 1 ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 bg-white"}`}>
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${index === 1 ? "bg-white/10 text-slate-200" : "bg-slate-100 text-slate-500"}`}>
                {product.tag}
              </span>
              <div className="mt-16 flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">{product.name}</h2>
                  <p className={`mt-2 text-sm ${index === 1 ? "text-slate-200" : "text-slate-600"}`}>
                    Descrição curta para testes de leitura e comparação entre cards.
                  </p>
                </div>
                <strong className="text-xl font-semibold tracking-tight">{product.price}</strong>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}