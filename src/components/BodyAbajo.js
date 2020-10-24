import React, { Component } from 'react';

class BodyAbajo extends Component {
    render() {
        return (

            <div className="row-4 ">
                <div className="card-deck">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Galería</h5>
                            <p className="card-text">Aquí encontrá nuestros productos.</p>
                            <div className="card-footer">
                                <a class="btn btn-primary btn-lg row-black" href="#" role="button">Ver mas</a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Contacto</h5>
                            <p className="card-text">Quieres conocer mas sobre nuestros productos.</p>
                            <div className="card-footer">
                                <a class="btn btn-primary btn-lg row-black" href="#" role="button">Ver mas</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default BodyAbajo;