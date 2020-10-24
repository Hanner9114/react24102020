import React, { Component } from 'react';
import Vision from '../img/Vision.png';

class BodyVision extends Component {
    render() {
        return (

            <div className="jumbotron row-black">
                <div class="row">
                    <div class="col-md-3">
                    <img src={Vision}  className="Body-img " alt="Vision"/>
                    </div>
                    <div class="col-md-9">
                        <p className="justificado">
                            La selección de fútbol de Colombia es el equipo representativo del país en las competencias de este
                            deporte. Está regentada por la Federación Colombiana de Fútbol,
                            la cual está afiliada a la Confederación Sudamericana de Fútbol (Conmebol) y la Federación
                            Internacional de Fútbol Asociado (FIFA), por lo que la selección participa en las competencias que
                            estas entidades organizan y juegan.
                            Disputó su primer partido internacional en la ciudad de Panamá el 10 de febrero de 1938.
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default BodyVision;