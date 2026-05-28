import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "POC Playwright | Suite genérica",
  description: "Conjunto de páginas genéricas para validar uma prova de conceito com Playwright.",
};

const navigation = [
  { href: "/", label: "Início" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/formularios", label: "Formulários" },
  { href: "/relatorios", label: "Relatórios" },
  { href: "/perfil", label: "Perfil" },
  { href: "/notificacoes", label: "Notificações" },
  { href: "/timeline", label: "Timeline" },
  { href: "/suporte", label: "Suporte" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-950">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
          <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white shadow-sm">POC</span>
              <span className="hidden sm:inline">Playwright Test Suite</span>
            </Link>

            <nav className="flex flex-1 items-center justify-end gap-2 overflow-x-auto text-sm font-medium text-slate-600">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2 transition hover:border-slate-300 hover:text-slate-950">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <div className="flex-1 pt-20">{children}</div>
      </body>
    </html>
  );
}
