function Alert(props) {
    const { children } = props;
    return (
        <div className="alert-container">
            {children}
        </div>
    );
}

export default Alert;
