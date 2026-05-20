"use client";

import { useState } from "react";

const initialFormState = {
  nomeCompleto: "",
  email: "",
  empresa: "",
  cargo: "",
  telefone: "",
  observacoes: "",
  aceitaComunicacoes: false,
  atualizacoesTeste: false,
};

export default function FormulariosPage() {
  const [formState, setFormState] = useState(initialFormState);
  const [statusMessage, setStatusMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage("Formulário enviado com sucesso.");
  }

  function handleClear() {
    setFormState(initialFormState);
    setStatusMessage("Campos limpos.");
  }

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <section className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <form className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_18px_70px_rgba(15,23,42,0.08)]" onSubmit={handleSubmit}>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Formulários</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">Um layout com campos, checkbox e botões para testar preenchimento.</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Esta página é boa para validar typing, foco, submissão e erros visuais em uma superfície bem diferente de dashboard e catálogo.
          </p>

          {statusMessage ? (
            <p className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800" role="status">
              {statusMessage}
            </p>
          ) : null}

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Nome completo
              <input
                className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400"
                name="nomeCompleto"
                onChange={(event) => setFormState((current) => ({ ...current, nomeCompleto: event.target.value }))}
                type="text"
                value={formState.nomeCompleto}
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              E-mail
              <input
                className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400"
                name="email"
                onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
                type="email"
                value={formState.email}
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Empresa
              <input
                className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400"
                name="empresa"
                onChange={(event) => setFormState((current) => ({ ...current, empresa: event.target.value }))}
                type="text"
                value={formState.empresa}
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Cargo
              <input
                className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400"
                name="cargo"
                onChange={(event) => setFormState((current) => ({ ...current, cargo: event.target.value }))}
                type="text"
                value={formState.cargo}
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Telefone
              <input
                className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400"
                name="telefone"
                onChange={(event) => setFormState((current) => ({ ...current, telefone: event.target.value }))}
                type="text"
                value={formState.telefone}
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Observações
              <textarea
                className="min-h-32 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400"
                name="observacoes"
                onChange={(event) => setFormState((current) => ({ ...current, observacoes: event.target.value }))}
                value={formState.observacoes}
              />
            </label>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
              <input
                checked={formState.aceitaComunicacoes}
                className="h-4 w-4"
                onChange={(event) => setFormState((current) => ({ ...current, aceitaComunicacoes: event.target.checked }))}
                type="checkbox"
              />
              Aceito receber comunicações
            </label>

            <label className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
              <input
                checked={formState.atualizacoesTeste}
                className="h-4 w-4"
                onChange={(event) => setFormState((current) => ({ ...current, atualizacoesTeste: event.target.checked }))}
                type="checkbox"
              />
              Quero receber atualizações do teste
            </label>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800" type="submit">
              Enviar
            </button>
            <button className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300" onClick={handleClear} type="button">
              Limpar
            </button>
          </div>
        </form>

        <aside className="grid gap-6">
          <section className="rounded-4xl border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_18px_70px_rgba(15,23,42,0.18)]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Resumo</p>
            <div className="mt-6 space-y-4">
              {[
                ["Campos", "6 entradas principais"],
                ["Validação", "Estados vazios e preenchidos"],
                ["Objetivo", "Fluxo de envio e revisão"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-300">{label}</p>
                  <p className="mt-1 text-lg font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-4xl border border-slate-200 bg-white p-8 shadow-[0_18px_70px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Checklist</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
              <li className="rounded-2xl bg-slate-50 px-4 py-3">Tab order previsível.</li>
              <li className="rounded-2xl bg-slate-50 px-4 py-3">Foco claro nos inputs.</li>
              <li className="rounded-2xl bg-slate-50 px-4 py-3">Botões simples de localizar.</li>
              <li className="rounded-2xl bg-slate-50 px-4 py-3">Área de texto maior para digitação longa.</li>
            </ul>
          </section>
        </aside>
      </section>
    </main>
  );
}
