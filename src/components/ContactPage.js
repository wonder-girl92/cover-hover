import React from 'react';

function ContactPage(props) {
    return (
        <div>
            <h2 className='title text-center mb-4'>OUR LOCATION:</h2>
            <div className="map">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A08a8a633d11cc1646471bec32440752b88a8816bf021839294bbe674e1fd63e2&amp;source=constructor">
                </iframe>
            </div>
        </div>
    );
}

export default ContactPage;