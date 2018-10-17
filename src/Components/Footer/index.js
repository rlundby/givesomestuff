import React, {Component, Fragment as F} from 'react';
import {Redirect} from 'react-router-dom';
import './styles.css';


class Footerbar extends Component {
    render() {
        let auth = sessionStorage.getItem('auth');
        if (!auth) {
            return <Redirect to="/login"/>
        }

        return (
            <F>
                <footer className={"footer"}>
                    <h4 className="text-center pt-4">Hejhopp!</h4>
                    <h5 className={"text-center"}> Tack för att du tog dig tid att kika på den här sidan</h5>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <p>Våga Välgörenhet är skapad av Rickard Lundby och resultatet av ett folkhögskolearbete för
                                Västerås Folkhögskola.</p>
                            <p className={"text-center"}>Syftet med hemsidan är enkelt.</p>
                            <p>Jag ville veta om man kunde göra det enklare för människor att våga skänka till välgörenhet
                                genom att bygga en plattform där man kan se och jämföra hur olika organisationer arbetar och
                                spenderar gåvor. Enligt undersökningar gjorda av välgörenhetsbarometern och mig själv, så är
                                ovetandet om hur organisationen spenderas ens bidrag den största faktorn till varför man
                                inte vågar skänka.</p>
                            <p>Förhoppningsvis, genom att presentera fakta här om vilka regler som finns, så är det enklare för dig att hitta en välgörenhet som passar dig, och som du vågar skänka till.</p>
                            <h6>OBS: Om inget annat presenteras så är källan alltid organisationens egen hemsida.</h6>
                        </div>
                        <div className="col-md-2 contact">
                            <h5>Har du tankar, åsikter eller kommentarer?</h5>
                            <p>Hör gärna av dig!</p>
                            <p>Rickard Lundby</p>
                            <p>rickardlundby@gmail.com</p>
                        </div>
                    </div>
                </footer>
            </F>
        );
    }
}

export default Footerbar;
