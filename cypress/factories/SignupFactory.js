var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default{

    deliver: function(){
     
        var firstname = faker.name.firstName();
        var lastname = faker.name.lastName();

        var data = {
            name: `${firstname} ${lastname}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstname),
            whatsapp: '62111111111',
            address: {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Ap 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data;
    }

}