import { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import Select, { Option } from "rc-select";
import { Colors } from "../../../constants/constants";
import "./index.scss";

interface IMultiSelectOption {
  label: string | number;
  value: string | number;
}

interface IProps {
  name: string;
  value: Array<string | number>;
  options: IMultiSelectOption[];
  onChange: Function;
  colorable?: boolean;
}

// const customStyles = {
//   indicatorsContainer: (provided, state) => ({
//     ...provided,
//     display: 'none'
//   }),
//   control: (provided, state) => ({
//     ...provided,
//     display: 'none'
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     border: '1px solid',
//     color: `${Colors.turquoise} !important`,
//     borderColor: Colors.turquoise,
//     backgroundColor: `${Colors.darkBlue} !important`,
//     minWidth: 'unset',
//     width: '100%'
//   }),
// }

export default function MultiSelect(props: IProps) {
  const [changed, setChanged] = useState(false)
  const { options, name, onChange, value, colorable } = props;
  const [selectedValue, setSelectedValue] = useState<IMultiSelectOption[]>([]);

  useEffect(() => {
    let selectedValue = options.filter((option) => value.includes(option.value))
    setSelectedValue(selectedValue);
  }, [value, options])

  return (
    <div className={classNames("multi-select", {
      "multi-select--changed": changed && colorable
    })}>
      <Select
        className="multi-select"
        mode="multiple"
        showSearch={false}
        value={selectedValue}
        onSelect={useCallback((value, option) => {
          setChanged(true)
          onChange({
            target: {
              name,
              value: [...selectedValue, option].map(item => item.value)
            },
          })

        }, [selectedValue, setChanged, onChange, name])}
        onDeselect={useCallback((value, option) => {
          setChanged(true)
          onChange({
            target: {
              name,
              value: selectedValue.filter((item) => item.value !== value).map(item => item.value)
            }
          })
        }, [selectedValue, setChanged, onChange, name])}>
        {options.map(option => (<Option key={option.value} value={option.value} >{option.label}</Option>))}
      </Select>
    </div>
  );
}
