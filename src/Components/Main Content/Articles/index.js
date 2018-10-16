import React, {Component, Fragment as F} from 'react';


export default class Articles extends Component {

    render() {
        return (
            <F>
                <div className="container-fluid m-6">
                        <div className="row justify-content-center">
                            <div className="col-md-3 article shadow">
                                <h4 className="text-center">90-konto</h4>
                                <hr/>
                                <div>
                                    <p>Ett 90-konto betyder att verksamheten granskas av Insamlingskontroll.</p>
                                    <p> Men betyder det nödvändigtvis att organisationen är pålitlig?</p>
                                    <a href="/90konto">Läs mer</a>
                                </div>
                            </div>
                            <div className="col-md-3 article article-2 shadow">
                                <h4 className="text-center">Svensk statistik</h4>
                                <hr/>
                                <div>
                                    <p>Hur ser vi svenskar på välgörenhet och hur många skänker gåvor?</p>
                                    <p>Vi sammanfattar den senaste rapporten från välgörenhetsbarometern</p>
                                    <a href="/90konto">Läs mer</a>
                                </div>
                            </div>
                        </div>


                    </div>

            </F>
        )
    }
}