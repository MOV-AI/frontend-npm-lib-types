import React from "react";
import PropTypes from "prop-types";

export function Enum(props) {
  const { values, enumKey, tooltip, meta } = props;
  const { icon, title } = values[enumKey] ?? meta?.na;

  const { Tooltip, [icon + "Icon"]: Icon } = globalThis.typesComponents;
  const iconEl = Icon ? <Icon /> : icon;

  return <Tooltip title={title ?? tooltip ?? meta?.naTooltip}>{iconEl}</Tooltip>;
}

Enum.propTypes = {
  enumKey: PropTypes.any,
  values: PropTypes.objectOf(PropTypes.any),
  tooltip: PropTypes.string,
};
