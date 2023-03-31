// ilk constructor --> state initialization
// render metodu ilk defa calisti
// onClick eventi çalıştı
// setState state nesnesini guncelledi --> triggered render
// render metodu guncel JSX i sayfada gosteriyor

import React from 'react';

class Collapse extends React.Component { //Buradaki collapse classımız React componentdaki tüm özelliklere sahiptir.

    // constructor() {
    //     super(); //super ile React componenta ait olan constructor metodunu extend eder.(tüm özelliklerini alır)
    //     this.state = {
    //         showContent: false //Başlangıçta collapse açık değil.
    //     };
    // }

    //Aslıda başlangıç state bilgilerini constructor içinde tanımlamak yerine bu şekilde de tanımlayabiliriz.
    state = {
        showContent: false //Başlangıçta collapse açık değil.
    }


    showMore = () => { //Burada da collapse açıp kapama işlemini yapıyoruz. 
        this.setState({ //setState ile state nesnesini güncelliyoruz.
            showContent: !this.state.showContent //Burada da state nesnesini güncelliyoruz.!Var olan durum neyse onun tersine göre değiştir.
        });
    }

    // componentDidMount() { //Burada da collapse açıp kapama işlemini yapıyoruz.
    //     console.log("componentDidMount");
    // }

    // componentDidUpdate() { //Burada da collapse açıp kapama işlemini yapıyoruz.
    //     console.log("componentDidUpdate");
    // }

    render() {
        return (
            <div>
                {/* "w-100": button %100 kapsıyor. */}
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                    {/* {this.props.children.props.cardTitle} */}
                    {React.Children.map(this.props.children, (child) => { return child.props.cardTitle })} {/* Burada da Card componentinin cardTitle propunu çağırıyoruz. */}
                </button>

                {
                    this.state.showContent ? //Burada da collapse açıp kapama işlemini yapıyoruz.
                        <div className="collapse show">
                            {/* {this.props.children} */}
                            {React.Children.map(this.props.children, (child) => { return child } /* Burada da Card componentinin tüm proplarını çağırıyoruz. */)}
                        </div>
                        : null
                }

            </div>
        );
    }
};

export default Collapse;

