const services = [
  {
    title: "બીમાર અને ઘાયલ ગોવંશની સારવાર",
    text: "એનિમલ હોસ્પિટલમાં પ્રાથમિક તપાસ, દવા અને સતત દેખરેખ.",
  },
  {
    title: "નિરાધાર અને અપંગ ગાયો માટે આશ્રય",
    text: "ગ્રામ્ય વિસ્તારમાંથી બચાવેલ ગાયો માટે સુરક્ષિત નિવાસ, ચારો અને પાણી.",
  },
  {
    title: "ગૌસેવા અને એનિમલ રેસ્ક્યુ",
    text: "રસ્તા પરના પશુઓને રેસ્ક્યુ કરીને માનવિય સંભાળ.",
  },
];

const donationWays = [
  {
    title: "બેંક ટ્રાન્સફર",
    lines: [
      "The Kaira District Co-op. Bank Ltd.",
      "A/C No: 902013101000444",
      "IFSC: ICIC00KAIRA",
    ],
  },
  {
    title: "QR / UPI દ્વારા દાન",
    lines: [
      "QR કોડ સ્કેન કરીને સીધું દાન કરો.",
      "પોસ્ટર મુજબની માહિતીનો ઉપયોગ કરો.",
    ],
  },
];

const qrPattern = [
  1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1,
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(247,162,59,0.45)_0%,_rgba(255,255,255,0)_70%)] blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(197,82,47,0.2)_0%,_rgba(255,255,255,0)_70%)] blur-2xl" />

        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-center lg:text-left">
            <p className="reveal mx-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/70 bg-surface-muted px-4 py-2 text-sm font-medium text-[#5a2b1c] shadow-sm lg:mx-0">
              શ્રી પ્રસ્થાન ચેરિટેબલ ટ્રસ્ટ દ્વારા સંચાલિત
            </p>
            <h1 className="reveal reveal-delay-1 font-display text-4xl font-semibold leading-tight text-[#2b1a12] sm:text-5xl lg:text-6xl">
              શ્રી કેશવ એનિમલ હોસ્પિટલ અને ગૌ સેવા મંદિર
            </h1>
            <p className="reveal reveal-delay-2 mx-auto max-w-2xl text-lg leading-relaxed text-[#4c2b20] lg:mx-0">
              નિરાધાર, દિવ્યાંગ અને બીમાર ગોવંશ માટે ગામડાં સુધી પહોંચતી ગૌસેવા.
              આપનું દાન ચારો, દવા અને સુરક્ષિત આશ્રય માટે સીધું ઉપયોગ થાય છે.
            </p>
            <div className="reveal reveal-delay-3 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#donate"
                className="glow-ring inline-flex w-full items-center justify-center rounded-full bg-[#c5522f] px-7 py-3 text-base font-semibold text-white shadow-lg shadow-[#c5522f]/30 transition hover:-translate-y-0.5 sm:w-auto"
              >
                દાન કરો
              </a>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#c5522f]/30 bg-transparent px-7 py-3 text-base font-semibold text-[#5a2b1c] shadow-sm transition hover:-translate-y-0.5 sm:w-auto"
              >
                સંપર્ક કરો
              </a>
            </div>
            <div className="reveal reveal-delay-3 flex flex-wrap justify-center gap-3 text-sm font-medium text-[#5a2b1c] lg:justify-start">
              <span className="rounded-full border border-white/70 bg-transparent px-4 py-2">
                રજી. નં. GUJ/2002 મહિસાગર
              </span>
              <span className="rounded-full border border-white/70 bg-transparent px-4 py-2">
                ટ્રસ્ટ નં. F/2002 મહિસાગર
              </span>
            </div>
          </div>

          <div className="section-card reveal reveal-delay-2 flex flex-col gap-6 rounded-3xl p-6 shadow-xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c5522f]">
                  દાન માટે માહિતી
                </p>
                <h2 className="font-display text-2xl font-semibold text-[#2b1a12]">
                  ગ્રામ્ય ગૌસેવાની દીવટો બનીએ
                </h2>
              </div>
              <div className="float-soft flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7a23b]/20 text-xl font-bold text-[#c5522f]">
                ગૌ
              </div>
            </div>

            <div className="rounded-2xl bg-surface-strong p-4 shadow-sm">
              <p className="text-sm font-semibold text-[#c5522f]">બેંક વિગતો</p>
              <p className="mt-2 text-sm font-semibold text-[#2b1a12] sm:text-base">
                The Kaira District Co-op. Bank Ltd.
              </p>
              <p className="mt-1 text-sm text-[#4c2b20]">
                A/C No: 902013101000444
              </p>
              <p className="text-sm text-[#4c2b20]">IFSC: ICIC00KAIRA</p>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl bg-surface-muted p-4 sm:flex-row sm:items-center">
              <a
                href="https://imgbb.com/"
                className="mx-auto shrink-0 sm:mx-0"
                aria-label="QR code image link"
              >
                <img
                  src="https://i.ibb.co/1NCXjrs/photo-2026-02-03-12-27-09.jpg"
                  alt="QR code"
                  className="h-44 w-44 rounded-2xl object-cover shadow-inner sm:h-36 sm:w-36 lg:h-40 lg:w-40"
                />
              </a>
              <div className="text-center sm:text-left">
                <p className="text-sm font-semibold text-[#2b1a12]">
                  QR કોડ સ્કેન કરો
                </p>
                <p className="text-sm text-[#4c2b20]">
                  પોસ્ટર મુજબનું UPI/QR દાન
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-[#c5522f]/40 bg-surface-muted p-4 text-sm text-[#4c2b20]">
              તમારું દાન ચારો, દવા, આશ્રય અને ગ્રામ્ય રેસ્ક્યુ કામગીરી માટે ઉપયોગમાં લેવાશે.
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl space-y-20 px-6 pb-24">
        <section id="about" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="font-display text-3xl font-semibold text-[#2b1a12]">
              ગૌસેવા માટે સમર્પિત આસ્થાનું કેન્દ્ર
            </h2>
            <p className="text-lg leading-relaxed text-[#4c2b20]">
              શ્રી કેશવ એનિમલ હોસ્પિટલ અને ગૌ સેવા મંદિર ખાતે નિરાધાર, દિવ્યાંગ અને બીમાર
              ગોવંશ તથા અન્ય પ્રાણીઓની સેવા થાય છે. ગામડાં સુધી પહોંચતી સેવા દ્વારા
              ચારો, આરોગ્યસંભાળ અને સુરક્ષિત નિવાસ આપવામાં આવે છે.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-[#5a2b1c] lg:justify-start">
              <span className="rounded-full border border-white/70 bg-surface-strong px-4 py-2">
                શ્રી પ્રસ્થાન ચેરિટેબલ ટ્રસ્ટ
              </span>
              <span className="rounded-full border border-white/70 bg-surface-strong px-4 py-2">
                મહિસાગર, ગુજરાત
              </span>
            </div>
          </div>
          <div className="section-card rounded-3xl p-6">
            <h3 className="font-display text-2xl font-semibold text-[#2b1a12]">
              સેવા પ્રતિજ્ઞા
            </h3>
            <ul className="mt-4 space-y-3 text-base text-[#4c2b20]">
              <li>નિરાધાર ગાયો માટે સુરક્ષિત આશ્રય અને પોષણ.</li>
              <li>એનિમલ હોસ્પિટલમાં સતત ચિકિત્સા અને દવા સહાય.</li>
              <li>ગ્રામ્ય વિસ્તારોમાં રેસ્ક્યુ અને પુનઃસ્થાપન સેવા.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-display text-3xl font-semibold text-[#2b1a12]">
              અમારી મુખ્ય સેવાઓ
            </h2>
            <span className="rounded-full border border-white/70 bg-surface-muted px-4 py-2 text-sm font-semibold text-[#c5522f]">
              ગૌ સેવા મંદિર
            </span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="section-card rounded-3xl p-6 transition hover:-translate-y-1"
              >
                <div className="mb-4 h-10 w-10 rounded-2xl bg-[#f7a23b]/25 text-center text-lg font-bold text-[#c5522f]">
                  ✓
                </div>
                <h3 className="text-xl font-semibold text-[#2b1a12]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4c2b20]">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="donate" className="space-y-6">
          <div className="section-card rounded-3xl p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="text-center lg:text-left">
                <h2 className="font-display text-3xl font-semibold text-[#2b1a12]">
                  દાન કરવાની રીત
                </h2>
                <p className="mt-2 text-base text-[#4c2b20]">
                  ગામડાની ગૌસેવા માટે તમે નીચેની રીતોથી સહકાર આપી શકો છો.
                </p>
              </div>
              <div className="rounded-full bg-[#f7a23b]/20 px-5 py-2 text-sm font-semibold text-[#c5522f]">
                દાન = સેવા
              </div>
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {donationWays.map((way) => (
                <div
                  key={way.title}
                  className="rounded-2xl border border-white/70 bg-surface-strong p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-[#2b1a12]">
                    {way.title}
                  </h3>
                  {way.title === "QR / UPI દ્વારા દાન" && (
                    <a
                      href="https://imgbb.com/"
                      className="mt-4 flex justify-center"
                      aria-label="QR code image link"
                    >
                      <img
                        src="https://i.ibb.co/1NCXjrs/photo-2026-02-03-12-27-09.jpg"
                        alt="QR code"
                        className="h-36 w-36 rounded-2xl object-cover shadow-inner sm:h-40 sm:w-40"
                      />
                    </a>
                  )}
                  <ul className="mt-3 space-y-2 text-sm text-[#4c2b20]">
                    {way.lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="font-display text-3xl font-semibold text-[#2b1a12]">
              સંપર્ક માહિતી
            </h2>
            <p className="text-base text-[#4c2b20]">
              સેવા, દાન અથવા મુલાકાત માટે નીચે મુજબ સંપર્ક કરો.
            </p>
            <div className="section-card rounded-3xl p-6">
              <p className="text-sm font-semibold text-[#c5522f]">ફોન</p>
              <p className="text-lg font-semibold text-[#2b1a12]">Mo. 9426127084</p>
              <p className="mt-4 text-sm font-semibold text-[#c5522f]">ઇમેઇલ</p>
              <p className="text-base text-[#2b1a12]">prasthancheritable@gmail.com</p>
            </div>
          </div>
          <div className="section-card rounded-3xl p-6">
            <h3 className="font-display text-2xl font-semibold text-[#2b1a12]">
              સરનામું
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[#4c2b20]">
              ધોળેશ્વર મહાદેવ મંદિર ની બાજુમાં,
              <br />
              મુ. પો. તા. વિરપુર,
              <br />
              જી. મહિસાગર, ગુજરાત.
            </p>
            <div className="mt-6 rounded-2xl bg-surface-muted p-4 text-sm text-[#4c2b20]">
              મુલાકાત પહેલાં ફોન પર માહિતી લેવા વિનંતી.
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/60 bg-surface-muted">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-sm text-[#4c2b20] sm:flex-row sm:text-left">
          <span>© 2026 શ્રી પ્રસ્થાન ચેરિટેબલ ટ્રસ્ટ</span>
          <span>ગૌ સેવા મંદિર · મહિસાગર</span>
        </div>
      </footer>
    </div>
  );
}
