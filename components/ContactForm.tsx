import React, { useState } from 'react';
import { Loader2, CheckCircle2, UserCircle2, PhoneCall } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const WEB3FORMS_ACCESS_KEY = '335175b6-c1a7-429e-b55c-d31c1e3e9e4b';

const SEGMENT_OPTIONS = [
  'Pizzarias',
  'Hamburguerias',
  'Sushi / Japonesa',
  'Açaí e Sobremesas',
  'Self-service / Marmita',
  'Outro',
];

const REVENUE_OPTIONS = [
  'Até R$ 10.000/mês',
  'R$ 10.001 a R$ 30.000/mês',
  'R$ 30.001 a R$ 50.000/mês',
  'R$ 50.001 a R$ 100.000/mês',
  'Acima de R$ 100.000/mês',
];

interface ContactFormProps {
  className?: string;
  variant?: 'modal' | 'hero';
}

const ContactForm: React.FC<ContactFormProps> = ({ className = '', variant = 'modal' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [segment, setSegment] = useState('');
  const [revenue, setRevenue] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const payload: Record<string, string> = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `Novo contato pelo site: ${name}`,
        name,
        email,
        phone,
        botcheck: '',
      };

      if (variant === 'hero') {
        payload.empresa = company;
        payload.segmento = segment;
        payload.faturamento = revenue;
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data.success) throw new Error('Falha no envio');
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-cronos-black/60 border border-cronos-white/20 rounded-md px-4 py-3 text-cronos-white placeholder:text-cronos-white/40 font-sans focus:outline-none focus:border-cronos-lime transition-colors interactive';

  const SuccessMessage = (
    <div className="flex flex-col items-center text-center py-4">
      <CheckCircle2 className="text-cronos-lime mb-3" size={36} />
      <p className="text-cronos-white font-sans font-bold">
        Agradecemos o contato e em breve será respondido.
      </p>
    </div>
  );

  const ErrorMessage = status === 'error' && (
    <p className="text-red-400 text-sm font-sans">
      Não foi possível enviar agora. Tente novamente ou fale pelo{' '}
      <a
        href="https://wa.me/5561985928791"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        WhatsApp
      </a>
      .
    </p>
  );

  const honeypot = (
    <input
      type="checkbox"
      name="botcheck"
      className="hidden"
      style={{ display: 'none' }}
      tabIndex={-1}
      autoComplete="off"
    />
  );

  if (variant === 'hero') {
    if (status === 'success') {
      return (
        <div
          className={`w-full rounded-2xl border border-cronos-white/10 bg-cronos-black/80 backdrop-blur-sm p-8 md:p-10 ${className}`}
        >
          {SuccessMessage}
        </div>
      );
    }

    return (
      <div
        className={`w-full rounded-2xl border border-cronos-white/10 bg-cronos-black/80 backdrop-blur-sm p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-left ${className}`}
      >
        {/* Left column: title + steps */}
        <div className="flex flex-col justify-center">
          <h3 className="font-header text-2xl md:text-3xl uppercase text-cronos-white leading-tight mb-6">
            Preencha para receber contato do nosso especialista
          </h3>

          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-[2px] bg-cronos-orange" />
                <span className="text-cronos-orange text-xs font-bold uppercase tracking-widest font-sans">
                  Passo 1
                </span>
              </div>
              <div className="flex gap-3">
                <div className="shrink-0 w-9 h-9 rounded-md bg-cronos-lime/15 flex items-center justify-center">
                  <UserCircle2 className="text-cronos-lime" size={20} />
                </div>
                <div>
                  <p className="text-cronos-white font-bold font-sans mb-1">Complete o formulário</p>
                  <p className="text-cronos-white/60 text-sm font-sans leading-relaxed">
                    Todos os dados aqui preenchidos são para apenas contato direto, suas informações estão seguras.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-[2px] bg-cronos-orange" />
                <span className="text-cronos-orange text-xs font-bold uppercase tracking-widest font-sans">
                  Passo 2
                </span>
              </div>
              <div className="flex gap-3">
                <div className="shrink-0 w-9 h-9 rounded-md bg-cronos-lime/15 flex items-center justify-center">
                  <PhoneCall className="text-cronos-lime" size={20} />
                </div>
                <div>
                  <p className="text-cronos-white font-bold font-sans mb-1">Receba uma mensagem personalizada</p>
                  <p className="text-cronos-white/60 text-sm font-sans leading-relaxed">
                    Em até 1 hora você receberá uma mensagem de nosso especialista, fique de olho!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 justify-center">
          {honeypot}
          <input
            type="text"
            required
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
          <input
            type="email"
            required
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm pointer-events-none">🇧🇷</span>
            <input
              type="tel"
              required
              placeholder="Telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`${inputClass} pl-10`}
            />
          </div>
          <input
            type="text"
            required
            placeholder="Nome da empresa"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={inputClass}
          />

          <label className="text-cronos-white/60 text-xs font-sans -mb-1">Selecionar segmento</label>
          <select
            required
            value={segment}
            onChange={(e) => setSegment(e.target.value)}
            className={inputClass}
          >
            <option value="" disabled>
              Selecionar
            </option>
            {SEGMENT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          <label className="text-cronos-white/60 text-xs font-sans -mb-1">Coloque seu faturamento atual</label>
          <select
            required
            value={revenue}
            onChange={(e) => setRevenue(e.target.value)}
            className={inputClass}
          >
            <option value="" disabled>
              Selecionar
            </option>
            {REVENUE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          {ErrorMessage}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="mt-2 flex items-center justify-center gap-2 px-8 py-4 border border-cronos-lime bg-cronos-lime text-cronos-black uppercase font-header tracking-widest hover:bg-transparent hover:text-cronos-lime transition-all duration-300 interactive disabled:opacity-60"
          >
            {status === 'loading' && <Loader2 className="animate-spin" size={18} />}
            {status === 'loading' ? 'Enviando...' : 'Receber mais informações'}
          </button>
        </form>
      </div>
    );
  }

  // Default "modal" variant — compact 3-field version used in the popup CTA
  if (status === 'success') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {SuccessMessage}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3 w-full ${className}`}>
      {honeypot}
      <input
        type="text"
        required
        placeholder="Seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={inputClass}
      />
      <input
        type="tel"
        required
        placeholder="WhatsApp"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={inputClass}
      />
      <input
        type="email"
        required
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={inputClass}
      />

      {ErrorMessage}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="flex items-center justify-center gap-2 px-8 py-4 border border-cronos-lime bg-cronos-lime text-cronos-black uppercase font-header tracking-widest hover:bg-transparent hover:text-cronos-lime transition-all duration-300 interactive disabled:opacity-60"
      >
        {status === 'loading' && <Loader2 className="animate-spin" size={18} />}
        {status === 'loading' ? 'Enviando...' : 'QUERO RECUPERAR MINHA MARGEM DE LUCRO'}
      </button>
    </form>
  );
};

export default ContactForm;
