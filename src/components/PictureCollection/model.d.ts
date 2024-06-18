import { IPictureCard } from '../../IPictureCard';

export interface IPictureCollectionView {
	fetchMore: Function | ObjectMethod | ArrowFunctionExpression;
	data: IPictureCard[];
}
