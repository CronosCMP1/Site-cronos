import React, { useState } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const WEB3FORMS_ACCESS_KEY = '335175b6-c1a7-429e-b55c-d31c1e3e9e4b';

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Novo contato pelo site: ${name}`,
          name,
          email,
          phone,
          botcheck: '',
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error('Falha no envio');
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <CheckCircle2 className="text-cronos-lime mb-3" size={36} />
        <p className="text-cronos-white font-sans font-bold">
          Agradecemos o contato e em breve será respondido.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3 w-full ${className}`}>
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />
      <input
        type="text"
        required
        placeholder="Seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-cronos-black/60 border border-cronos-white/20 rounded-md px-4 py-3 text-cronos-white placeholder:text-cronos-white/40 font-sans focus:outline-none focus:border-cronos-lime transition-colors interactive"
      />
      <input
        type="tel"
        required
        placeholder="WhatsApp"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="bg-cronos-black/60 border border-cronos-white/20 rounded-md px-4 py-3 text-cronos-white placeholder:text-cronos-white/40 font-sans focus:outline-none focus:border-cronos-lime transition-colors interactive"
      />
      <input
        type="email"
        required
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-cronos-black/60 border border-cronos-white/20 rounded-md px-4 py-3 text-cronos-white placeholder:text-cronos-white/40 font-sans focus:outline-none focus:border-cronos-lime transition-colors interactive"
      />

      {status === 'error' && (
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
      )}

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
