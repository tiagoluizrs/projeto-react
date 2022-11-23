import { LinearProgress, CircularProgress  } from '@mui/material';
import Stack from '@mui/material/Stack';
import Text from "../text/text";

const Loading = () => {
    return <Stack sx={{ 
            width: '100%', 
            height: '100vh',
            top: 0,
            left: 0,
            color: 'grey.500',
            background: '#333',
            position: 'fixed',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
        <LinearProgress 
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 9,
                width: '100%'
            }}
            color="inherit"/>
        <CircularProgress color="inherit" />
        <Text
            text="Carregando..."
            variant="h4" 
            component="h1"
            style={{
                color: '#fff',
                textAlign: 'center',
                fontWeight: '400',
                fontFamily: '"Oswald", sans-serif !important'
            }}
        />
    </Stack>
}

export default Loading;