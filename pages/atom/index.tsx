import Button from "../../components/atoms/button/button";
import styles from "../../styles/Atom.module.scss";
import Form from "../../components/atoms/form/form";

export default function Index() {
    return (
        <>
            <div className={styles.backgroundPrimary}>
                <h2>Button</h2>
                <Button name="button" color="primary" size="small" variant="outlined" disabled={false} fullWidth={false} startIcon={null} endIcon={null} onClick={() => {}} margin="margin-10" borderRadius="border-radius-3" backgroundColor="background-color-1"/>
                <Button name="button" color="secondary" size="medium" variant="outlined" disabled={false} fullWidth={false} startIcon={null} endIcon={null} onClick={() => {}} margin="margin-20" borderRadius="border-radius-5" backgroundColor="background-color-2"/>
                <Button name="button" color="default" size="large" variant="outlined" disabled={false} fullWidth={false} startIcon={null} endIcon={null} onClick={() => {}} margin="margin-30" borderRadius="border-radius-10" backgroundColor="background-color-3"/>
                <Button name="button" color="warning" size="small" variant="contained" disabled={false} fullWidth={false} startIcon={null} endIcon={null} onClick={() => {}} margin="margin-10" borderRadius="border-radius-3" backgroundColor="background-warning"/>
            </div>



            <div className={styles.backgroundSecondary}>
                <h2>Form</h2>
                <Form name="form" width="width-50" color="primary" size="small" variant="outlined" disabled={false} fullWidth={false} startIcon={null} endIcon={null} onClick={() => {}} margin="margin-bottom-left-20" borderRadius="border-radius-3" backgroundColor="background-color-1"/>
                <Form name="form" width="width-100" color="secondary" size="medium" variant="outlined" disabled={false} fullWidth={false} startIcon={null} endIcon={null} onClick={() => {}} margin="margin-bottom-left-20" borderRadius="border-radius-5" backgroundColor="background-color-2"/>
                <Form name="form" width="width-200" color="default" size="large" variant="outlined" disabled={false} fullWidth={false} startIcon={null} endIcon={null} onClick={() => {}} margin="margin-bottom-left-20" borderRadius="border-radius-10" backgroundColor="background-color-3"/>
            </div>
        </>
    );
}