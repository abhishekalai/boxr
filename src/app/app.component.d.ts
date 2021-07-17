export interface IBox {
  id: number;
  position: ICoordinates;
  zIndex: number;
  bgColor: string;
}

export interface ICoordinates {
  x: number;
  y: number;
}

export interface ILog {
  action: 'CREATED' | 'DELETED' | 'UPDATED';
  boxId: IBox['id'];
}
