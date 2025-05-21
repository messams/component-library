import { Toast } from "../components/ToastPopup";

const ToastPopups = () => {
    return (
        <div className="h-full w-full flex flex-col ">
            <h1 className="text-6xl font-black mb-16 text-left" style={{ fontFamily: "cursive" }}>TOAST POPUPS</h1>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                <Toast
                    variant="success"
                    title="Success"
                    message="Your work has been saved"
                />

                <Toast
                    variant="warning"
                    title="Warning"
                    message="A network error was detected"
                />

                <Toast
                    variant="information"
                    title="Information"
                    message="Please read updated information"
                />

                <Toast
                    variant="error"
                    title="Error"
                    message="Please re-save your work again"
                />
            </div>
        </div>
    )
}

export default ToastPopups;