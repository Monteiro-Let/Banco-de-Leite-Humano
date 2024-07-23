import { v4 as uuid} from 'uuid';


export class BankMilk {
    constructor(state, local, bank, adress, phone, email){
        this.id = uuid();
        this.state = state;
        this.local = local;
        this.bank = bank;
        this.adress = adress;
        this.phone = phone;
        this.email = email; 
    }
}