import { Button, TextField, Typography, Box,  Container, Paper } from "@mui/material"
import React, { useEffect, useState, SyntheticEvent } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Method } from "axios"
import http from "../../../http"
import IRestaurante from "../../../interfaces/IRestaurante"


const FormularioRestaurante = () => {

    const parametros = useParams()
   
    const navigate = useNavigate()

    useEffect(() => {
        if (parametros.id) {
            http.get<IRestaurante>(`restaurantes/${parametros.id}/`)
                .then(resposta => setNomeRestaurante(resposta.data.nome))

        }
    }, [parametros])

    const [nomeRestaurante, setNomeRestaurante] = useState('')

    const aoSubmeterForm = (evento: SyntheticEvent) => {
        evento.preventDefault()
        let url = '/v2/restaurantes/'
        let method: Method = 'POST'
        if (parametros.id) {
          method = 'PUT'
          url += `${parametros.id}/`
        }
        http.request({
          url,
          method,
          data: {
            nomeRestaurante
          }
        }).then(() => {
          navigate('/dashboard/restaurantes')
        })    
      }
    

    return (

        <Box>
            <Container maxWidth="lg" sx={{ mt: 1 }}>
                <Paper sx={{ p: 2 }}>
                    {/* Conteudo da pagina */}
                    <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
                        <Typography component="h1" variant="h6"> Formulario de Restaurantes</Typography>
                        <Box component="form" sx={{ width: '100%' }} onSubmit={aoSubmeterForm}>
                            <TextField
                                value={nomeRestaurante}
                                onChange={evento => setNomeRestaurante(evento.target.value)}
                                id="standard-basic"
                                label="Nome do Restaurante"
                                variant="standard"
                                fullWidth
                                required
                            />
                            <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="contained">Salvar</Button>
                        </Box>
                    </Box>


                </Paper>
            </Container>
        </Box>



    )
}

export default FormularioRestaurante