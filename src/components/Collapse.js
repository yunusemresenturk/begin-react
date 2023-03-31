import React from 'react';

class Collapse extends React.Component { //Buradaki collapse classımız React componentdaki tüm özelliklere sahiptir.

    constructor (props) {
        super (props); //super ile React componenta ait olan constructor metodunu extend eder.(tüm özelliklerini alır)
        this.state = {
            showContent: "test content"
        };
    }


    render () {
        return (
            <div>
                {/* "w-100": button %100 kapsıyor. */}
                    <a class="btn btn-primary w-100" data-toggle="collapse" href={"#".concat(this.props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
                        Link with href
                    </a>
                <div class="collapse show" id={this.props.href}>
                    {this.props.children}
                    {this.state.showContent} {/* Burada da this.props.children ile Card componentini çağırıyoruz. */}
                </div>
            </div>
        );
    }
};

export default Collapse;

