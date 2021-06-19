import React from 'react';
import classes from './dropdown.module.css';

type DropdownItemPropType = {
  children: React.ReactNode;
  value: string;
  onItemSelect(item: { value: string; label: React.ReactNode }): void;
};

function DropdownItem(props: DropdownItemPropType) {
  return (
    <button
      type="button"
      className={classes.dropdown_item}
      onClick={() => {
        props.onItemSelect({ value: props.value, label: props.children });
      }}
    >
      {props.children}
    </button>
  );
}

type PropType = {
  onChange(data?: { value: string; label: React.ReactNode }): void;
  data: { value: string; label: React.ReactNode }[];
};

export function Dropdown(props: PropType) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [filterText, setFilterText] = React.useState('');
  const [selected, setSelected] = React.useState<{
    value: string;
    label: React.ReactNode;
  }>();

  React.useEffect(() => {
    props.onChange(selected);
  }, [selected]);

  // return when no data is present
  if (!Array.isArray(props.data)) return <></>;

  return (
    <div className={classes.container}>
      {!selected ? (
        <input
          type="search"
          placeholder="Start Typing.."
          onChange={(ev) => setFilterText(ev.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 1000 * 0.3)}
        />
      ) : (
        <div className={classes.selected}>
          {selected.label}
          <button
            className={classes.clear_selected}
            type="button"
            onClick={() => setSelected(undefined)}
          >
            ✕
          </button>
        </div>
      )}

      <div
        className={`${classes.dropdown_item_container} ${
          isOpen ? classes.is_open : ''
        }`}
      >
        {props.data
          ?.filter((v) => v.value.toLowerCase().includes(filterText.toLowerCase()))
          ?.map((d) => (
            <DropdownItem
              key={`${d.value} ${d.label}`}
              value={d.value}
              onItemSelect={(data) => {
                setSelected(data);
                setIsOpen(false);
              }}
            >
              {d.label}
            </DropdownItem>
          ))}
      </div>
    </div>
  );
}

// default props...
