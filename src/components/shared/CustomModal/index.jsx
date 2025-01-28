import {
    Dialog,
    DialogContent,
} from "../../ui/dialog"


export function CustomModal({ children, open, setOpen }) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )


}

