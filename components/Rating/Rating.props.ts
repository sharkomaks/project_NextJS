export interface RatingProps {
	rating: number;
	isEditable?: boolean;
	setRating?: (rating: number) => void;
}