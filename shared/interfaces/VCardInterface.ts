export interface VCardInterface {
    name: string,
    surname: string,
    company: string,
    job: string,
    email: string,
    website: string,
    phone: PhoneInterface[],
    address: {
        street: string,
        city: string,
        zip: string,
        country: string
    }
}

export type PhoneType = "Work" | "Home" | "Mobile" | "Fax" | "Other"

export interface PhoneInterface {
    id: string,
    type: PhoneType,
    number: string,
    country_code: string
}