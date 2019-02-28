import * as React from 'react';
export interface IProps {
  defaultValue: string;
  // options?: array;
}
function SelectItem({ defaultValue }: IProps) {
  return (
    <div>
      <div
        className="left"
        style={{ float: 'left', width: 100, backgroundColor: 'red' }}
      >
        232432{defaultValue}{' '}
      </div>
      <div
        className="right"
        style={{ float: 'right', width: 100, backgroundColor: 'red' }}
      >
        232432{defaultValue}{' '}
      </div>
      <div className="middle" style={{ margin: 100, backgroundColor: 'black' }}>
        232432{defaultValue}{' '}
      </div>
    </div>
  );
}
export default SelectItem;
