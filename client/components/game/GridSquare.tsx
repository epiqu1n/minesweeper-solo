import * as React from 'react';

type GridSquareProps = {
  index: number,
  content: string,
  isRevealed: boolean,
  isFlagged: boolean,
  onClick: (index: number, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
export default function GridSquare({ index, content, isRevealed, isFlagged, onClick }: GridSquareProps) {
  const handleClick = React.useCallback<typeof onClick>((index, event) => {
    if (isRevealed) return;
    onClick(index, event);
  }, [onClick, isRevealed]);

  const display = (
    isRevealed ? content !== '0' && content
    : isFlagged ? 'F'
    : ''
  );
  const className = `n${content} ` + (isRevealed ? '' : 'hidden');

  return (
    <div onContextMenu={(event) => handleClick(index, event)} onClick={(event) => handleClick(index, event)} className={className}>
      {display}
    </div>
  );
}