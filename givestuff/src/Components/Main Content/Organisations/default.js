import React, {Component, Fragment as F} from 'react';

export default class OrganisationDefault extends Component {


    render() {

        return (
            <F>
                <div className="col-8">
                    <div className="row">
                        <div className="col-md-8">
                            <img className="img-fluid"
                                 src="https://www.babble.com/wp-content/uploads/2016/01/goats.png" alt="goat"/>
                        </div>
                        <div className="col-md-4">
                            <table className="table table-striped">
                                <tbody className="">
                                <tr>
                                    <td>Namn:</td>
                                    <td>Djurens Rätt</td>
                                </tr>
                                <tr>
                                    <td>Kategori:</td>
                                    <td>Djur</td>
                                </tr>
                                <tr>
                                    <td>Område:</td>
                                    <td>Sverige</td>
                                </tr>
                                <tr>
                                    <td>90-konto:</td>
                                    <td>Ja</td>
                                </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                    <div className="row checkbox-container">
                        <div className="checkbox">
                            <i className="fas fa-check-circle"></i>
                            <p>Insamlingskontroll</p>
                        </div>
                        <div className="checkbox">
                            <i className="fas fa-check-circle"></i>
                            <p>Redovisar ekonomi</p>
                        </div>
                        <div className="checkbox">
                            <i className="fas fa-check-circle"></i>
                            <p>Swish</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 card">
                            <div className="card-body">
                                <h3 className="text-center card-title">Om Djurens Rätt</h3>
                                <p>Djurens Rätt är Sveriges största djurrätts- och djurskyddsorganisation. De är
                                    partipolitiskt obundna och arbetar för en värld där djur respekteras som
                                    kännande individer med rätt till sina egna liv. Djurens Rätt är beroende av
                                    frivilligt stöd för att kunna hjälpa djuren. Det är alla medlemmar och
                                    gåvogivare som är Djurens Rätt.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 card">
                            <div className="card-body">
                                <h3 className="text-center card-title">Vad gör Djurens Rätt?</h3>
                                <p>Djurens Rätt har funnits sedan 1882 och är idag Sveriges ledande djurrätts-
                                    och djurskyddsorganisation med omkring 45 000 medlemmar. Vi arbetar för alla
                                    de djur som lider i djurförsök, i livsmedelsindustrins djurfabriker, i burar
                                    på pälsfarmer och djur som på andra sätt utnyttjas av människor så att de
                                    inte får utlopp för sina naturliga beteenden.
                                </p>
                                <p>
                                    Djurens Rätt är en uttalad antivåldsrörelse, eftersom vi anser att varken
                                    människor eller djur ska utsättas för våld. Vi vill genom demokratisk
                                    opinionsbildning, politisk påverkan och attitydförändring förverkliga vårt
                                    mål: en värld där djur respekteras som kännande individer med rätt till sina
                                    egna liv. Vi verkar framförallt inom Sverige men samverkar med andra
                                    organisationer och nätverk internationellt och inom EU.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 card">
                            <div className="card-body">
                                <h3 className="text-center card-title">Hur kan jag stödja Djurens Rätt?</h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="how-to-give-list">
                                            <li>Ge en gåva</li>
                                            <li>Bli medlem i "Rädda Djuren-klubben"</li>
                                            <li>Minnesgåva</li>
                                            <li>Gåvogram</li>
                                            <li>Testamentera</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 d-flex flex-column  justify-content-center">
                                        <a href="https://www.djurensratt.se/engagera-dig/stod-oss" target="_blank"  className="btn btn-lg btn-primary align-baseline give-btn"> Stöd Djurens Rätt</a>
                                    </div>
                                    <div className="col-12">
                                        <p>Djurens rätt har godkänt 90-konto, vilket betyder att minst 75% av alla donationer går till ändamålet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </F>
        )
    }
}