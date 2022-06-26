import React from 'react';

export const ButtonInput = ({ submitClass }) => {
	let defaultClass = "submit-default";
	
    return (
        <input type="submit"
				id="submit"
				value="Enviar"
				className={`${defaultClass} ${submitClass}`}
		/>
    );
};
