import React from 'react';
import { Link } from 'react-router-dom';

import { CheckoutFormValues } from '../models/shared/CheckoutFormValues';

import { Formik, Form, Field } from 'formik';
import './styles/CheckoutForm.scss';

export interface ICheckoutFormProps {
	initialFormValues: CheckoutFormValues;
	handlePlaceOrder: (values: CheckoutFormValues) => void;
}

const CheckoutForm: React.FunctionComponent<ICheckoutFormProps> = ({
	initialFormValues,
	handlePlaceOrder,
}) => {
	return (
		<Formik initialValues={initialFormValues} onSubmit={(values) => handlePlaceOrder(values)}>
			<Form className="checkout-form">
				<div className="form-group">
					<label htmlFor="name" className="form-label">
						Full Name
					</label>
					<Field required id="name" name="name" className="form-input" />
				</div>
				<div className="form-group">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<Field required type="email" id="email" name="email" className="form-input" />
				</div>
				<div className="form-group">
					<label htmlFor="zipCode" className="form-label">
						Zip Code
					</label>
					<Field required type="number" id="zipCode" name="zipCode" className="form-input" />
				</div>
				<div className="form-group">
					<label htmlFor="notes" className="form-label">
						Order Notes
					</label>
					<Field as="textarea" id="notes" name="notes" className="form-input" />
				</div>
				<div className="checkout-btns-container">
					<Link to="/" className="btn back-to-cart-btn">
						Back To Cart
					</Link>
					<button className="btn" type="submit">
						Place Order
					</button>
				</div>
			</Form>
		</Formik>
	);
};

export default CheckoutForm;
