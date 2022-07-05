import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Formik, Form, Field } from 'formik';

import { SearchForm } from '../models/shared/SearchForm';
import { setSearchTerm } from '../redux/slices/productSlice';

export interface ISearchInputProps {
	showSearchButton: boolean;
}

const initialFormValues: SearchForm = { searchTerm: '' };

const SearchInput: React.FunctionComponent<ISearchInputProps> = ({ showSearchButton }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const performSearch = (values: SearchForm): void => {
		dispatch(setSearchTerm(values.searchTerm));
		navigate(`/search?q=${values.searchTerm}`);
	};

	return (
		<Formik initialValues={initialFormValues} onSubmit={(values) => performSearch(values)}>
			<Form className="search-form">
				<div className="searchContainer">
					<Field
						required
						id="searchTerm"
						name="searchTerm"
						className="searchInput"
						placeholder="Search"
					/>
				</div>
				{showSearchButton && (
					<button className="btn search-btn" type="submit">
						Search
					</button>
				)}
			</Form>
		</Formik>
	);
};

export default SearchInput;
