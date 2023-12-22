import '../styles/components/informationcontainer.sass'


const InformationContainer = () => {
    return(
            <section id="information">
                <div className="info-card card-1">
                    <div>
                        <h3 className="">Telefone</h3>
                        <p>69 99971-8444</p>
                    </div>
                </div>
                <div className="info-card">
                    <div>
                        <h3>E-mail</h3>
                        <p>elielfantichelle@outlook.com.br</p>
                    </div>
                </div>
                <div className="info-card">
                    <div>
                        <h3>Localizacao</h3>
                        <p>São Miguel Do Guaporé / RO</p>
                    </div>
                </div>
            </section>
        )
    }
        
        

export default InformationContainer