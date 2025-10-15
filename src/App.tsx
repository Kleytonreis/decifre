import { useState, useEffect } from 'react';
import {
  Eye,
  Brain,
  Target,
  Users,
  TrendingUp,
  Shield,
  CheckCircle2,
  XCircle,
  Clock,
  Star,
  Lock,
  Zap,
  Gift,
  Award,
  ArrowRight
} from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToCTA = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-gradient-to-r from-blue-800 to-blue-900 shadow-lg z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Eye className="w-8 h-8 text-amber-400" />
            <span className="text-white font-bold text-xl">Decifre Pessoas em 30 Dias</span>
          </div>
          <button
            onClick={scrollToCTA}
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            QUERO ME TORNAR UM PERITO AGORA!
          </button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Pare de Ser Enganado! Descubra os Segredos Que Fazem Você Ler Pessoas Como um Livro Aberto em Apenas 30 Dias
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Método Científico Simples Revela Como Decifrar a Linguagem Corporal e Ter Vantagem Em Qualquer Situação Social, Profissional ou Amorosa - Mesmo Que Você Seja Um Iniciante Completo
            </p>
            <button
              onClick={scrollToCTA}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-5 px-10 rounded-lg text-xl shadow-2xl transform hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
            >
              QUERO ME TORNAR UM PERITO AGORA!
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
              Você Já Se Sentiu Assim?
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-red-600 mb-8">Os Problemas Que Você Enfrenta:</h3>
                {[
                  'Sentiu que estava perdendo informações importantes nas conversas?',
                  'Foi pego de surpresa por uma decisão que poderia ter previsto?',
                  'Duvidou se alguém estava sendo sincero com você?',
                  'Perdeu oportunidades por não entender os sinais não-verbais?'
                ].map((problem, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-red-50 p-4 rounded-lg">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-800">{problem}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-green-600 mb-8">A Transformação Que Te Espera:</h3>
                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <p className="text-xl font-bold text-gray-900 mb-4">
                    A Ciência Revela: 93% da Comunicação é Não-Verbal
                  </p>
                  <p className="text-gray-700 mb-4">
                    Nos próximos 30 dias, você vai dominar a habilidade que vai transformar completamente sua forma de se relacionar:
                  </p>
                </div>
                {[
                  'Identificar mentiras com 85% mais precisão',
                  'Aumentar sua confiança em reuniões e encontros',
                  'Fechar mais negócios entendendo as objeções reais',
                  'Criar conexões genuínas com familiares e amigos'
                ].map((solution, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-green-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-800">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
              O Método de 30 Dias Que Já Transformou Mais de 2.137 Pessoas
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">
                  Fundamentos (Dias 1-7)
                </h3>
                <p className="text-xl text-blue-600 font-semibold text-center mb-6">
                  Ajuste Sua Antena Perceptual
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Leitura de pés e pernas (os indicadores mais honestos)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Decodificação da postura e torso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Análise de gestos e expressões faciais</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">
                  Decodificação (Dias 8-21)
                </h3>
                <p className="text-xl text-amber-600 font-semibold text-center mb-6">
                  Conecte os Pontos das Emoções
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Identificação de conglomerados de sinais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Microexpressões faciais universais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Sinais de confiança, interesse e atração</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">
                  Maestria (Dias 22-30)
                </h3>
                <p className="text-xl text-green-600 font-semibold text-center mb-6">
                  Aplicação no Mundo Real
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Técnica de espelhamento avançado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Análise em tempo real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Adaptação da sua própria linguagem</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-500 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
              E Apenas Hoje, Você Leva 3 Bônus Exclusivos
            </h2>
            <p className="text-2xl text-center text-white mb-12">(Por Tempo Limitado!)</p>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl flex items-center gap-4">
                <Zap className="w-10 h-10 text-white flex-shrink-0" />
                <span className="text-white text-lg font-semibold">Acesso imediato após o pagamento</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl flex items-center gap-4">
                <Shield className="w-10 h-10 text-white flex-shrink-0" />
                <span className="text-white text-lg font-semibold">7 dias de garantia incondicional</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl flex items-center gap-4">
                <Users className="w-10 h-10 text-white flex-shrink-0" />
                <span className="text-white text-lg font-semibold">Suporte prioritário</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl flex items-center gap-4">
                <TrendingUp className="w-10 h-10 text-white flex-shrink-0" />
                <span className="text-white text-lg font-semibold">Atualizações gratuitas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
              Veja O Que Nossos Alunos Estão Falando:
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-4 italic">
                  "Em 3 semanas já consegui uma promoção! Identifiquei que meu chefe estava mais receptivo e fiz a proposta na hora certa!"
                </p>
                <p className="font-bold text-gray-900">- Carlos, 32 anos</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-4 italic">
                  "Meus relacionamentos melhoraram 100%. Agora entendo o que meu marido realmente sente, mesmo quando ele não fala!"
                </p>
                <p className="font-bold text-gray-900">- Ana, 28 anos</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-4 italic">
                  "Nunca imaginei que pudesse ler pessoas tão bem. Agora consigo antecipar objeções nas vendas e fechar muito mais negócios!"
                </p>
                <p className="font-bold text-gray-900">- Roberto, 45 anos</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-4 italic">
                  "Como terapeuta, esse método transformou minha prática. Consigo identificar emoções ocultas e ajudar meus pacientes de forma mais eficaz!"
                </p>
                <p className="font-bold text-gray-900">- Juliana, 38 anos</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <span className="text-lg font-semibold text-gray-700">Mais de 2.137 alunos transformados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <span className="text-lg font-semibold text-gray-700">97% de satisfação</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-600" />
                <span className="text-lg font-semibold text-gray-700">Garantia de 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="oferta" className="py-20 bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Investimento Que Se Paga na Primeira Semana
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border-4 border-amber-400 shadow-2xl">
              <div className="text-center mb-8">
                <p className="text-2xl mb-2 line-through text-blue-200">De R$ 99,00</p>
                <p className="text-6xl font-bold text-amber-400 mb-2">R$ 27,99</p>
                <p className="text-xl text-blue-100">ou 12x de R$ 2,33</p>
              </div>

              <div className="bg-white text-gray-900 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center">O Que Você Recebe HOJE:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">Ebook "Domínio Corporal"</span>
                      <p className="text-gray-600">Método completo de 30 dias</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">Bônus 1: Guia de Bolso do Perito</span>
                      <p className="text-gray-600">Valor R$ 97</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">Bônus 2: Análise de Casos Reais</span>
                      <p className="text-gray-600">Valor R$ 147</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">Bônus 3: Comunidade VIP</span>
                      <p className="text-gray-600">Valor R$ 197</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">Acesso Imediato</span>
                      <p className="text-gray-600">Comece agora mesmo</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-green-500 rounded-2xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <Shield className="w-12 h-12 text-white flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Garantia Blindada de 7 Dias</h3>
                    <p className="text-lg">
                      Teste por 7 Dias Sem Risco! Se você não amar o método e não ver resultados, devolvemos cada centavo. Sem perguntas, sem burocracia.
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => window.open('https://pay.kiwify.com.br/RBoVXYH', '_blank')}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-6 px-10 rounded-xl text-2xl shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3 mb-6"
              >
                <Lock className="w-8 h-8" />
                QUERO ACESSO IMEDIATO!
                <ArrowRight className="w-8 h-8" />
              </button>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div className="flex flex-col items-center">
                  <Zap className="w-6 h-6 mb-2" />
                  <span>Acesso imediato após o pagamento</span>
                </div>
                <div className="flex flex-col items-center">
                  <Shield className="w-6 h-6 mb-2" />
                  <span>7 dias de garantia incondicional</span>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="w-6 h-6 mb-2" />
                  <span>Suporte prioritário</span>
                </div>
                <div className="flex flex-col items-center">
                  <TrendingUp className="w-6 h-6 mb-2" />
                  <span>Atualizações gratuitas</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-8 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                <span>Pagamento 100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Site Protegido</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Dados Criptografados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comece Agora a Ler Pessoas Como um Livro Aberto!
            </h2>
            <p className="text-2xl mb-8">
              Mais de 2.137 pessoas já transformaram suas vidas. Chegou sua vez!
            </p>
            <button
              onClick={() => window.open('https://pay.kiwify.com.br/RBoVXYH', '_blank')}
              className="bg-white text-amber-600 hover:bg-gray-100 font-bold py-6 px-12 rounded-xl text-2xl shadow-2xl transform hover:scale-105 transition-all duration-200 inline-flex items-center gap-3"
            >
              <Lock className="w-8 h-8" />
              QUERO ACESSO IMEDIATO!
              <ArrowRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Eye className="w-8 h-8 text-amber-400" />
              <span className="text-white font-bold text-xl">Decifre Pessoas em 30 Dias</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Contato</a>
            </div>
            <p className="mb-4">
              Email: suporte@decifrepessoas.com
            </p>
            <p className="text-sm">
              © 2025 Domínio Corporal. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
