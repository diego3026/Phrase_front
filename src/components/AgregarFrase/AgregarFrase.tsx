import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import './AgregarFrase.css'
import { useState } from "react";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: 'var(--rosa_oscuro_palido)',
    '&:hover': {
        backgroundColor: 'var(--rosa_palido)',
    },
}));


const AgregarFrase = ({ close }: any) => {
    const [frase, setFrase] = useState("");
    const [autor, setAutor] = useState("");

    const handleSave = () => {
        close(frase,autor);
    }

    return (
        <div className="contentFrase">
            <h3 className="contentFrase__titulo">Con tu frase inspiras a los demas</h3>
            <div className="contentFrase__form">
                <TextField
                    id="outlined-multiline-flexible"
                    label="Frase"
                    multiline
                    onChange={(e) => setFrase(e.target.value)}
                    rows={8}
                    sx={{
                        width: "100%",
                        height: "60%"
                    }}
                />
                <div className="form__bottom">
                    <div className="bottom__autor">
                        <h3 className="autor__titulo">Autor: </h3>
                        <TextField id="outlined-basic" label="Autor" variant="outlined" onChange={(e) => setAutor(e.target.value)}/>
                    </div>
                    <ColorButton onClick={handleSave} variant="contained" color="success" sx={{ height: "50px", width: "110px" }}>
                        Guardar
                    </ColorButton>
                </div>
            </div>
        </div>
    )
}

export default AgregarFrase;