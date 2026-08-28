import React, { useState, useEffect, useId } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { Container } from '../components/core/Container';
import { NavigationBar } from '../components/navigation/NavigationBar';
import { Footer } from '../components/footer/Footer';

interface FormData {
  fullName: string;
  email: string;
  discipline: string;
  motivation: string;
  phone: string;
  portfolio: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  discipline?: string;
  motivation?: string;
  phone?: string;
  portfolio?: string;
}

const DISCIPLINES = [
  { id: 'agent-development', label: '01 · Agent Development (Autonomous Systems & AI Infrastructure)' },
  { id: 'design', label: '02 · Design (Design Systems & Interface Architecture)' },
  { id: 'product', label: '03 · Product (Technical Strategy & Roadmap Execution)' },
  { id: 'sales-marketing', label: '04 · Sales & Marketing (Global Distribution & Enterprise Growth)' },
];

export const ApplyPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const nameId = useId();
  const emailId = useId();
  const disciplineId = useId();
  const motivationId = useId();
  const phoneId = useId();
  const portfolioId = useId();

  const queryDiscipline = searchParams.get('discipline') || '';
  const initialMatchedDiscipline = DISCIPLINES.find(
    (d) => d.id.toLowerCase() === queryDiscipline.toLowerCase()
  )?.id || '';

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    discipline: initialMatchedDiscipline,
    motivation: '',
    phone: '',
    portfolio: '',
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [serverErrorMessage, setServerErrorMessage] = useState<string>('');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Validation function
  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full Name is required.';
        if (value.trim().length < 2) return 'Please enter your full name (minimum 2 characters).';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Email address is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid email address.';
        }
        return undefined;
      case 'discipline':
        if (!value) return 'Please select your target discipline.';
        return undefined;
      case 'motivation':
        if (!value.trim()) return 'Please explain why you want to join YESA.';
        if (value.trim().length < 20) {
          return 'Please provide a bit more detail (minimum 20 characters).';
        }
        if (value.length > 500) {
          return 'Statement cannot exceed 500 characters.';
        }
        return undefined;
      case 'portfolio':
        if (value.trim() && !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i.test(value.trim())) {
          return 'Please enter a valid URL (e.g. https://github.com/yourhandle).';
        }
        return undefined;
      default:
        return undefined;
    }
  };

  const validateAll = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (['fullName', 'email', 'discipline', 'motivation', 'portfolio'] as Array<keyof FormData>).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerErrorMessage('');

    // Mark all required fields as touched
    setTouched({
      fullName: true,
      email: true,
      discipline: true,
      motivation: true,
      portfolio: true,
    });

    if (!validateAll()) {
      return;
    }

    setIsSubmitting(true);

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/YOUR_FORM_ID';

    try {
      // If the endpoint is the placeholder, provide a seamless simulated submission for local preview
      if (endpoint.includes('YOUR_FORM_ID')) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSubmitStatus('success');
        setIsSubmitting(false);
        return;
      }

      // Real Formspree submission via AJAX (Accept: application/json)
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          discipline: formData.discipline,
          motivation: formData.motivation,
          phone: formData.phone || 'N/A',
          portfolio: formData.portfolio || 'N/A',
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
      } else {
        const data = await response.json().catch(() => null);
        const message =
          data?.errors?.map((err: { message: string }) => err.message).join(', ') ||
          'Submission encountered an issue. Please try again or contact admissions@yesa.ai directly.';
        setServerErrorMessage(message);
        setSubmitStatus('error');
      }
    } catch {
      setServerErrorMessage(
        'Network error. Please verify your connection and try again or email admissions@yesa.ai directly.'
      );
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedDisciplineObj = DISCIPLINES.find((d) => d.id === formData.discipline);

  return (
    <div className="min-h-screen bg-[#090D0F] text-white flex flex-col justify-between selection:bg-[rgba(0,157,158,0.15)] selection:text-[#9AEDFC] relative overflow-hidden">
      <NavigationBar onOpenApply={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

      <main className="flex-1 pt-32 pb-24 md:pt-40 md:pb-32 relative z-10">
        <Container size="full" className="max-w-4xl px-6 sm:px-10 lg:px-12 w-full">
          {/* Back to Overview Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#8A8A8A] hover:text-[#9AEDFC] transition-colors focus-visible:outline-2 focus-visible:outline-[#009D9E] focus-visible:outline-offset-2 rounded"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Program Overview</span>
            </Link>
          </div>

          <AnimatePresence mode="wait">
            {submitStatus === 'success' ? (
              /* Success Confirmation Screen */
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#131719] border border-[#009D9E]/40 shadow-[0_8px_40px_rgba(0,157,158,0.15)] text-center relative overflow-hidden"
              >
                {/* Ambient Radial Aura */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,157,158,0.15),transparent_70%)] pointer-events-none" />

                {/* Status Indicator Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#009D9E]/15 border border-[#009D9E] text-[#9AEDFC] mx-auto flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,157,158,0.4)]">
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#009D9E]" />
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#009D9E] animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009D9E] font-semibold">
                    INTAKE PROTOCOL INITIATED
                  </span>
                </div>

                <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
                  Application Received.
                </h1>

                <p className="text-sm sm:text-base text-[#8A8A8A] font-light max-w-xl mx-auto leading-relaxed mb-8">
                  Thank you, <span className="text-white font-medium">{formData.fullName}</span>. Your submission for the{' '}
                  <span className="text-[#9AEDFC] font-medium">{selectedDisciplineObj?.label || 'chosen'}</span> discipline
                  has entered the candidate evaluation queue.
                </p>

                {/* Application Metadata Card */}
                <div className="max-w-md mx-auto p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left mb-10 font-mono text-xs space-y-2.5">
                  <div className="flex justify-between border-b border-white/[0.04] pb-2">
                    <span className="text-[#8A8A8A]">CANDIDATE</span>
                    <span className="text-white font-semibold">{formData.fullName}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/[0.04] pb-2">
                    <span className="text-[#8A8A8A]">EMAIL</span>
                    <span className="text-white">{formData.email}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/[0.04] pb-2">
                    <span className="text-[#8A8A8A]">DISCIPLINE</span>
                    <span className="text-[#009D9E] uppercase font-semibold">
                      {formData.discipline.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-[#8A8A8A]">EVALUATION STATUS</span>
                    <span className="text-[#9AEDFC] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9AEDFC] animate-ping" />
                      QUEUE · PENDING REVIEW
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => navigate('/')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-[#009D9E] hover:bg-[#9AEDFC] text-[#090D0F] transition-all shadow-[0_0_20px_rgba(0,157,158,0.3)] cursor-pointer"
                  >
                    <span>Return to Homepage</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      setSubmitStatus('idle');
                      setFormData({
                        fullName: '',
                        email: '',
                        discipline: '',
                        motivation: '',
                        phone: '',
                        portfolio: '',
                      });
                      setTouched({});
                      setErrors({});
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs uppercase tracking-wider text-[#8A8A8A] hover:text-white border border-white/[0.08] hover:bg-white/[0.03] transition-all cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Application Form View */
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-10"
              >
                {/* Header Block */}
                <div className="space-y-4 text-left">
                  <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#009D9E] animate-pulse" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009D9E] font-semibold">
                      STAGE 01 · APPLICATION INTAKE PROTOCOL
                    </span>
                  </div>

                  <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[0.95] [overflow-wrap:normal] [word-break:keep-all]">
                    Apply to YESA.
                  </h1>

                  <p className="text-base sm:text-lg text-[#8A8A8A] font-light max-w-2xl leading-relaxed">
                    Zero tuition barrier. Define your discipline and initiate your gradual development from
                    observation to world-class leadership.
                  </p>

                  {/* Highlights row */}
                  <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-[#8A8A8A]">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#009D9E]" />
                      100% Free Incubator
                    </span>
                    <span className="text-white/20">·</span>
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-[#009D9E]" />
                      Merit-Based Rolling Admissions
                    </span>
                    <span className="text-white/20">·</span>
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#009D9E]" />
                      Personalized 1-on-1 Guidance
                    </span>
                  </div>
                </div>

                {/* Main Form Container */}
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="p-8 sm:p-10 md:p-12 rounded-3xl bg-[#131719] border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)] space-y-8 relative"
                >
                  {/* Architectural Corner Accent */}
                  <div className="absolute top-5 right-5 w-6 h-6 border-t border-r border-[#009D9E]/40 pointer-events-none" />

                  {/* Server-Side / Network Error Alert */}
                  {serverErrorMessage && (
                    <div
                      role="alert"
                      className="p-4 rounded-xl bg-[#32161A] border border-[#FF4D4D]/40 text-[#FF8080] flex items-start gap-3 font-mono text-xs"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{serverErrorMessage}</span>
                    </div>
                  )}

                  {/* Field 1: Full Name */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label
                        htmlFor={nameId}
                        className="block font-mono text-xs uppercase tracking-wider text-white font-semibold"
                      >
                        Full Name <span className="text-[#009D9E]">*</span>
                      </label>
                      {touched.fullName && errors.fullName && (
                        <span id={`${nameId}-error`} className="font-mono text-[11px] text-[#FF8080]">
                          {errors.fullName}
                        </span>
                      )}
                    </div>
                    <input
                      id={nameId}
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(touched.fullName && errors.fullName)}
                      aria-describedby={touched.fullName && errors.fullName ? `${nameId}-error` : undefined}
                      placeholder="e.g. Elena Rostova"
                      className={`w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#090D0F] border text-white placeholder:text-white/20 font-sans text-sm focus:outline-none transition-all ${
                        touched.fullName && errors.fullName
                          ? 'border-[#FF4D4D] focus:border-[#FF4D4D] focus:ring-1 focus:ring-[#FF4D4D]'
                          : 'border-white/[0.08] focus:border-[#009D9E] focus:ring-1 focus:ring-[#009D9E]'
                      }`}
                    />
                  </div>

                  {/* Field 2: Email Address */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label
                        htmlFor={emailId}
                        className="block font-mono text-xs uppercase tracking-wider text-white font-semibold"
                      >
                        Email Address <span className="text-[#009D9E]">*</span>
                      </label>
                      {touched.email && errors.email && (
                        <span id={`${emailId}-error`} className="font-mono text-[11px] text-[#FF8080]">
                          {errors.email}
                        </span>
                      )}
                    </div>
                    <input
                      id={emailId}
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(touched.email && errors.email)}
                      aria-describedby={touched.email && errors.email ? `${emailId}-error` : undefined}
                      placeholder="elena@example.com"
                      className={`w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#090D0F] border text-white placeholder:text-white/20 font-sans text-sm focus:outline-none transition-all ${
                        touched.email && errors.email
                          ? 'border-[#FF4D4D] focus:border-[#FF4D4D] focus:ring-1 focus:ring-[#FF4D4D]'
                          : 'border-white/[0.08] focus:border-[#009D9E] focus:ring-1 focus:ring-[#009D9E]'
                      }`}
                    />
                  </div>

                  {/* Field 3: Target Discipline */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label
                        htmlFor={disciplineId}
                        className="block font-mono text-xs uppercase tracking-wider text-white font-semibold"
                      >
                        Target Discipline <span className="text-[#009D9E]">*</span>
                      </label>
                      {touched.discipline && errors.discipline && (
                        <span id={`${disciplineId}-error`} className="font-mono text-[11px] text-[#FF8080]">
                          {errors.discipline}
                        </span>
                      )}
                    </div>
                    <div className="relative">
                      <select
                        id={disciplineId}
                        name="discipline"
                        required
                        value={formData.discipline}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(touched.discipline && errors.discipline)}
                        aria-describedby={
                          touched.discipline && errors.discipline ? `${disciplineId}-error` : undefined
                        }
                        className={`w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#090D0F] border text-white font-sans text-sm appearance-none focus:outline-none transition-all cursor-pointer ${
                          formData.discipline ? 'text-white' : 'text-white/40'
                        } ${
                          touched.discipline && errors.discipline
                            ? 'border-[#FF4D4D] focus:border-[#FF4D4D] focus:ring-1 focus:ring-[#FF4D4D]'
                            : 'border-white/[0.08] focus:border-[#009D9E] focus:ring-1 focus:ring-[#009D9E]'
                        }`}
                      >
                        <option value="" disabled className="bg-[#090D0F] text-[#8A8A8A]">
                          Select your target discipline track...
                        </option>
                        {DISCIPLINES.map((d) => (
                          <option key={d.id} value={d.id} className="bg-[#131719] text-white py-2">
                            {d.label}
                          </option>
                        ))}
                      </select>
                      {/* Dropdown Arrow */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#009D9E]">
                        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Field 4: Why do you want to join YESA? */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label
                        htmlFor={motivationId}
                        className="block font-mono text-xs uppercase tracking-wider text-white font-semibold"
                      >
                        Why do you want to join YESA? <span className="text-[#009D9E]">*</span>
                      </label>
                      <span className="font-mono text-[11px] text-[#8A8A8A]">
                        <span className={formData.motivation.length > 500 ? 'text-[#FF8080]' : 'text-white/60'}>
                          {formData.motivation.length}
                        </span>
                        /500
                      </span>
                    </div>
                    {touched.motivation && errors.motivation && (
                      <span id={`${motivationId}-error`} className="font-mono text-[11px] text-[#FF8080] block">
                        {errors.motivation}
                      </span>
                    )}
                    <textarea
                      id={motivationId}
                      name="motivation"
                      required
                      rows={4}
                      maxLength={500}
                      value={formData.motivation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(touched.motivation && errors.motivation)}
                      aria-describedby={
                        touched.motivation && errors.motivation ? `${motivationId}-error` : undefined
                      }
                      placeholder="Share your goals, current technical background, and what you hope to build or master during your YESA journey..."
                      className={`w-full p-4 rounded-xl bg-[#090D0F] border text-white placeholder:text-white/20 font-sans text-sm focus:outline-none transition-all resize-none ${
                        touched.motivation && errors.motivation
                          ? 'border-[#FF4D4D] focus:border-[#FF4D4D] focus:ring-1 focus:ring-[#FF4D4D]'
                          : 'border-white/[0.08] focus:border-[#009D9E] focus:ring-1 focus:ring-[#009D9E]'
                      }`}
                    />
                  </div>

                  {/* Optional Fields 2-Column Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* Field 5: Phone Number (Optional) */}
                    <div className="space-y-2">
                      <label
                        htmlFor={phoneId}
                        className="block font-mono text-xs uppercase tracking-wider text-white font-semibold"
                      >
                        Phone Number <span className="text-white/40 font-normal">(OPTIONAL)</span>
                      </label>
                      <input
                        id={phoneId}
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#090D0F] border border-white/[0.08] text-white placeholder:text-white/20 font-sans text-sm focus:outline-none focus:border-[#009D9E] focus:ring-1 focus:ring-[#009D9E] transition-all"
                      />
                    </div>

                    {/* Field 6: Portfolio / GitHub / LinkedIn (Optional) */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label
                          htmlFor={portfolioId}
                          className="block font-mono text-xs uppercase tracking-wider text-white font-semibold"
                        >
                          Portfolio / GitHub / LinkedIn <span className="text-white/40 font-normal">(OPTIONAL)</span>
                        </label>
                        {touched.portfolio && errors.portfolio && (
                          <span id={`${portfolioId}-error`} className="font-mono text-[11px] text-[#FF8080]">
                            {errors.portfolio}
                          </span>
                        )}
                      </div>
                      <input
                        id={portfolioId}
                        name="portfolio"
                        type="url"
                        value={formData.portfolio}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(touched.portfolio && errors.portfolio)}
                        aria-describedby={
                          touched.portfolio && errors.portfolio ? `${portfolioId}-error` : undefined
                        }
                        placeholder="https://github.com/username"
                        className={`w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#090D0F] border text-white placeholder:text-white/20 font-sans text-sm focus:outline-none transition-all ${
                          touched.portfolio && errors.portfolio
                            ? 'border-[#FF4D4D] focus:border-[#FF4D4D] focus:ring-1 focus:ring-[#FF4D4D]'
                            : 'border-white/[0.08] focus:border-[#009D9E] focus:ring-1 focus:ring-[#009D9E]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Submission Action Area */}
                  <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6">
                    <span className="font-mono text-xs text-[#8A8A8A] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#009D9E]" />
                      Admissions review is 100% merit-based
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-[#090D0F] bg-[#009D9E] hover:bg-[#9AEDFC] disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-98 transition-all duration-200 cursor-pointer shadow-[0_0_25px_rgba(0,157,158,0.4)]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#090D0F]" />
                          <span>Submitting Application...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </main>

      <Footer />
    </div>
  );
};
