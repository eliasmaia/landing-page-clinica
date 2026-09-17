import Image from 'next/image';
import type { Metadata } from 'next'
import ServicoCard from '@/components/ServicoCard';

export const metadata: Metadata = {
  title: 'Clínica Vida & Saúde | Atendimento Médico em Teresina',
  description: 'Consultas especializadas, exames de precisão e atendimento humanizado',
  openGraph : {
    title: 'Clínica Vida & Saúde',
    description: 'Cuidado médico especializado para você e sua familia em Teresina.',
    url: 'https://clinicavidaesaude.com.br',
    siteName: 'Clínica Vida & Saúde',
    locale: 'pt_BR',
    type: 'website',
  }
}

export default function Home() {
  const numeroWhatsapp = "5586999999999"; 
  const mensagemPadrao = encodeURIComponent("Olá! Gostaria de agendar uma consulta médica na Clínica Vida & Saúde.");
  const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensagemPadrao}`;

  return (
    <main className="min-h-screen bg-slate-50 text-gray-900 font-sans">
      
      {/* header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🩺</span>
            <span className="font-bold text-xl text-blue-900 tracking-tight">Clínica Vida & Saúde</span>
          </div>
          <a
            href={urlWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors text-sm shadow-sm"
          >
            Agendar Consulta
          </a>
        </div>
      </header>

      {/* 2. HERO SECTION with background picture */}
      <section className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80"
          alt="Consultório médico moderno"
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <span className="bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-400/30">
            Atendimento Humanizado & Moderno
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-6 mb-6 leading-tight tracking-tight">
            Cuidado médico especializado para <br className="hidden md:block" />
            <span className="text-blue-400">você e sua família</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Acompanhamento clínico completo, exames de precisão e consultas com profissionais renomados em Teresina.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={urlWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-green-900/30 flex items-center justify-center gap-2"
            >
              <span>💬</span> Falar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-4 rounded-xl text-lg transition-all backdrop-blur-sm"
            >
              Conhecer Serviços
            </a>
          </div>
        </div>
      </section>

      {/* 3. services / specialties with pictures */}
      <section id="servicos" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">Nossas Especialidades</h2>
        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          Oferecemos suporte médico integrado focado em prevenção, exames detalhados e bem-estar.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServicoCard
            imagemUrl="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
            altText="Exame de cardiologia"
            titulo="Cardiologia"
            descricao="Acompanhamento preventivo da saúde do coração, check-ups completos e exames eletrocardiográficos com tecnologia avançada."
          />
          <ServicoCard
            imagemUrl="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80"
            altText="Atendimento neurológico"
            titulo="Neurologia"
            descricao="Diagnóstico e tratamento especializado para dores de cabeça crônicas, distúrbios do sono, tonturas e enxaquecas."
          />
          <ServicoCard
            imagemUrl="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=800&q=80"
            altText="Consulta de clínica geral"
            titulo="Clínica Geral"
            descricao="Consultas de rotina, avaliação minuciosa de exames de laboratório e orientação preventiva contínua."
          />
        </div>
      </section>

      {/* 4. footer */}
      <footer className="bg-slate-900 text-gray-400 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Clínica Vida & Saúde</h3>
            <p className="text-sm text-gray-400">Atendimento de excelência e compromisso com o seu bem-estar.</p>
          </div>
          <div className="md:text-right text-sm">
            <p>📍 Av. Principal do Dirceu, 1000 - Teresina, PI</p>
            <p className="mt-1">📞 (86) 99999-9999</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Clínica Vida & Saúde. Todos os direitos reservados.
        </div>
      </footer>

    </main>
  );
}