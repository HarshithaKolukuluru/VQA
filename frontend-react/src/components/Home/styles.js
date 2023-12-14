
const styles = theme => ({
    root: {
        flexGrow: 1,
        minHeight: "100vh"
    },
    grow: {
        flexGrow: 1,
    },
    main: {

    },
    container: {
        backgroundColor: "#ffffff",
        paddingTop: "30px",
        paddingBottom: "20px",
    },
    dropzone: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px",
        borderWidth: "2px",
        borderRadius: "2px",
        borderColor: "#cccccc",
        borderStyle: "dashed",
        backgroundColor: "#fafafa",
        outline: "none",
        transition: "border .24s ease-in-out",
        cursor: "pointer",
        backgroundImage: "url('https://www.svgrepo.com/show/285042/photo-camera.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "400px",
    },
    fileInput: {
        display: "none",
    },
    preview: {
        width: "100%",
    },
    help: {
        color: "#302f2f"
    },
    safe: {
        color: "#31a354",
    },
    poisonous: {
        color: "#de2d26",
    },
    recordingContainer: {
        backgroundColor: "#333333",
        padding: "10px",
    },
    audioContainer: {
        textAlign: "center",
        padding: "10px",
    },
    buttonsContainer: {
        textAlign: "center",
        paddingTop: "10px",
    },
    startRecording: {
        color: "#ffffff",
        fontSize: "3.0rem",
        cursor: "pointer",
    },
    stopRecording: {
        color: "#ff0000",
        fontSize: "3.0rem",
        cursor: "pointer",
    },
    uploadRecording: {
        marginLeft: "20px",
        color: "#ffffff",
        fontSize: "3.0rem",
        cursor: "pointer",
    }

});

export default styles;