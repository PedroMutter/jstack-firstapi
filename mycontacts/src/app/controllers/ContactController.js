const ContactsRepository = require('../repositories/ContactsRepository')

class ContactController {
  async index(req, res) {
    const contacts = await ContactsRepository.findAll()

    res.json(contacts)
  }

  show() {
    // Obter UM registro
  }

  store() {
    // Criar novo registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

// Singleton
module.exports = new ContactController()
