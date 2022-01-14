function Button({ children, onClick, icon, className }) {
  return (
    <button
      className={[
        "buttonContainers outline px-8 py-4 text-white text-xl font-semibold outline-white rounded-xl hover:text-red-600 hover:bg-white transition-all duration-150 ease-out items-center flex " +
          className,
      ]}
      onClick={onClick}
    >
      {children}
      {icon ? <div className="ml-2">{icon}</div> : null}
    </button>
  );
}

export default Button;
