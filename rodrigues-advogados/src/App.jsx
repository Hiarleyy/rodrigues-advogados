import './App.css'

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Rodriges Advogados - Início">
          <span className="brandMark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2.5l7.5 3.6v6.5c0 5.4-3.9 9-7.5 9.9-3.6-.9-7.5-4.5-7.5-9.9V6.1L12 2.5z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M8 9.5h8M12 7.2v12.6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M9 11.8l-2.3 3.6h4.6L9 11.8zm6 0l-2.3 3.6h4.6L15 11.8z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="brandText">
            <span className="brandName">RODRIGES ADVOGADOS</span>
            <span className="brandTagline">Justiça &amp; Confiança</span>
          </span>
        </a>

        <nav className="nav" aria-label="Navegação principal">
          <a href="#top">Início</a>
          <a href="#sobre">O Escritório</a>
          <a href="#areas">Áreas de Atuação</a>
          <a href="#blog">Blog</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="topbarRight">
          <div className="contactInline">
            <span className="contactLabel">Consulta</span>
            <a className="contactPhone" href="tel:+5500000000000" aria-label="Ligar para o escritório">
              +55 (00) 00000-0000
            </a>
          </div>
          <a className="cta" href="#contato">Consulta gratuita</a>
        </div>
      </header>

      <main className="hero" id="top">
        <section className="heroInner">
          <div className="heroCopy">
            <p className="kicker">Escritório de advocacia</p>
            <h1 className="headline">
              Expertise jurídica,
              <br />
              compromisso com resultados
            </h1>
            <p className="subhead">
              Atuação estratégica e atendimento próximo. Orientamos você com clareza do início ao fim —
              com foco em soluções seguras e efetivas.
            </p>

            <div className="heroActions">
              <a className="btnPrimary" href="#contato">
                Agendar consulta
              </a>
              <a className="btnSecondary" href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">
                Falar no WhatsApp
              </a>
            </div>

            <div className="socialRow" aria-label="Redes sociais">
              <a className="iconBtn" href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M7.5 2.8h9A4.7 4.7 0 0 1 21.2 7.5v9A4.7 4.7 0 0 1 16.5 21.2h-9A4.7 4.7 0 0 1 2.8 16.5v-9A4.7 4.7 0 0 1 7.5 2.8Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M12 16.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path d="M17.6 6.4h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </a>
              <a className="iconBtn" href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M5.4 9.4V19M5.4 5.8v.1M9.4 9.4V19m0-5.7c0-2.2 1.2-3.9 3.7-3.9 2.4 0 3.4 1.6 3.4 4V19"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2.8 12c0-4.9 4-8.9 8.9-8.9S20.6 7.1 20.6 12s-4 8.9-8.9 8.9S2.8 16.9 2.8 12Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    opacity=".35"
                  />
                </svg>
              </a>
              <a className="iconBtn" href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M13.5 8.3V6.8c0-.9.5-1.4 1.6-1.4h1.6V2.8h-2.3c-2.7 0-4.2 1.4-4.2 4v1.5H7.6v2.6h2.6V21h3.3v-10h2.8l.5-2.6h-3.3Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="heroMedia" aria-hidden="true">
            <div className="mediaFrame">
              <div className="mediaGlow" />
              <img className="mediaImg" src="/ESTATUA-ADVOGADO.png" alt="" />
              <div className="mediaOverlay" />
            </div>
          </div>
        </section>

        <section className="stats" aria-label="Números do escritório">
          <div className="stat">
            <div className="statValue">+1.200</div>
            <div className="statLabel">Clientes atendidos</div>
          </div>
          <div className="stat">
            <div className="statValue">+350</div>
            <div className="statLabel">Demandas conduzidas</div>
          </div>
          <div className="stat">
            <div className="statValue">95%</div>
            <div className="statLabel">Satisfação</div>
          </div>
          <div className="stat">
            <div className="statValue">10+</div>
            <div className="statLabel">Anos de experiência</div>
          </div>
        </section>
      </main>

      <section className="sections" aria-label="Seções">
        <div className="section" id="sobre">
          <h2>O Escritório</h2>
          <p>
            A Rodrigues Advogados atua com foco em atendimento humanizado, estratégia processual e soluções claras.
            Nosso objetivo é oferecer segurança jurídica e previsibilidade para decisões importantes.
          </p>
        </div>
        <div className="section" id="areas">
          <h2>Áreas de Atuação</h2>
          <ul className="areas">
            <li>Direito Civil</li>
            <li>Direito Trabalhista</li>
            <li>Direito do Consumidor</li>
            <li>Direito Empresarial</li>
          </ul>
        </div>
        <div className="section" id="blog">
          <h2>Blog</h2>
          <p>
            Publicamos materiais explicativos para ajudar você a entender seus direitos e próximos passos.
          </p>
        </div>

        <div className="section" id="processo">
          <div className="processHeader">
            <p className="processKicker">Nosso processo</p>
            <h2>Como chegamos à melhor estratégia</h2>
          </div>

          <div className="processGrid" aria-label="Etapas do atendimento">
            <ol className="processSteps">
              <li className="processStep">
                <div className="stepNum" aria-hidden="true">01</div>
                <div className="stepBody">
                  <h3>Triagem e entendimento do caso</h3>
                  <p>
                    Reunimos o contexto, objetivos e documentos essenciais para mapear riscos e oportunidades.
                  </p>
                </div>
              </li>
              <li className="processStep">
                <div className="stepNum" aria-hidden="true">02</div>
                <div className="stepBody">
                  <h3>Análise jurídica e caminhos possíveis</h3>
                  <p>
                    Avaliamos fundamentos, jurisprudência e alternativas — acordo, medidas urgentes ou ação judicial.
                  </p>
                </div>
              </li>
              <li className="processStep">
                <div className="stepNum" aria-hidden="true">03</div>
                <div className="stepBody">
                  <h3>Plano de ação e transparência</h3>
                  <p>
                    Você recebe um plano claro com próximos passos, prazos e custos estimados antes de decidir.
                  </p>
                </div>
              </li>
              <li className="processStep">
                <div className="stepNum" aria-hidden="true">04</div>
                <div className="stepBody">
                  <h3>Execução e acompanhamento</h3>
                  <p>
                    Conduzimos a estratégia com comunicação contínua, atualizações objetivas e foco em resultado.
                  </p>
                </div>
              </li>
            </ol>

            <aside className="processInsight" aria-label="Insight do processo">
              <p className="insightLabel">Insight</p>
              <blockquote className="insightQuote">
                “As pessoas não buscam apenas um advogado — elas querem se sentir orientadas, seguras e confiantes
                antes de tomar qualquer decisão.”
              </blockquote>
              <ul className="insightList">
                <li>Atendimento com linguagem simples e objetiva</li>
                <li>Estratégia definida antes de qualquer medida</li>
                <li>Documentação e evidências organizadas desde o início</li>
                <li>Atualizações frequentes para reduzir incertezas</li>
              </ul>
            </aside>
          </div>
        </div>

        <div className="section" id="contato">
          <h2>Contato</h2>
          <p>
            Envie uma mensagem para agendar sua consulta. Retornamos assim que possível.
          </p>
          <div className="contactCard">
            <a className="contactItem" href="mailto:contato@rodrigesadvogados.com.br">contato@rodrigesadvogados.com.br</a>
            <a className="contactItem" href="tel:+5500000000000">+55 (00) 00000-0000</a>
            <span className="contactItem">Atendimento: Seg–Sex, 9h–18h</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Rodrigues Advogados</span>
        <span className="footerSep" aria-hidden="true">•</span>
        <a href="#top">Voltar ao topo</a>
      </footer>
    </div>
  )
}

export default App
