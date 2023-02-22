import React from "react";
import { useState, useEffect } from "react";
import TiposDocumentos from "./TiposDocumentos";

const N35 = ({ setLinea })=>{
    const [tipoDocumento, setTipoDocumento] = useState("");
    const [identificacion, setIdentificacion] = useState("");
    const [fechaAfiliacion, setFechaAfiliacion] = useState("");



    const handleTipoDocumento= (e)=>{
      setTipoDocumento(e.target.value);
    }
    const handleIdentificacion= (e)=>{
      setIdentificacion(e.target.value);
    }
    const handleFechaAfiliacion= (e)=>{
      setFechaAfiliacion(e.target.value);
    }

    useEffect(()=>{
      setLinea(prevlinea => [
        {
          ...prevlinea[0],
          L_tpNovedad: "N35",
          N_V1: tipoDocumento,
          O_V2: identificacion,
          P_V3: fechaAfiliacion,
          Q_V4: "",
          R_V5: "",
          S_V6: "",
          T_V7: ""
        }
      ]);
    }, [tipoDocumento,identificacion,fechaAfiliacion]);
    
    return(
        <>
          <fieldset>
            <legend align="right">Novedad: N35</legend>
            <div>
              <label htmlFor="tipoDocumento">Tipo de documento: </label>
              <select
                id="tipoDocumento"
                name="tipoDocumento"
                onChange={(e)=>{handleTipoDocumento(e)}}
                value={tipoDocumento}
              >
                <option value="">Seleccione el tipo de documento:</option>
                <TiposDocumentos />
              </select>
            </div>
            <div>
              <label htmlFor="identificacion">Numero de Documento: </label>
              <input
                id="identificacion"
                name="identificacion"
                onChange={(e)=>{handleIdentificacion(e)}}
                value={identificacion}
                placeholder="Escriba el numero de documento"
              />
            </div>
            <div>
              <label htmlFor="fechaAfiliacion">Fecha de afiliaciony/o Novedad: </label>
              <input
                type="date"
                id="fechaAfiliacion"
                name="fechaAfiliacion"
                onChange={(e)=>{handleFechaAfiliacion(e)}}
                value={fechaAfiliacion}
              />
            </div>
          </fieldset>
        </>
    )
}

export default N35;