import { BankMilk } from "../models/bank.models.js"

const bankMilk = [
    {
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', 
    state: 'Acre', 
    local: 'Maternidade Bárbara Heliodora', 
    bank: 'Banco de Leite Humano da Maternidade e Clinica de Mulheres Bárbara Heliodora', 
    adress: 'Av. Getulio Vargas, 811, Centro, Rio Branco - CEP: 69900-373',
    phone: '0800-6471060 / 68-3224-1290',
    email:'blh.acre@gmail.com'
},
{
    id:'8b1deb4d-3b7d-7bad-9bdd-3b0d7b3dcb7d',
    state: 'Alagoas',
    local: 'Hospital Regional de Arapiraca',
    bank:'Banco de Leite Humano Ivete França Lima',
    adress: 'Rua Padre Cícero S/N, , S/Nº , Centro, Arapiraca - CEP: 57300-000',
    phone: ' 82-8109-9112',
    email: 'mariapatricia_rolim@yahoo.com.br'
},
{   id:'9b2deb4d-3b6d-2bad-2bdd-8b0d7b7dcb8d',
    state:'Amapá',
    local:'Hospital da Mulher Mãe Luzia',
    bank: 'Banco de Leite Humano do Hospital da Mulher Mãe Luzia',
    adress: 'Av. Fab, 81 , Centro, Macapa - CEP: 68906-007',
    phone: '96-3225-8732',
    email: 'bancodeleite.ap@gmail.com'
},
{
    id: '7b2deb4d-5b6d-3bad-3bdd-3b0d6b6dcb7d',
    state:'Amazonas',
    local:'Instituto da Mulher Dona Lindu',
    bank: 'Banco de Leite Humano Fesinha Anzoategu',
    adress: 'Av. Mário Ipiranga , 1.581 , Adrianópolis, Manaus - CEP: 69008-200',
    phone: '92-3643-8146',
    email: 'enftaniagondim@hotmail.com'
},
{
    id: '3b2deb4d-4b6d-8bad-4bdd-4b0d6b6dcb8d',
    state:'Bahia',
    local:'Hospital Geral Cleriston Andrade',
    bank: 'BLH e Centro de Referência para o Incentivo ao Aleitamento Materno-HGCA',
    adress: 'AV. Eduardo Fróes da Mota, s/n , 35 BI Feira De Santana - CEP: 44100-000',
    phone: '75-3221-0353',
    email: 'marybiomed@hotmail.com'
},
{
    id: '7b2deb5d-0b6d-0bad-4bdd-5b0d6b6dcb7d',
    state:'Ceará',
    local:'Hospital e Maternidade Jesus Maria José',
    bank: 'Banco de Leite Humano do Hospital e Maternidade Jesus Maria José',
    adress: 'Av. Francisco Almeida Pinheiro, 2.268 , Plan. Universitário Quixada - CEP: 63902-125',
    phone: '88-3412-0681',
    email: 'blhquixada@hotmail.com'
},
{
    id: '6b2deb5d-5b6d-5bad-7bdd-2b0d6b6dcb2d',
    state:'Distrito Federal',
    local:'Hospital Anchieta LTDA',
    bank: 'Banco de Leite Humano do Hospital Anchieta',
    adress: 'Área Especial 8/9/10, s/n , Setor C Norte , Taguatinga Norte Brasilia - CEP: 72115-700',
    phone: '61-3353-9136',
    email: 'ana.claudia@hospitalanchieta.com.br'
},
{
    id: '9b2deb5d-2b6d-1bad-1bdd-1b0d6b6dcb1d',
    state:'Espírito Santo',
    local:'Hospital da Polícia Militar do Espírito Santo',
    bank: 'Banco de Leite Humano do Hospital da Polícia Militar do Espírito Santo',
    adress: 'Avenida Joubert de Barros, 555 , Bento Ferreira Vitoria - CEP: 29050-720',
    phone: '27-3636-6568',
    email: 'blh.ds@pm.es.gov.br'
},
{
    id: '9b2deb5d-2b6d-1bad-1bdd-1b0d6b6dcb1d',
    state:'Goiás',
    local:' Hospital Materno Infantil de Goiania',
    bank: 'Banco de Leite Humano do Hospital Materno Infantil de Goiania',
    adress: 'Av. R-7 esq. com Av. Perimetral, s/n , Setor Oeste/Coimbra Goiania - CEP: 74125-090',
    phone: '62-3956-2921',
    email: 'bcoleite.hmi@igh.org.br'
},
{
    id: '4b2deb5d-2b6d-7bad-6bdd-7b0d5b6dcb1d',
    state:'Maranhão',
    local:'Hospital e Maternidade Marly Sarney (SES)',
    bank: 'Banco de Leite Humano do Hospital e Maternidade Marly Sarney',
    adress: 'Avenida Jerônimo de Albuquerque, s/n , Cohab - Anil Sao Luis - CEP: 65051-210',
    phone: '98-3245-3457',
    email: 'irerocos@hotmail.com'
},
{
    id: '7v2deb4d-5v6d-7yad-5gdd-7u0d6b6dcb8k',
    state:'Mato Grosso',
    local:' Hospital Geral Universitário',
    bank: 'Banco de Leite Humano Dr. José de Faria Vinagre',
    adress: 'Rua Treze de Julho, 2.101 , 2º andar , Centro Cuiaba - CEP: 78005-000',
    phone: '65-3363-7035',
    email: 'blhgucuiaba@gmail.com'
    
},
{
    id: '6u2deb5d-6u6d-6uad-6udd-6u0d6b6dcbud',
    state:'Mato Grosso do Sul',
    local:'Associação Beneficente de Campo Grande',
    bank: 'Banco de Leite Humano Irmã Maria José Machado - Santa Casa Campo Grande - MS',
    adress: 'Rua Eduardo Santos Pereira, 88 , Centro Campo Grande - CEP: 79002-251',
    phone: '67-3322-4174',
    email: 'bancodeleite@sbcg.org.br'
},
{
    id: '2l2deb5d-8j6d-5ouad-8mudd-5yu0d6b7pdcbud',
    state:'Paraíba',
    local:'Complexo de Saúde Cruz das Armas',
    bank: 'Banco de Leite Humano Anita Cabral',
    adress: 'Av. Cruz das Armas, 1.581 , Cruz das Armas Joao Pessoa - CEP: 58085-100',
    phone: '83-3218-4957',
    email: 'blh.anita@gmail.com'
},
{
    id: '1l7deb5d-2j6d-3ouad-4mudd-5yu0d6b6pdcbud',
    state:'Espírito Santo',
    local:'Hospital da Polícia Militar do Espírito Santo',
    bank: 'Banco de Leite Humano do Hospital da Polícia Militar do Espírito Santo',
    adress: 'Avenida Joubert de Barros, 555 , Bento Ferreira Vitoria - CEP: 29050-720',
    phone: '27-3636-6568',
    email: 'blh.ds@pm.es.gov.br'

},
{
    id: '5j8deb5d-6r6d-3yuad-2yudd-2yu0d6b5ydcbud',
    state:'Paraná',
    local:'HNSG - Hospital da Providência',
    bank: 'Banco de Leite Humano do Hospital da Providência / HPMI',
    adress: 'Rua Oliveira Belo, 935 , Umarizal Belem - CEP: 66050-380',
    phone: '43-3420-1479',
    email: 'bancodeleite.hp@hospitaldaprovidencia.org.br'
},
{
    id: '7k8deb5d-5h6d-9yuad-7ludd-8eu0d6b5ydcbud',
    state:'Pernambuco',
    local:' Centro Integrado de Saúde Amauri de Medeiros - CISAM',
    bank: 'Banco de Leite Humano João Aprígio Guerra de Almeida',
    adress: 'Avenida Visconde de Mamanguape s/n, , Encruzilhada Recife - CEP: 52030-010',
    phone: '81-3182-7720',
    email: 'blhcisam@gmail.com'
},
{
    id: '0k8deb5d-0h6d-0yuad-0ludd-0eu0d6b0ydcbud',
    state:'Piauí',
    local:' Maternidade Dona Evangelina Rosa',
    bank: 'Banco de Leite Humano da Maternidade Dona Evangelina Rosa',
    adress: 'Av. Higino Cunha, 1.552 , Ilhotas Teresina - CEP: 64014-220',
    phone: '0800-2802522 / 86-3228-2022',
    email: 'blhpiaui@yahoo.com.br'

},
{
    id: '5t5teb5d-5r6d-5uuad-3gudd-9wu0d6b2wdcbud',
    state:'Rio Grande do Norte',
    local:' Centro de Saúde Reprodutiva de Mossoró',
    bank: 'Banco de Leite Humano do Mossoró',
    adress: 'Rua Juvenal Lamartine, s/n , Santo Antonio Mossoro - CEP: 59611-040',
    phone: '84-3315-3471',
    email: 'mafely_2004@yahoo.com.br'
},
{
    id: '5p5teb5d-5b6d-5tuad-3dudd-9au0d6b2adcbud',
    state:'Rio Grande do Sul',
    local:'Associação Hospital de Caridade de Santo Ângelo',
    bank: 'Banco de Leite Humano do Hospital Santo Ângelo',
    adress: 'Rua Antônio Manuel, 701 , Centro Santo Angelo - CEP: 98801-690',
    phone: '55-3313-2000 ',
    email: 'bancodeleite@hospitalsantoangelo.com'
},
{
    
    id: '1t5teb5d-1r6d-5uuad-1gudd-wu0d1b1wdcbud',
    state:'Rondônia',
    local:'Hospital de Base Dr. Ary Pinheiro',
    bank: 'Banco de Leite Humano Santa Ágata',
    adress: 'Av. Governador Jorge Teixeira, 3.766 , Industrial Porto Velho - CEP: 78915-160',
    phone: '69-3216-5715',
    email: 'bancoleite@bol.com.br' 
},
{
    id: '2t5teb2d-5r6d-2uuad-2gudd-2wu0d6b2wdcbud',
    state:'Roraima',
    local:'Hospital Materno Infantil N. Sra. de Nazareth',
    bank: 'Banco de Leite Humano Dra. Marilurdes Albuquerque',
    adress: 'A. Presidente Costa e Silva, 1.100 , São Francisco Boa Vista - CEP: 69305-115',
    phone: ' 0800-7280144 / 95-4009-4909',
    email: 'bancodeleiterr@outlook.com'
},
{
    id: '2e5teb2d-5e6d-2eead-2guii-2wu0i6b2wdcbud',
    state:'Rio de Janeiro',
    local:'Hospital Central do Exército',
    bank: 'Banco de Leite Humano do Hospital Central do Exército',
    adress: 'Rua Francisco Manuel, 126 , Triagem Rio De Janeiro - CEP: 20911-270',
    phone: '21-3891-7364',
    email: 'bancodeleite.f11@hmtjrj.org.br'
},
{
    id: '2p5peb2d-5p6d-2ppad-2gpdd-2pu0d6b2pdcbud',
    state:'Santa Catarina',
    local:' Hospital Bom Jesus',
    bank: 'Banco de Leite Humano Bom Jesus',
    adress: 'Praça Irmã Paulina, 470 , Centro Ituporanga - CEP: 88400-000',
    phone: '47-3533-1144',
    email: 'eduardohennemann@yahoo.com.br'
},
{
    id: '1p5peb2d-2p6d-3ppad-4gpdd-5pu0d6b6pdcbud',
    state:'São Paulo',
    local:'  Casa da Criança Ondina Amadei Beringhs Taubaté',
    bank: 'Banco de Leite Humano de Taubaté',
    adress: 'Rua Dr. José Luiz de Almeida Soares, 35 , Casa , Jardim Santa Clara Taubate - CEP: 12080-130',
    phone: '12-3624-6814',
    email: 'fefemfer@hotmail.com'
},
{
    id: '6p5peb2d-5p6d-4ppad-3gpdd-2pu0d6b1pdcbud',
    state:'Sergipe',
    local:'Hospital e Maternidade São José',
    bank: 'Banco de Leite Humano Irmã Rafaela Pepel',
    adress: 'Rua Jackson de Figueiredo, 401 , Centro Itabaiana - CEP: 49500-000',
    phone: '79-3431-2290',
    email: 'diretoria@msjose.com.br'
},
{
    id: '5o5oeb2d-7p6d-4ooad-3godd-2ou0d6b1odcbud',
    state:'Tocantins',
    local:'Hospital Dom Orione',
    bank: 'Banco de leite Humano do Hospital Dom Orione Rua Dom Orione, 100 , Centro Araguaina - CEP: 77803-010',
    adress: 'Rua Dom Orione, 100 , Centro Araguaina - CEP: 77803-010',
    phone: '63-3411-8787',
    email: 'bancodeleite@hospitalorione.com.br' 
}
]

export const getAllBanks = () => {
    return bankMilk;
}

export const searchBank = (bankName) => {

    return bankMilk.find(bank => bank.bank === bankName);
}

export const createBanks = (estado, local, bank, adress, phone, email) => {
    const newBank = new BankMilk(estado, local, bank, adress, phone, email);
    bankMilk.push(newBank)
    return newBank;
};



export const updateBanks = (id, email) => {

    const bankAlreadyExist = bankMilk.find(bank => bank.id == id);

    if(bankAlreadyExist){
        let indexBank = bankMilk.findIndex(bank => bank.id == id);
        bankMilk[indexBank].email = email;
        return bankMilk[indexBank];
    }else{
        return "Nao existe um banco com este id"
    }
}


export const deleteBanks = (id) => {
    const bankAlreadyExist = bankMilk.find(bank => bank.id == id);
    if(bankAlreadyExist){
        let indexBank = bankMilk.findIndex(bank => bank.id == id)
        bankMilk.splice(indexBank,1);
        return bankAlreadyExist;
    }
}


export const getBanksByState = (state) => {
    return bankMilk.filter(bank => bank.state.toLowerCase() === state.toLowerCase());
}

