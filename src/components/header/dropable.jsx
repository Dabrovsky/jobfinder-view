import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MultiSelect } from "react-multi-select-component";

function Dropable(props) {
  const { items, placeholder, key } = props.options;
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const data = props.selected?.map(val => {
      return {
        value: val,
        label: val
      }
    }) || [];

    setSelected(data);
  }, [props]);

  function handleSelectedChange(data) {
    const selected = {};

    selected[key] = data.map(item => item.value);

    setSelected(data);
    props.handleDropdownChange(selected);
  }

  const customValueRenderer = (selected) => {
    return selected.length
      ? selected.map(({ label }) => label).join(", ")
      : <span className="text-gray-600">{placeholder}</span>;
  };

  return (
    <div className="[&:not(:last-child)]:border-r-2">
      <MultiSelect
        options={items}
        value={selected}
        onChange={handleSelectedChange}
        hasSelectAll={false}
        valueRenderer={customValueRenderer}
        className={"selecteblor"}
      />
    </div>
  );
}

Dropable.propTypes = {
  options: PropTypes.object.isRequired,
  selected: PropTypes.array,
  handleDropdownChange: PropTypes.func.isRequired,
};

export default Dropable;
