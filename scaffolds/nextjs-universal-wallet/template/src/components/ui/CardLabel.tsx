import React from 'react';

interface Props {
  leftHeader?: React.ReactNode;
  rightAction?: React.ReactNode;
  isDisconnect?: boolean;
  [rest: string]: any;
}

const CardLabel = ({ leftHeader, rightAction, isDisconnect, ...rest }: Props) => {
  return (
    <div className="flex justify-between items-center mb-3" {...rest}>
      <div className="text-sm font-medium">{leftHeader}</div>
      {rightAction ? (
        <div
          className={`font-semibold text-sm font-medium hover:opacity-[0.7] active:scale-[0.98] cursor-pointer transition-[0.1s] ${
            isDisconnect ? 'text-[#d43100]' : 'text-[#6851ff]'
          }`}
        >
          {rightAction}
        </div>
      ) : null}
    </div>
  );
};

export default CardLabel;
