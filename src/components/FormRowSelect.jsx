const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        className="form-select"
        value={value}
        onChange={handleChange}
      >
        {list.map((a, i) => (
          <option key={i} value={a}>
            {a}
          </option>
        ))}
      </select>
    </div>
  );
};
export default FormRowSelect;
