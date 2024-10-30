export class Vendor {
    id: number;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phoneNumber: string;
    email: string;

    constructor(id: number = 0, code: string = "", name: string = "", address: string = "", city: string = "",
        state: string = "", zip: string = "", phoneNumber: string = "", email: string = "") {
        this.id = id;
        this.code = code;
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    displayVendors(): void {
        console.log(`ID: ${this.id}, Code: ${this.code}, Name: ${this.name}, Address: ${this.address}, 
            City: ${this.city}, State: ${this.state}, Zip: ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`);
    }
}

// var vendors: Vendor[] = [
//     new Vendor(1, 'BF01', 'Baldor Specialty Foods', '55 Food Center Dr', 'Bronx', 'NY', '10474', '718-860-9000', 'info@baldorfood.com'),
//     new Vendor(2, 'DA01', "D'Artagnan", '600 Green Ln', 'Union', 'NJ', '07083', '877-858-0099', 'orders@dartagnan.com'),
//     new Vendor(3, 'CW01', "The Chefs' Warehouse", '240 Food Center Dr', 'Bronx', 'NY', '10474', '800-878-3247', 'chef@chefswarehouse.com'),
//     new Vendor(4, 'GF01', 'Gourmet Foods International', '38 Fairfield Place', 'West Caldwell', 'NJ', '07006', '973-487-3980', 'info@gfifoods.com'),
//     new Vendor(5, 'CP01', 'Cipriani', '376 West Broadway', 'New York', 'NY', '10012', '212-343-0999', 'downtown@cipriani.com'),
//     new Vendor(6, 'MC01', "Murray's Cheese", '254 Bleecker St', 'New York', 'NY', '10014', '212-243-3289', 'orders@murrayscheese.com')
// ];

// function displayVendors(vendors: Vendor[]): void {
//     vendors.forEach(vendor => {
//         console.log(`ID: ${vendor.id}, Code: ${vendor.code}, Name: ${vendor.name}, Address: ${vendor.address}, City: ${vendor.city}, State: ${vendor.state}, Zip: ${vendor.zip}, Phone: ${vendor.phoneNumber}, Email: ${vendor.email}`);
//     });
// }

// displayVendors(vendors);