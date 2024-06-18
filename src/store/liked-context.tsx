import React, { createContext, useContext, useEffect, useState } from 'react';
import { ILikedContext } from '../types/ILikedContext';
import { IPictureCard } from '../types/IPictureCard';
import config from '../utils/config';

/**
 * This context provides functionality to like or unlike pictures and store in local storage
 */

//Name of local storage object containg liked images
const objectName = config.localStorageObjectName;

//Initiate new context
const LikedPicturesContext = createContext<Partial<ILikedContext>>({});

//Create HOC for providing context to children
const LikedPicturesProvider = (props: any) => {
	//Store liked images in current state
	const [ state, setState ] = useState<IPictureCard[]>([]);

	//get liked images from local storage
	const getLiked = (): IPictureCard[] => {
		const data = localStorage.getItem(objectName);
		if (data) return JSON.parse(data);
		else return [];
	};

	//add image to the liked images list
	const like = (link: string) => {
		//get all saved liked images
		const currentList = getLiked();
		//create new record
		const newLike: IPictureCard = { link, insertDate: new Date() };
		//add new element to saved list
		const updatedList: IPictureCard[] = currentList.concat(newLike);
		//update state with updated list
		setState(updatedList);
		//override local storage item with updated list
		localStorage.setItem(objectName, JSON.stringify(updatedList));
	};
	//remove image from liked images list
	const unlike = (link: string) => {
		//create new list by filtering out the specified image link
		const updatedList = getLiked().filter((element: IPictureCard) => element.link !== link);
		//update state with the new list
		setState(updatedList);
		//update local storage with the new list
		localStorage.setItem(objectName, JSON.stringify(updatedList));
	};

	//check if link is liked
	const isLiked = (link: string): boolean => {
		/**
		 * try to find element on the liked list with filter.
		 * if array is empty then image is not liked.
		 *
		 * we can coerce number types to boolean:
		 * empty array is of length 0 and coerced 0 like this is false -> !!0===false
		 * if we find element then arrray.length>0 -> !!1===true
		 */
		return !!getLiked().filter((element: IPictureCard) => element.link === link).length;
	};

	//reset likes
	const clearLiked = () => {
		setState([]);
		localStorage.removeItem(objectName);
	};

	useEffect(
		() => {
			//on component mounting update state with all saved images in local storage
			setState(getLiked());
		},
		[]
		/**
		 * this empty array here
		 * ensures than this runs
		 * only once,
		 * else it would create a loop
		*/
	);

	return (
		/**
		 * Here we return context provider
		 * with values that we have previously prepared
		 */
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
	//Here we prepare our context to be used with hooks
	const context = useContext(LikedPicturesContext);
	if (context === undefined) {
		console.error(`useLikedPictures must be used within a LikedPictureProvider`);
	}
	return context;
}

export { LikedPicturesProvider, useLikedPictures };
