import React, { createContext, useState, useEffect } from 'react';
import { ILikedPicture } from '../types/ILikedPicture';
import { ILikedContext } from '../types/ILikedContext';
import { IPictureCard } from '../types/IPictureCard';

const objectName = 'favorites';
const LikedPicturesContext = createContext<Partial<ILikedContext>>({});

const LikedPicturesProvider = (props: any) => {
	const [ state, setState ] = useState<IPictureCard[]>([]);
	const getLiked = (): ILikedPicture[] => {
		const data = localStorage.getItem(objectName);
		if (data) return JSON.parse(data);
		else return [];
	};

	const like = (link: string) => {
		const currentList = getLiked();
		const newLike: ILikedPicture = {
			link,
			insertDate: new Date()
		};
		const updatedList: ILikedPicture[] = currentList.concat(newLike);
		setState(updatedList);

		localStorage.setItem(objectName, JSON.stringify(updatedList));
	};
	const unlike = (link: string) => {
		const updatedList = getLiked().filter((element: ILikedPicture) => element.link !== link);
		setState(updatedList);
		localStorage.setItem(objectName, JSON.stringify(updatedList));
	};
	const isLiked = (link: string): boolean => {
		const element = getLiked().filter((element: ILikedPicture) => element.link === link);
		return element.length > 0 ? true : false;
	};

	const clearLiked = () => {
		localStorage.removeItem(objectName);
	};

	useEffect(() => {
		setState(getLiked());
	}, []);

	return (
		<LikedPicturesContext.Provider
			value={{
				data: state,
				like,
				unlike,
				clearLiked,
				getLiked,
				isLiked
			}}
			{...props}
		/>
	);
};

function useLikedPictures() {
	const context = React.useContext(LikedPicturesContext);
	if (context === undefined) {
		console.error(`useLikedPictures must be used within a LikedPictureProvider`);
	}
	return context;
}

export { LikedPicturesProvider, useLikedPictures };
