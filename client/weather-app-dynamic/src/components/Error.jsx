function Error({ message, onRetry }) {
  return (
    <div className="error-message">
      <h2>{message || "Something went wrong."}</h2>
      <p>Search for a valid city.</p>
      <button className="retry" onClick={onRetry}>
        Retry
      </button>
    </div>
  );
}

export default Error;
