import React from "react";
import PropTypes from "prop-types";
import { useCast, MagicContext } from "@tty-pt/styles";
import { Tooltip } from "@material-ui/core";
import MyPropTypes from "../prop-types";
import { defaultMeta } from "../data-types";
import Circle from "./Circle";

export default function TooltipCircle(props) {
  const { value = defaultMeta.na, style, size = 12, dependencies } = props;
  const c = useCast(dependencies?.MagicContext ?? MagicContext);

  return (<Tooltip title={value.title}>
    <span className={c("vertical0 justifyContentCenter")} style={style}>
      <Circle color={value.color} size={size} />
    </span>
  </Tooltip>);
}

TooltipCircle.propTypes = {
  value: PropTypes.shape({
    title: PropTypes.string,
    color: MyPropTypes.color.isRequired,
  }),
  style: MyPropTypes.style,
  size: MyPropTypes.integer,
  dependencies: PropTypes.object,
};
