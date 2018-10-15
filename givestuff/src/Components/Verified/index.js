import React, {Component, Fragment as F} from 'react';
import {Redirect} from 'react-router-dom';
import Navigation from "../Navigation";


class Verified extends Component {
    render() {
        let auth = sessionStorage.getItem('auth');
        if (!auth) {
            return <Redirect to="/login"/>
        }
        return (
            <F>
                <Navigation/>
                <div className="container-fluid verified-box">
                    <div className="row card-deck">
                        <div className="col-lg-6 card mt-5">
                            <div className="card-body">
                                <h3 className="text-center card-title">Vad är egentligen ett 90-konto?</h3>
                                <hr/>
                                <p>Svensk Insamlingskontroll är en ideel förening som verkar för att välgörande och
                                    allmännyttiga ändamål sker under en betryggande kontroll.
                                    De säkerställer att insamlingar inte belastas med onödiga konstander och att
                                    medverkande organisationer följer deras regler.
                                    De gör årliga kontroller av alla organisationer som har ett 90-konto och ser till
                                    att de håller en hög standard.
                                </p>
                                <h4>Vad betyder det för mig?</h4>
                                <p>Det betyder att du kan vara säker på att: </p>
                                <ul>
                                    <li>Minst 75% av de insamlade medlen går till ändamålet och inget annat.</li>
                                    <li>Markandsföringen är etisk och ekonomiskt försvarlig.</li>
                                    <li>Kontot inte får användas för att samla in till ett ändamål som inte är godkänt
                                        av Svensk Insamlingskontroll
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5 card mt-5">
                            <div className="card-body">
                                <h3 className="text-center card-title">Hur vet jag om en organisation har ett
                                    90-konto?</h3>
                                <hr/>
                                <p>Det finns flera olika sätt att kontrollera så att din välgörenhet har ett
                                    90-konto: </p>
                                <ul>
                                    <li>Om deras bankgiro/plusgiro börjar på 90.</li>
                                    <li>Om de använder logotypen för ett 90-konto på hemsidan.</li>
                                    <li>Om de finns med på den <a
                                        href="https://www.insamlingskontroll.se/90konto">här</a> listan.
                                    </li>
                                    <li>Alla välgörenheter som finns på "Våga välgörenhet" är kontrollerade.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row card-deck justify-content-center">
                        <div className="col-lg-5 card mt-3 mb-5">
                            <div className="card-body">
                                <h3 className="text-center card-title">Är 90-konto det enda som spelar roll?</h3>
                                <hr/>
                                <p>
                                Att en organisation eller förening har ett 90-konto är ett bra tecken på att de är ansvarsfulla.
                                Det betyder dock inte att de spenderar sina pengar på vad DU tycker är mest rimligt.
                                </p>
                                <p>
                                    Många organisationer släpper en ekonomisk historia som berättar vad deras vision är och hur de vill spendera pengarna för att hjälpa sitt ändamaål.
                                    Dessa finns allt som oftast på deras hemsida och väl värda en läsning om du vill ha mer kött på benen innan du gör ditt val.
                                </p>
                                <h4 className="text-center">Löner, arvoden och administrativa avgifter</h4>
                                <p>
                                    Något som är viktigt att kolla är hur en förening/organisation avlönar sin generalsekreterare och styrelsen.
                                    Denna information finns tillgänglig på många av välgörenheternas hemsidor, men inte alla. Att kolla om de publicerar sådan information är ofta
                                    ett bra sätt att få en känsla för hurvidare du vill skänka till dem eller inte.
                                </p>
                                <p>
                                    Det är också bra att kolla om organisationen skriver hur stor del av pengarna går till administrativa avgifter och hur mycket som går till ändamålet.
                                    Detta brukar också stå på hemsidorna, men om det inte gör det kan det vara ett tecken på att dina pengar går till något annat än det du vill.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </F>
        );
    }
}

export default Verified;
