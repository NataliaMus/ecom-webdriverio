import {faker} from "@faker-js/faker";

export interface CustomerData {
    firstName: string;
    lastName: string;
    postalCode: string;
}

export const correctCustomerData: CustomerData = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    postalCode: faker.address.zipCode()
};

export const successfulOrderInformation = 'Thank you for your order!';

export const firstNameValidation = 'Error: First Name is required';
export const lastNameValidation = 'Error: Last Name is required';
export const postalCodeValidation = 'Error: Postal Code is required';
export const paymentOption = 'SauceCard #31337';