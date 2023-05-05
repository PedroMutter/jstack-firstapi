import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts/ef9a38e4-70a7-4519-a1d5-e9f6be674139?orderBy=${orderBy}`);
  }

  async createContact(contact) {
    return this.httpClient.get('/contacts', contact);
  }
}

export default new ContactsService();
