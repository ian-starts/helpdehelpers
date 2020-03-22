import React from 'react';
import Link from "next/link";

const Hero = (props) => {
    return (
        <div className="hero">
            <div className="hero--container">
                <div className="hero--content">
                    <div className="flex flex-1 flex-col md:justify-center lg:justify-center xl:justify-center">
                        <h1
                            className="hero--heading">
                            Help de helpers!
                        </h1>
                        <p className="hero--text">
                            <br/>
                            Het is ongelooflijk om te zien hoeveel initiatieven er genomen worden om hulp te bieden
                            tijdens deze pandemie. Zó veel, dat het nu al moeilijk wordt om je weg te vinden hierin.
                            Daarom willen we graag alle initiatieven in Nederland inventariseren, zodat we de hulpvragen
                            en hulp aanbiedingen beter kunnen matchen. Het doel is dus:
                            <br/><br/>
                            <ul>
                                <li>1. Alle initiatieven in kaart te brengen en deze te organiseren.</li>
                                <li>2. Met andere initiatieven in contact komen om elkaar te kunnen helpen.</li>
                            </ul>
                            <br/>
                            Het verzoek aan jou; Deel dit formulier, zo veel en snel als je kan.
                            De waarde van deze lijst neemt toe met elke deling en extra invulling die deze krijgt. Start
                            met helpen door deze te delen!
                            Ken je een hulp initiatief voor hulpbiedingen, kaartjes naar oma’s & opa’s, boodschappen
                            doen voor de verpleegster uit je buurt, online yoga, online bijles of een andere vorm van
                            hulporganisatie?… Vul het formulier in, zo goed je kan! Dan gaan wij er samen voor zorgen
                            dat we de hulp zo goed organiseren als we kunnen, vanuit Code for NL, in samenwerking met
                            jullie allemaal.
                            Wil je hier zelf ook bij betrokken worden? doemee.codefor.nl
                        </p>
                        <div className="flex flex-wrap mt-2">
                            <a
                                href="https://slack-redir.net/link?url=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLScEK83SlUdbTdw6SYqiqRXlLMLbSas3_MYBZqffElVSiPwISQ%2Fviewform">
                                <div className="button button-cta">
                                        <span
                                            className="button--text">Voeg een initiatief toe</span>
                                </div>
                            </a>
                            <a href="https://codefornl.slack.com">
                                <div className="button button-cta">
                                        <span
                                            className="button--text">Join de CodeForNL Slack</span>
                                </div>
                            </a>
                            <a href="https://heldnodig.nl">
                                <div className="button button-cta">
                                        <span
                                            className="button--text">Ik wil nu iets doen!</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                  .hero{
                    @apply top-0 left-0 w-screen bg-secondary;
                  }
                  .hero--container{
                    @apply flex flex-1 flex-row flex-wrap-reverse justify-end pt-20 min-h-screen
                  }
                  .hero--content {
                    @apply flex pl-12 pr-2 flex-1 self-center mb-10 min-w-20
                  }
                  .hero--heading {
                    @apply text-2xl my-5 font-sans leading-tight font-semibold text-white
                  }
                  .hero--text {
                    @apply text-lg my-5 mr-5 font-sans leading-tight text-white p-4
                  }
                  .button{
                    @apply rounded-full px-5 py-2
                  }
                  .button-cta{
                    transition: transform .3s ease,-webkit-transform .3s ease,box-shadow .4s ease;
                    @apply bg-primary ml-3 my-2
                  }
                  .button-cta:hover{
                    transform: translate(0px, -2px);
                    box-shadow: 0 0 9px 2px hsla(0, 0%, 0%, 0),0 6px 18px 2px rgba(0, 0, 0, 0.1);;
                  }
                  .button--text{
                    @apply self-center text-gray-800 font-sans font-hairline 
                  }
                  @screen md {
                       .hero--heading {
                        @apply text-4xl
                      }
                      .hero{
                        @apply h-screen
                      }
                      .hero--text {
                        @apply text-lg
                      }
                       .hero--content {
                        @apply min-h-screen mb-0
                      }
                      .hero--container{
                          @apply mt-0 pt-0
                      }
                  }
                  @screen lg {
                      .hero--heading {
                        @apply text-5xl
                      }
                      .hero{
                        @apply h-screen
                      }
                      .hero--text {
                        @apply text-lg
                      }
                      .button--text{
                        @apply text-2xl
                      }
                      .hero--content {
                        @apply min-h-screen mb-0
                      }
                      .hero--container{
                          @apply mt-0 pt-0
                      }
                  }
                  @screen xl {
                      .hero--heading {
                        @apply text-5xl
                      }
                      .hero{
                        @apply h-screen
                      }
                      .hero--text {
                        @apply text-lg
                      }
                      .button-text{
                        @apply text-2xl
                      }
                      .hero--content {
                        @apply min-h-screen mb-0
                      }
                      .hero--container{
                          @apply mt-0 pt-0
                      }
                  }
            `}</style>
        </div>
    )
};

export default Hero