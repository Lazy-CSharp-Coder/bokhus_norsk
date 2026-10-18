import Link from "next/link";

export function PrivacyPolicy()
{   

    return (
        <section className="legalSection fadeInAnim">
            <h2 className="legalHeadingTop">
                Personvernerklæring & Informasjonskapsler (Cookies)
            </h2>
            <h3 className="updateHeading">
                Sist oppdatert: 16. september 2026
            </h3>
            
            <article className="legalArticle">
                <div className="textDiv">
                    <p className="legalText">Denne personvernerklæringen forklarer hvordan BokHus.com ("BokHus", "vi", "oss" eller "vår") samler inn, bruker og beskytter personopplysninger i samsvar med EUs personvernforordning (GDPR) og relevante norske personvernlover.</p>
                    <p className="legalText">Ved å bruke BokHus.com, godtar du praksisen som er beskrevet i denne erklæringen.</p>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Behandlingsansvarlig</h3>
                <div className="textDiv">
                    <p className="legalText">BokHus.com er en plattform og et nettsamfunn for bokutgivelser som drives av Hushald AS.</p>
                    <p className="legalText">Den behandlingsansvarlige for personopplysninger på BokHus.com er:</p>
                    <p className="legalText">Hushald AS</p>
                    <p className="legalText">Vestre Vadmyra 35</p>
                    <p className="legalText">5172 LODDEFJORD</p>
                    <p className="legalText">Norge</p>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Personopplysninger vi samler inn</h3>
                <div className="textDiv">
                    <p className="legalTextSmallHeading">Informasjon du oppgir</p>
                    <p className="legalText">Når du samhandler med nettstedet, registrerer en konto eller søker på programmer, kan du oppgi:</p>
                    <ul className="legalList">
                        <li>navn og e-postadresse</li>
                        <li>meldinger sendt via kontaktskjemaer</li>
                        <li>abonnementer på nyhetsbrev</li>
                        <li>profilinformasjon, inkludert lesevaner (f.eks. lesehastighet, foretrukne formater), sjangereferanser, og plattformer hvor du legger ut anmeldelser</li>
                        <li>forfatter- eller bidragsyterinformasjon</li>
                    </ul>

                    <p className="legalTextSmallHeading">Automatisk innsamlet informasjon</p>
                    <p className="legalText">Når du besøker BokHus.com, behandler vi teknisk informasjon gjennom Cloudflare for å opprettholde nettstedets infrastruktur, sikkerhet og ytelse. Vi bruker Cloudflare Web Analytics for å samle inn generelle, aggregerte statistikker om nettstedstrafikk. Cloudflare Web Analytics bruker ikke informasjonskapsler (cookies) eller lokal lagring for å samle inn analyseinformasjon, og bygger ikke individuelle besøksprofiler.</p>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Formål og rettslig grunnlag for behandling</h3>
                <div className="textDiv">
                    <p className="legalText">Vi behandler personopplysninger for følgende formål:</p>
                    <ul className="legalList">
                        <li>autentisering av brukere og opprettholdelse av sikre innloggingsøkter</li>
                        <li>besvare henvendelser og meldinger</li>
                        <li>administrere nyhetsbrevabonnementer og relasjoner til ARC-lesere (forhåndseksemplarer)</li>
                        <li>forbedre nettstedets funksjonalitet og ytelse</li>
                        <li>opprettholde nettstedets sikkerhet</li>
                    </ul>
                    
                    <p className="legalTextSmallHeading">Rettslig grunnlag</p>
                    <p className="legalText">Under GDPR inkluderer vårt rettslige grunnlag for behandling av personopplysninger:</p>
                    <ul className="legalList">
                        <li><strong>Samtykke:</strong> Når du frivillig abonnerer på nyhetsbrev, oppretter en profil eller sender inn skjemaer.</li>
                        <li><strong>Berettiget interesse:</strong> For å forbedre nettstedets ytelse, sikkerhet og brukeropplevelse.</li>
                        <li><strong>Kontraktsmessig nødvendighet:</strong> Ved samarbeid med forfattere, bidragsytere eller partnere.</li>
                    </ul>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Informasjonskapsler og sporingsteknologier</h3>
                <div className="textDiv">
                    <p className="legalText">Informasjonskapsler er små tekstfiler som lagres på enheten din. BokHus bruker for tiden kun informasjonskapsler der det er teknisk nødvendig for å levere nettstedsfunksjonaliteten som brukeren har bedt om. Vi bruker ikke Google Analytics, tilpasset annonsering, atferdssporing, sporing på tvers av nettsteder eller valgfrie informasjonskapsler for analyse.</p>
                    
                    <p className="legalTextSmallHeading">Informasjonskapsler for autentisering</p>
                    <p className="legalText">BokHus bruker en autentiseringstjeneste levert av Clerk. Når du logger inn, oppretter en konto eller bruker en autentisert del av BokHus, bruker Clerk teknisk nødvendige informasjonskapsler for å etablere og opprettholde en sikker innloggingsøkt. Disse informasjonskapslene (for eksempel `__session` eller klientinformasjonskapsler) kreves for å:</p>
                    <ul className="legalList">
                        <li>gjenkjenne at du er logget inn</li>
                        <li>opprettholde brukersesjonen din på en sikker måte og autentisere forespørsler</li>
                        <li>beskytte kontoer mot uautorisert tilgang</li>
                    </ul>
                    <p className="legalText">Fordi disse informasjonskapslene er strengt nødvendige for å tilby forespurt funksjonalitet, er de ikke valgfrie, og vi viser ikke et samtykkebanner for informasjonskapsler. Å blokkere dem i nettleserinnstillingene dine kan forhindre deg i å logge inn.</p>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Amazon Associates-programmet</h3>
                <div className="textDiv">
                    <p className="legalText">Dette nettstedet deltar i Amazon Associates Program, et annonseringsprogram (affiliate) designet for å gi nettsteder en måte å tjene annonseinntekter ved å annonsere og lenke til Amazon sine nettsteder.</p>
                    <p className="legalText"><strong>Som Amazon Associate tjener jeg på kvalifiserte kjøp.</strong></p>

                    <p className="legalTextSmallHeading">Tilknyttede lenker (Affiliate Links)</p>
                    <p className="legalText">Noen sider på dette nettstedet inneholder tilknyttede lenker til bøker utgitt av vårt selskap og solgt gjennom Amazon. Hvis du klikker på en av disse lenkene og gjør et kvalifisert kjøp, kan vi tjene en Amazon Associates-provisjon uten ekstra kostnad for deg. Vi kan også motta inntekter fra salget av bøkene våre som utgiver eller rettighetshaver, der det er aktuelt.</p>
                    <p className="legalText">Vår bruk av tilknyttede lenker påvirker ikke prisen du betaler.</p>

                    <p className="legalTextSmallHeading">Informasjonskapsler og sporing</p>
                    <p className="legalText">Når du klikker på en Amazon affiliate-lenke, blir du omdirigert til Amazons nettsted. Amazon kan bruke informasjonskapsler eller lignende teknologier for å spore besøket ditt og avgjøre om et kvalifisert kjøp blir gjort. Disse informasjonskapslene kontrolleres av Amazon og er underlagt Amazons egen personvernerklæring og brukervilkår.</p>
                    <p className="legalText">Vi mottar ikke betalingsopplysningene dine, leveringsadressen eller andre personopplysninger knyttet til kjøpene dine på Amazon. Vi mottar kun aggregerte rapporter, som for eksempel klikk, kvalifiserte kjøp og opptjente provisjoner.</p>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Datadeling</h3>
                <div className="textDiv">
                    <p className="legalText">Vi selger ikke personopplysninger.</p>
                    <p className="legalText">Personopplysninger kan deles med pålitelige tjenesteleverandører som støtter nettstedet, for eksempel:</p>
                    <ul className="legalList">
                        <li>leverandører av autentisering (Clerk)</li>
                        <li>tjenester for nettstedsinfrastruktur og ytelse (Cloudflare)</li>
                        <li>plattformer for e-postutsending (Resend)</li>
                    </ul>
                    <p className="legalText">Disse leverandørene behandler data kun på våre vegne og i henhold til GDPRs krav. De opprettholder sine egne personvernerklæringer som beskriver hvordan de behandler informasjon.</p>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Datalagring og sikkerhet</h3>
                <div className="textDiv">
                    <p className="legalText">Vi implementerer rimelige tekniske og organisatoriske tiltak for å beskytte personopplysninger, inkludert:</p>
                    <ul className="legalList">
                        <li>sikker drift (hosting) og krypterte tilkoblinger (HTTPS)</li>
                        <li>begrenset, autentisert tilgang til personopplysninger</li>
                    </ul>
                    <p className="legalText">Personopplysninger lagres kun så lenge det er nødvendig for å oppfylle formålene beskrevet i denne erklæringen.</p>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Dine rettigheter under GDPR</h3>
                <div className="textDiv">
                    <p className="legalText">Brukere i Det europeiske økonomiske samarbeidsområdet (EØS) har følgende rettigheter. Du kan be om:</p>
                    <ul className="legalList">
                        <li>innsyn i dine personopplysninger</li>
                        <li>retting av unøyaktige data</li>
                        <li>sletting av dataene dine ("retten til å bli glemt")</li>
                        <li>begrensning av behandling</li>
                        <li>dataportabilitet</li>
                        <li>å trekke tilbake samtykke når som helst</li>
                    </ul>
                    <p className="legalText">Du har også rett til å sende inn en klage til Datatilsynet i Norge.</p>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Internasjonale dataoverføringer</h3>
                <div className="textDiv">
                    <p className="legalText">Dersom personopplysninger behandles utenfor Det europeiske økonomiske samarbeidsområdet (EØS), sørger BokHus for at egnede sikkerhetstiltak er på plass, slik som EUs standardkontrakter (SCC) og tjenesteleverandører som overholder GDPR.</p>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Oppbevaring av data</h3>
                <div className="textDiv">
                    <p className="legalText">Personopplysninger oppbevares kun så lenge det er nødvendig for formålet de ble samlet inn for, med mindre lengre oppbevaring er lovpålagt. Typiske oppbevaringsperioder kan inkludere:</p>
                    <ul className="legalList">
                        <li>kontaktmeldinger: inntil 12 måneder</li>
                        <li>nyhetsbrev og profildata: til kontoen slettes eller abonnementet sies opp</li>
                    </ul>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Barns personvern</h3>
                <div className="textDiv">
                    <p className="legalText">BokHus.com er ikke beregnet for barn under 16 år. Vi samler ikke bevisst inn personopplysninger fra barn. Hvis slike opplysninger blir oppdaget, vil de bli slettet så snart som mulig.</p>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Endringer i denne erklæringen</h3>
                <div className="textDiv">
                    <p className="legalText">Vi kan oppdatere denne personvernerklæringen fra tid til annen, for eksempel hvis vi introduserer nye autentiseringsteknologier, ytterligere informasjonskapsler eller valgfri analyse. Den oppdaterte versjonen vil bli publisert på denne siden med en revidert dato.</p>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Kontakt</h3>
                <div className="textDiv">
                    <p className="legalText">For spørsmål angående denne personvernerklæringen, vår bruk av informasjonskapsler eller håndteringen av personopplysninger, vennligst kontakt BokHus. Du kan bruke kontaktskjemaet for å gjøre dette ved å klikke på denne <Link className="legalContactLink" href="/Contact">lenken</Link>.</p>
                </div>
            </article>
        </section>
    );
}