function Heading({ text = "Currency Exchange Counter", className = "" }) {
    return (
      <header className={`text-center mb-6 ${className}`}>
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 tracking-wide drop-shadow-md">
          {text}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-black/75">
          Real-time currency conversion made simple
        </p>
      </header>
    );
  }
  
  export default Heading;
  