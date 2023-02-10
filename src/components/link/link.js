import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

/**
 * Simple Link component with an onClick handler
 */
function Link({
	onClick,
	children,
	className = ""
}) {
	const handleKeyDown = ({ keyCode }) => {
		// keyCode 13 is enter key
		if (keyCode === 13) {
			onClick();
		}
	};

	const linkClasses = classNames({
		[`${className}`]: className,
		"as-link": true
	});

	return (
		<span
			onClick={onClick}
			className={linkClasses}
			role="button"
			onKeyDown={handleKeyDown}
			tabIndex="0">
			{children}
		</span>
	);
}


Link.propTypes = {
	/**
	 * Click handler
	 */
	onClick: PropTypes.func.isRequired,
	/**
	 * Children
	 */
	children: PropTypes.node.isRequired,
	/**
	 * Custom class name
	 */
	className: PropTypes.string
};

export default Link;