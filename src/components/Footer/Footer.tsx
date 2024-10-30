import { Fab } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
import AddIcon from '@mui/icons-material/Add';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import Dialog from '@mui/material/Dialog';
import { useState } from "react";
import { motion } from "framer-motion";
import AgregarFrase from '../../components/AgregarFrase/AgregarFrase'
import './Footer.css'

const Footer = () => {
    const [isButtonVisibleRefresh, setIsTopButtonVisibleRefresh] = useState(true);
    const [isButtonVisibleAdd, setIsTopButtonVisibleAdd] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleButtonClickLeft = () => {
        setIsTopButtonVisibleRefresh(!isButtonVisibleRefresh);
        setIsTopButtonVisibleAdd(!isButtonVisibleAdd);
    };

    const handleButtonClickRight = () => {
        setIsTopButtonVisibleAdd(!isButtonVisibleAdd);
        setIsTopButtonVisibleRefresh(!isButtonVisibleRefresh);
    };

    return (
        <div className="footer">
            <div className="footer__content">
                <div className="content__left">
                    <motion.button
                        className={isButtonVisibleRefresh ? 'left button_none':'left'}
                        whileHover={{ scale: 1 }}
                        onClick={handleButtonClickLeft}
                    >
                        <NavigateBeforeOutlinedIcon sx={{ color: "var(--rosa_palido)" }} />
                    </motion.button>
                </div>
                <div className="content__options">
                    <motion.button
                        className={isButtonVisibleRefresh ? 'buttonRefresh buttonZindex':'buttonRefresh'}
                        whileHover={{ scale: 1.1 }}
                        animate={{ opacity: isButtonVisibleRefresh ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Fab variant="circular" sx={{background:"var(--blanco)"}}>
                            <RefreshIcon sx={{color:"var(--rosa_oscuro)"}}/>
                        </Fab>
                    </motion.button>
                    
                    <motion.button
                        className={isButtonVisibleAdd ? 'buttonAdd buttonZindex':'buttonAdd'}
                        whileHover={{ scale: 1.1 }} 
                        animate={{ opacity: isButtonVisibleAdd ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Fab variant="circular" sx={{background:"var(--blanco)"}} onClick={handleClickOpen}>
                            <AddIcon sx={{color:"var(--rosa_oscuro)"}}/>
                        </Fab>
                    </motion.button>
                </div>
                <div className="content__right">
                    <motion.button
                        className={isButtonVisibleAdd ? 'right button_none':'right'}
                        whileHover={{ scale: 1 }}
                        onClick={handleButtonClickRight}
                    >
                        <NavigateNextOutlinedIcon sx={{ color: "var(--rosa_palido)" }} />
                    </motion.button>
                </div>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth={true}
                maxWidth={"sm"}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <AgregarFrase close={handleClose}/>
            </Dialog>
        </div>
    )
}

export default Footer;