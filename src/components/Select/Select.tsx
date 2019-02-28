import React from 'react';
import { string, func } from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import ReactSelect from 'react-select';


// import { SELECT_OPTION } from 'locale/consts';


import Translate from 'containers/Translate';
import { ValueType, OptionsType } from 'react-select/lib/types';

type LabelType = {
	label: string
};

type Props = {
	label: string,
	value: ValueType<LabelType>,
	options: OptionsType<LabelType>,
	onChange: (value: ValueType<LabelType>) => void
}

const Select = ({
	label, value, options, onChange,
}: Props) => (
		<FormGroup>
			{label && <Label><Translate id={label} /></Label>}
			<ReactSelect
				value={value}
				onChange={onChange}
				options={options}
			// placeholder={<Translate id={SELECT_OPTION} />}
			/>
		</FormGroup>
	);

export default Select;
