import TextField from '@mui/material/TextField';
import Button from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';

const Loginuser = () => {
    
    return (
        <>
            <div>
                <h1>Welcome!</h1>
                <h3>Sign into your Account</h3>
                <TextField
                    helperText="Please enter Email"
                    id="demo-helper-text-aligned"
                    label="Email"
                />
                <TextField
                    helperText="Please enter password"
                    id="demo-helper-text-aligned"
                    label="password"
                />
                {/* <DialogActions>
                    <Button>Submit</Button>
                    <Button>Register</Button>
                </DialogActions> */}

            </div>

        </>
    )
}
export default Loginuser;