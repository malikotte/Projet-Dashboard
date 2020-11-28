import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';


function numStr(a, b) {
    a = '' + a;
    b = b || ' ';
    let c = '',
        d = 0;
    while (a.match(/^0[0-9]/)) {
        a = a.substr(1);
    }
    for (let i = a.length - 1; i >= 0; i--) {
        c = (d !== 0 && d % 3 === 0) ? a[i] + b + c : a[i] + c;
        d++;
    }
    return c;
}

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    static defaultProps = {
        center: {
            lat: 46,
            lng: 2
        },
        zoom: 11,
    };

    componentDidMount() {
        //https://express-app-covid.herokuapp.com/posts/
        fetch('https://corona.lmao.ninja/v3/covid-19/countries')
            .then((response) => {
                return response.json()
            })

            .then((result) => {
                this.setState({ data: result });
                //   console.log(result);
            })
    }

    render() {

        return (
            // Important! Always set the container height explicitly
            <div style={{ marginLeft: "auto", marginRight: "auto", height: '50vh', width: '100%', border: "1px solid grey" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDO6wpiT8dSLiof0hoYINZ5eWVSgpugQ-A" }}
                    defaultCenter={this.props.center}
                    defaultZoom={2}
                >
                    {this.state.data.map(empresa => {

                        return (
                            <div style={{ textAlign: "center", color: "black", backgroundColor: "white", height: "25px", width: "35px", borderRadius: "25px" }} lat={empresa.countryInfo.lat} lng={empresa.countryInfo.long}>
                                <img style={{ height: "14px", width: "19px", marginTop: "2px" }} src={empresa.countryInfo.flag} alt="Pays Drapeau" />
                                <br />
                                {numStr(empresa.cases, ".")}
                            </div>
                        )
                    })}

                </GoogleMapReact>
            </div>
        );

    }
}

export default Map;
