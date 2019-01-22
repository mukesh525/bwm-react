import titlize from 'titlize';
export const rentalType = isShared =>  isShared ? 'shared' :'entire';
export const toUpperCase= value => value? titlize(value) :'';

