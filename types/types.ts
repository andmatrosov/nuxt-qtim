type PhoneType = {
  title: string;
  number: string;
};

interface FooterContacts {
  title: string;
  phone?: PhoneType;
  email?: string;
  addres?: string;
  messanger?: string;
}

export { type FooterContacts, type PhoneType };
