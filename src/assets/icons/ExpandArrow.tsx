import React from "react";
import { ExpandArrowWrapper } from "../../sections/study-details/components/styles";

export interface IExpandArrow {
  isExpanded: boolean;
}

export const ExpandArrow: React.FC<IExpandArrow> = ({ isExpanded }) => (
  <ExpandArrowWrapper isExpanded={isExpanded}>
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
    </svg>
  </ExpandArrowWrapper>
);

