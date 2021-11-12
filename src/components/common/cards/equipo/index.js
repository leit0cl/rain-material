import React, { useState, useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
import { BotonGrillaDetalle } from "../../buttons";
import { EquipoPorId } from '../../../../services/equipos';

function FichaEquipo(props) {
    const mountedRef = useRef(true);

    const [_equipo, setEquipo] = useState({ nombre: '' })


    const handleCallback = (equipoid) => {
        props.callback(equipoid);
    }


    const handleGetEquipo = (id) => {
        let res = EquipoPorId(id);

        res.then(ok => {
            if (ok.data.listEquipos.items[0].nombre) {
                let namelegal = ok.data.listEquipos.items[0].nombre;
                setEquipo({ nombre: namelegal })
            } else {
                setEquipo({ nombre: 'TEST' })
            }

        }).catch(err => {
            console.log(err);
            setEquipo({ nombre: id })
        })
    }

    useEffect(() => {

        handleGetEquipo(props.equipoid);

        return () => {
            mountedRef.current = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (

        <Grid
            container
            spacing={2}
            style={{
                textAlign: "center",
            }}
        >
            <Grid item xs={12}>

                <BotonGrillaDetalle
                    style={{ width: "auto" }}
                    disabled={false}
                    fullwith={"false"}
                    variant="outlined"
                    onClick={() => handleCallback(props.equipoid)}
                >
                    {_equipo.nombre}
                </BotonGrillaDetalle>
            </Grid>


        </Grid>


    );
}

export default FichaEquipo;
