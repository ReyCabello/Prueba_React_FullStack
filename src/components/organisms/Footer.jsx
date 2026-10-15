import { InformacionTienda } from "../molecules/InformacionTienda";
import { InformacionProyecto } from "../molecules/InformacionProyecto";

export function Footer(){
    return (
        <footer
            className="container-fluid py-5"
            style={{backgroundColor: '#000000'}}
        >
            <div className="container">
                <div className="row gy-4">
                    
                    <div className="col-12 col-md-6">
                        <InformacionTienda />
                    </div>

                    <div className="col-12 col-md-6">
                        <InformacionProyecto />
                    </div>

                </div>

            </div>

        </footer>
    )
}