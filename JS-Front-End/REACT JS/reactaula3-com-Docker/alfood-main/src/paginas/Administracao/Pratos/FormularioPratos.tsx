import { Button, TextField, Typography, Box, Container, Paper, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Restaurante from "../../../componentes/ListaRestaurantes/Restaurante"
import http from "../../../http"
import IPrato from "../../../interfaces/IPrato"
import IRestaurante from "../../../interfaces/IRestaurante"
import ITag from "../../../interfaces/ITags"


const FormularioPratos = () => {
    const [nomePrato, setNomePrato] = useState('')
    const [descricao, setDescricao] = useState('')
    const [tag, setTag] = useState('')
    const [tags, setTags] = useState<ITag[]>([])
    const [restaurante, setRestaurante] = useState('')
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
    const [imagem, setImagem] = useState<File | null>(null)

    const parametros = useParams()
    useEffect(() => {
        if (parametros.id) {
            http.get<IPrato>(`pratos/${parametros.id}/`)
                .then(resposta => setNomePrato(resposta.data.nome))

        }
    }, [parametros])

    const selecionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
        if (evento.target.files?.length) {
            setImagem(evento.target.files[0])
        } else {
            setImagem(null)
        }
    }

    useEffect(() => {
        http.get<{ tags: ITag[] }>('tags/')
            .then(resposta => setTags(resposta.data.tags))
        http.get<IRestaurante[]>('restaurantes/')
            .then(resposta => setRestaurantes(resposta.data))
    }, [])


    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        const formData = new FormData();

        formData.append('nome', nomePrato)

        formData.append('descricao', descricao)

        formData.append('tag', tag)

        formData.append('restaurante', restaurante)
        
        if(imagem){
            formData.append('imagem', imagem)
        }

        http.request({
            url: 'pratos/',
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        })
            .then(resposta => {
                setNomePrato('')
                setDescricao('')
                setTag('')
                setRestaurante('')
                alert('Prato cadastrado com sucesso!')
            })
            .catch(erro => console.log(erro))

    }

    return (

        <Box>
            <Container maxWidth="lg" sx={{ mt: 1 }}>
                <Paper sx={{ p: 2 }}>
                    {/* Conteudo da pagina */}
                    <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
                        <Typography component="h1" variant="h6"> Formulario de Pratos</Typography>
                        <Box component="form" sx={{ width: '100%' }} onSubmit={aoSubmeterForm}>
                            <TextField
                                value={nomePrato}
                                onChange={evento => setNomePrato(evento.target.value)}
                                id="standard-basic"
                                label="Nome do Prato"
                                variant="standard"
                                fullWidth
                                required
                                margin="dense"
                            />
                            <TextField
                                value={descricao}
                                onChange={evento => setDescricao(evento.target.value)}
                                id="standard-basic"
                                label="Descricao"
                                variant="standard"
                                fullWidth
                                required
                                margin="dense"
                            />
                            <FormControl margin="dense" fullWidth>
                                <InputLabel id="select-tag">Tag</InputLabel>
                                <Select labelId="select-tag" value={tag} onChange={evento => setTag(evento.target.value)}>
                                    {tags.map(tag => <MenuItem key={tag.id} value={tag.value}>
                                        {tag.value}
                                    </MenuItem>)}
                                </Select>

                            </FormControl>
                            <FormControl margin="dense" fullWidth>
                                <InputLabel id="select-restaurante">Restaurante</InputLabel>
                                <Select labelId="select-restaurante" value={restaurante} onChange={evento => setRestaurante(evento.target.value)}>
                                    {restaurantes.map(restaurante => <MenuItem key={restaurante.id} value={restaurante.id}>
                                        {restaurante.nome}
                                    </MenuItem>)}
                                </Select>

                            </FormControl>

                            <input type="file" onChange={selecionarArquivo} />

                            <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="contained">Salvar</Button>
                        </Box>
                    </Box>


                </Paper>
            </Container>
        </Box>



    )
}

export default FormularioPratos